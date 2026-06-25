/* ============================================================
 * scroll.js — GSAP ScrollTrigger and Motion Path Logic
 * Handles camera movement, Ash marker, and path drawing
 * ============================================================ */

import { NODES, PATHS } from './data.js';

export class ScrollManager {
  constructor(callbacks) {
    this.callbacks = callbacks; // { onNodeReach, onAshMove, onScrollProgress }
    this.svg = document.getElementById('journey-map');
    this.runway = document.getElementById('scroll-runway');
    this.ashMarker = document.getElementById('ash-marker');
    this.progressFill = document.getElementById('progress-bar-fill');
    this.progressPercent = document.getElementById('progress-percent');
    
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
      console.error('GSAP not loaded!');
      return;
    }

    // SVG viewBox defaults — wide enough to see the map
    this.defaultViewBox = { x: 300, y: 200, w: 1400, h: 1400 * (window.innerHeight / window.innerWidth) };
    this.currentViewBox = { ...this.defaultViewBox };

    this.initRunway();
    this.setupScrollTrigger();
  }

  // Create enough scroll height for all nodes
  initRunway() {
    // 20 nodes = 20 viewport heights of scrolling
    this.runway.style.height = `${NODES.length * 100}vh`;
    
    NODES.forEach((node, i) => {
      const section = document.createElement('div');
      section.className = 'scroll-section';
      section.id = `section-${node.id}`;
      this.runway.appendChild(section);
    });
  }

  setupScrollTrigger() {
    // 1. Camera follow Ash (adjusting viewBox)
    const updateCamera = (point) => {
      const viewW = this.currentViewBox.w;
      const viewH = this.currentViewBox.h;
      
      // Look ahead slightly based on scroll direction
      const lookAheadY = 100; 
      
      let targetX = point.x - viewW / 2;
      let targetY = point.y - viewH / 2 + lookAheadY;

      // Clamp to SVG bounds (nodes span x:400-1600, y:400-7100)
      targetX = Math.max(-200, Math.min(targetX, 1800 - viewW));
      targetY = Math.max(-200, Math.min(targetY, 7500 - viewH));

      // Only update if we're not zoomed in to a node
      if (!this.svg.classList.contains('zoomed')) {
        gsap.to(this.svg, {
          attr: { viewBox: `${targetX} ${targetY} ${viewW} ${viewH}` },
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      }

      // Convert SVG coordinates to screen coordinates for Particle System
      const svgRect = this.svg.getBoundingClientRect();
      const scaleX = svgRect.width / viewW;
      const scaleY = svgRect.height / viewH;
      
      const screenX = (point.x - targetX) * scaleX + svgRect.left;
      const screenY = (point.y - targetY) * scaleY + svgRect.top;
      
      if (this.callbacks.onAshMove) {
        this.callbacks.onAshMove(screenX, screenY);
      }
    };

    // Main Timeline
    this.mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: this.runway,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1, // Smooth scrubbing
        onUpdate: (self) => {
          // Update progress UI
          const progress = Math.round(self.progress * 100);
          this.progressFill.style.width = `${progress}%`;
          this.progressPercent.textContent = `${progress}%`;
          
          if (this.callbacks.onScrollProgress) {
            this.callbacks.onScrollProgress(progress);
          }

          // Hide title overlay on first scroll
          if (self.progress > 0.01) {
            document.getElementById('title-overlay').classList.add('hidden');
          } else {
            document.getElementById('title-overlay').classList.remove('hidden');
          }
        }
      }
    });

    // 2. Animate Ash along the master path manually since we might not have MotionPathPlugin
    // Get master path length
    const masterPath = document.getElementById('master-journey-path');
    let pathLength = 0;
    
    // Fallback if GSAP MotionPath is not available
    if (masterPath && masterPath.getTotalLength) {
      pathLength = masterPath.getTotalLength();
      
      // Create a proxy object to tween
      const proxy = { p: 0 };
      
      this.mainTimeline.to(proxy, {
        p: 1,
        ease: 'none',
        onUpdate: () => {
          // Get point on path at current progress
          const point = masterPath.getPointAtLength(proxy.p * pathLength);
          
          // Move Ash
          gsap.set(this.ashMarker, {
            x: point.x,
            y: point.y
          });
          
          // Update Camera
          updateCamera(point);
          
          // Check node proximity
          this.checkNodeProximity(point);
          this.checkPathReveal(proxy.p);
        }
      });
    }

    // Set initial camera
    if (NODES.length > 0) {
      const startPoint = { x: NODES[0].x, y: NODES[0].y };
      gsap.set(this.ashMarker, { x: startPoint.x, y: startPoint.y });
      // Small delay to ensure DOM is ready
      setTimeout(() => updateCamera(startPoint), 100);
    }
  }

  // Activate nodes as Ash gets close
  checkNodeProximity(point) {
    const activationDistance = 150; // SVG units

    NODES.forEach((node, i) => {
      const dx = point.x - node.x;
      const dy = point.y - node.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      
      const nodeEl = document.getElementById(`node-${node.id}`);
      if (!nodeEl) return;

      if (dist < activationDistance) {
        if (!nodeEl.classList.contains('active')) {
          // Deactivate others
          document.querySelectorAll('.node-group.active').forEach(el => {
            el.classList.remove('active');
            el.classList.add('visited');
          });
          
          nodeEl.classList.add('active');
          nodeEl.classList.remove('visited');
          
          if (this.callbacks.onNodeReach) {
            this.callbacks.onNodeReach(node.id, i);
          }
        }
      }
    });
  }

  // Reveal paths as we scroll down
  checkPathReveal(progress) {
    // Simple approach: based on total segments
    const totalSegments = PATHS.length;
    const currentSegmentIndex = Math.floor(progress * totalSegments);

    PATHS.forEach((path, i) => {
      const line = document.getElementById(`line-${path.id}`);
      const glow = document.getElementById(`glow-${path.id}`);
      
      if (!line || !glow) return;

      if (i <= currentSegmentIndex) {
        line.classList.remove('future');
        line.classList.add('revealed');
        glow.classList.remove('future');
        glow.classList.add('revealed');
      } else {
        line.classList.add('future');
        line.classList.remove('revealed');
        glow.classList.add('future');
        glow.classList.remove('revealed');
      }
    });
  }

  scrollToNode(index) {
    const totalScroll = this.runway.scrollHeight - window.innerHeight;
    const targetProgress = index / (NODES.length - 1);
    
    // Use GSAP scroll to smoothly scroll the window
    gsap.to(window, {
      scrollTo: { y: targetProgress * totalScroll, autoKill: false },
      duration: 1.5,
      ease: 'power3.inOut'
    });
  }

  // Zoom into a node when clicked
  zoomToNode(nodeId) {
    const node = NODES.find(n => n.id === nodeId);
    if (!node) return;

    this.svg.classList.add('zoomed');
    document.getElementById(`node-${nodeId}`).classList.add('zoomed-target');

    // Calculate tighter viewbox
    const zoomW = 800; // SVG units
    const zoomH = zoomW * (window.innerHeight / window.innerWidth);
    
    // If mobile, offset the center up because the bottom sheet covers the bottom half
    let offsetY = 0;
    if (window.innerWidth < 768) {
      offsetY = zoomH * 0.25; 
    }

    gsap.to(this.svg, {
      attr: { viewBox: `${node.x - zoomW/2} ${node.y - zoomH/2 - offsetY} ${zoomW} ${zoomH}` },
      duration: 0.8,
      ease: 'power3.inOut'
    });
  }

  // Adjust zoom by changing the viewBox width (delta > 0 zooms out, delta < 0 zooms in)
  adjustZoom(delta) {
    const minW = 600;
    const maxW = 3000;
    const newW = Math.max(minW, Math.min(maxW, this.currentViewBox.w + delta));
    const newH = newW * (window.innerHeight / window.innerWidth);
    this.currentViewBox.w = newW;
    this.currentViewBox.h = newH;

    if (!this.svg.classList.contains('zoomed')) {
      // Get current viewBox center and re-center
      const vb = this.svg.viewBox.baseVal;
      const cx = vb.x + vb.width / 2;
      const cy = vb.y + vb.height / 2;
      gsap.to(this.svg, {
        attr: { viewBox: `${cx - newW/2} ${cy - newH/2} ${newW} ${newH}` },
        duration: 0.4,
        ease: 'power2.out'
      });
    }
  }

  // Reset zoom back to Ash tracking
  resetZoom() {
    this.svg.classList.remove('zoomed');
    this.currentViewBox = { ...this.defaultViewBox };
    const zoomedTarget = document.querySelector('.zoomed-target');
    if (zoomedTarget) zoomedTarget.classList.remove('zoomed-target');

    // Force an update on the timeline to snap camera back
    const st = this.mainTimeline.scrollTrigger;
    if (st) {
       st.update(); 
    }
  }
}
