/* ============================================================
 * loader.js — Cinematic Poké Ball Loading Sequence
 * Handles Entry (Load) and Exit (Close) transitions using GSAP
 * ============================================================ */

export class LoaderSequence {
  constructor(callbacks) {
    this.callbacks = callbacks; // { onLoadComplete, onCloseSequenceComplete }
    
    // DOM Elements
    this.overlay = document.getElementById('loader-overlay');
    this.ballContainer = document.getElementById('poke-ball-container');
    this.ballTop = document.querySelector('.poke-ball-top');
    this.ballButtonInner = document.getElementById('poke-button-inner');
    this.progressText = document.getElementById('loader-progress-text');
    this.progressFill = document.getElementById('loader-progress-bar-fill');
    this.particlesContainer = document.getElementById('loader-particles');
    this.whiteFlash = document.getElementById('white-flash');
    this.redFlash = document.getElementById('red-flash');
    
    // Map elements (to reveal/hide)
    this.mapSvg = document.getElementById('journey-map');
    this.nodesLayer = document.getElementById('nodes-layer');
    this.pathsLayer = document.getElementById('paths-layer');
    this.ashMarker = document.getElementById('ash-marker');
    this.titleOverlay = document.getElementById('title-overlay');
    this.progressContainer = document.getElementById('progress-container');
    this.miniNav = document.getElementById('mini-nav');

    // Initially hide map elements
    gsap.set([this.mapSvg, this.titleOverlay, this.progressContainer, this.miniNav], { opacity: 0 });
    
    this.particleInterval = null;
    this.initLoadingPhase();
  }

  // Generate floating sparks during load
  _createLoadSpark() {
    if (!this.particlesContainer) return;
    const spark = document.createElement('div');
    spark.className = 'loader-spark';
    
    // Random position around center
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const angle = Math.random() * Math.PI * 2;
    const radius = 60 + Math.random() * 100;
    
    spark.style.left = `${cx + Math.cos(angle) * radius}px`;
    spark.style.top = `${cy + Math.sin(angle) * radius}px`;
    
    this.particlesContainer.appendChild(spark);
    
    // Animate up and fade out
    gsap.to(spark, {
      y: '-=100',
      x: `+=${(Math.random() - 0.5) * 50}`,
      opacity: 0,
      duration: 1 + Math.random(),
      ease: 'power1.out',
      onComplete: () => spark.remove()
    });
  }

  // Generate suction particles during close
  _createSuctionParticle() {
    if (!this.particlesContainer) return;
    const particle = document.createElement('div');
    particle.className = 'loader-suction-particle';
    
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    
    // Start from outside edges
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.max(window.innerWidth, window.innerHeight) / 2 + Math.random() * 200;
    
    const startX = cx + Math.cos(angle) * radius;
    const startY = cy + Math.sin(angle) * radius;
    
    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;
    
    this.particlesContainer.appendChild(particle);
    
    // Suck into center fast
    gsap.to(particle, {
      left: cx,
      top: cy,
      opacity: 0,
      duration: 0.4 + Math.random() * 0.3,
      ease: 'power3.in',
      onComplete: () => particle.remove()
    });
  }

  initLoadingPhase() {
    // 1. Spinning ball (Y-axis flip)
    gsap.to(this.ballContainer, {
      rotationY: 360 * 5, // Spin multiple times
      duration: 3,
      ease: 'power2.inOut'
    });

    // Add a slight tilt wobble while spinning
    this.wobbleTween = gsap.to(this.ballContainer, {
      rotationZ: 10,
      duration: 0.15,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });

    // Button pulse
    gsap.to(this.ballButtonInner, {
      backgroundColor: '#FF1A1A',
      boxShadow: '0 0 10px #FF1A1A',
      duration: 0.5,
      yoyo: true,
      repeat: -1
    });

    // Emit sparks
    this.particleInterval = setInterval(() => this._createLoadSpark(), 100);

    // Simulate loading progress
    const proxy = { progress: 0 };
    gsap.to(proxy, {
      progress: 100,
      duration: 2.8,
      ease: 'power1.inOut',
      onUpdate: () => {
        const val = Math.round(proxy.progress);
        this.progressText.textContent = `SYNCING JOURNEY DATA... ${val}%`;
        this.progressFill.style.width = `${val}%`;
      },
      onComplete: () => {
        clearInterval(this.particleInterval);
        this.executeOpeningTransition();
      }
    });
  }

  executeOpeningTransition() {
    if (this.wobbleTween) this.wobbleTween.kill();
    
    const tl = gsap.timeline({
      onComplete: () => {
        if (this.callbacks.onLoadComplete) this.callbacks.onLoadComplete();
        this.overlay.style.pointerEvents = 'none'; // allow clicks through
      }
    });

    // Hide progress UI
    tl.to(['#loader-progress-container', '.loader-shockwave'], { opacity: 0, duration: 0.3 });

    // 1. Scale Up with elastic ease
    tl.to(this.ballContainer, {
      scale: 8,
      rotationY: 0, // ensure facing forward
      rotationZ: 0,
      duration: 1,
      ease: 'back.out(1.5)' // overshoot slightly
    }, '+=0.2');

    // 2. The Open (Top half clicks open)
    tl.to(this.ballTop, {
      rotationX: 110, // Spring open
      duration: 0.4,
      ease: 'back.out(2)'
    }, '-=0.2');

    // 3. White Flash (Blinding)
    tl.to(this.whiteFlash, {
      opacity: 1,
      duration: 0.15,
      ease: 'power4.in'
    }, '-=0.1');

    // Hide loader overlay under the flash
    tl.set(this.overlay, { opacity: 0 });

    // 4. Map Reveal Setup (Nodes emerge from center)
    // We animate nodes scaling from 0 at the center point of the SVG
    // First, set initial state for map reveal
    tl.set(this.mapSvg, { opacity: 1, scale: 0.9 });
    const nodes = document.querySelectorAll('.node-group');
    tl.set(nodes, { opacity: 0, scale: 0.5 });
    tl.set(this.ashMarker, { opacity: 0, scale: 0 });
    tl.set('.energy-path', { opacity: 0 }); // Hide paths initially
    tl.set('.energy-path-glow', { opacity: 0 });

    // Fade white flash out
    tl.to(this.whiteFlash, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });

    // Fade in Map SVG container and zoom out slightly
    tl.to(this.mapSvg, {
      scale: 1,
      duration: 1.5,
      ease: 'power2.out'
    }, '-=0.8');

    // Reveal Nodes (staggered outward)
    tl.to(nodes, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: {
        amount: 0.5,
        from: 'start' // from pallet town outwards
      },
      ease: 'back.out(1.2)'
    }, '-=1.2');

    // Reveal UI elements
    tl.to([this.titleOverlay, this.progressContainer, this.miniNav], {
      opacity: 1,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.5');

    // Pop in Ash Marker
    tl.to(this.ashMarker, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: 'elastic.out(1, 0.5)'
    }, '-=0.3');
  }

  // Call this to trigger the closing sequence
  executeClosingSequence() {
    this.overlay.style.pointerEvents = 'auto'; // block interactions
    this.overlay.style.opacity = 1;
    this.overlay.style.background = 'transparent'; // Let map show through before suction

    const tl = gsap.timeline({
      onComplete: () => {
        if (this.callbacks.onCloseSequenceComplete) this.callbacks.onCloseSequenceComplete();
      }
    });

    // 1. Red Flash
    tl.to(this.redFlash, {
      opacity: 1,
      duration: 0.15,
      ease: 'power4.in'
    });

    // Setup Ball for capture
    tl.set(this.ballContainer, { scale: 0.1, rotationY: 0, rotationZ: 0, opacity: 0 });
    tl.set(this.ballTop, { rotationX: 110 }); // Open
    tl.set('.loader-bg-glow', { opacity: 0 }); // hide background glows

    // Fade flash slightly to reveal suction
    tl.to(this.redFlash, {
      opacity: 0.7,
      duration: 0.3
    });

    // 2. Shrink Sequence (Suction)
    // Create suction particles
    this.particleInterval = setInterval(() => this._createSuctionParticle(), 30);

    // Pull UI away
    tl.to([this.titleOverlay, this.progressContainer, this.miniNav, '#region-panel', '#path-card', '#friend-tooltip'], {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: 'power2.in'
    }, '-=0.3');

    // Map gets sucked into center of screen
    // We simulate this by scaling down the whole SVG dramatically with blur
    tl.to(this.mapSvg, {
      scale: 0.05,
      opacity: 0,
      duration: 0.8,
      ease: 'cubic-bezier(0.7, 0, 0.84, 0)', // exponential in
      onUpdate: function() {
        // Add fake radial blur by smearing scale
        const blur = (1 - this.progress()) * 10;
        document.getElementById('journey-map').style.filter = `blur(${blur}px)`;
      }
    }, '-=0.1');

    // 3. Capture Moment (Ball appears and shuts)
    tl.to(this.ballContainer, {
      opacity: 1,
      scale: 2,
      duration: 0.2,
      ease: 'power2.out'
    }, '-=0.2');

    // Slam shut (CLACK)
    tl.to(this.ballTop, {
      rotationX: 0,
      duration: 0.15,
      ease: 'power4.in',
      onComplete: () => clearInterval(this.particleInterval)
    });

    // Flash white on shut
    tl.to(this.whiteFlash, { opacity: 0.5, duration: 0.05 }, '-=0.05');
    tl.to(this.whiteFlash, { opacity: 0, duration: 0.2 });

    // Fade out Red flash completely
    tl.to(this.redFlash, { opacity: 0, duration: 0.5 }, '-=0.5');

    // 4. Final Wobble & Shrink
    // Wobble left, then right, then center
    tl.to(this.ballContainer, { rotationZ: 15, duration: 0.2, ease: 'power1.inOut' }, '+=0.2');
    tl.to(this.ballContainer, { rotationZ: -15, duration: 0.2, ease: 'power1.inOut' });
    tl.to(this.ballContainer, { rotationZ: 0, duration: 0.1, ease: 'power1.inOut' });

    // Final pulse
    tl.to(this.ballButtonInner, {
      backgroundColor: '#FF1A1A',
      boxShadow: '0 0 20px #FF1A1A',
      duration: 0.2,
      yoyo: true,
      repeat: 1
    });

    // Shrink and fade to black
    tl.to(this.ballContainer, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: 'back.in(1.5)'
    }, '+=0.3');

    // Fade overlay to solid black
    tl.to(this.overlay, {
      background: '#000',
      opacity: 1,
      duration: 0.5
    }, '-=0.5');
  }
}
