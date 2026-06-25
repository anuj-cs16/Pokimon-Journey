/* ============================================================
 * particles.js — Canvas Particle System
 * Stars, nebula clouds, and Ash's electric trail
 * ============================================================ */

export class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.stars = [];
    this.nebulaClouds = [];
    this.trailParticles = [];
    this.ashPosition = { x: 0, y: 0 }; // screen coordinates
    this.ashMoving = false;
    this.lastAshPos = { x: 0, y: 0 };
    this.time = 0;
    this.resize();
    this.init();

    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  init() {
    // Create stars
    this.stars = [];
    const starCount = Math.min(250, Math.floor((this.width * this.height) / 5000));
    for (let i = 0; i < starCount; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 2 + 0.3,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        color: this._randomStarColor()
      });
    }

    // Create nebula clouds
    this.nebulaClouds = [];
    const cloudColors = [
      'rgba(100, 50, 180, 0.03)',   // purple
      'rgba(30, 60, 150, 0.025)',   // blue
      'rgba(150, 30, 80, 0.02)',    // pink
      'rgba(40, 100, 160, 0.025)',  // teal
      'rgba(80, 20, 120, 0.03)',    // deep purple
    ];
    for (let i = 0; i < 8; i++) {
      this.nebulaClouds.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 300 + 150,
        color: cloudColors[i % cloudColors.length],
        driftX: (Math.random() - 0.5) * 0.15,
        driftY: (Math.random() - 0.5) * 0.1,
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  _randomStarColor() {
    const colors = [
      '#ffffff', '#ffffff', '#ffffff', '#ffffff', // mostly white
      '#ffeedd', '#ddeeff', '#ffe4c4', '#e6e6ff',
      '#fffacd', '#f0e68c'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // Called by scroll system to update Ash's screen position
  updateAshPosition(screenX, screenY) {
    const dx = screenX - this.lastAshPos.x;
    const dy = screenY - this.lastAshPos.y;
    this.ashMoving = Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5;

    if (this.ashMoving) {
      this._emitTrailParticles(screenX, screenY);
    }

    this.lastAshPos.x = screenX;
    this.lastAshPos.y = screenY;
    this.ashPosition.x = screenX;
    this.ashPosition.y = screenY;
  }

  _emitTrailParticles(x, y) {
    // Electric sparks (yellow)
    for (let i = 0; i < 2; i++) {
      this.trailParticles.push({
        x: x + (Math.random() - 0.5) * 10,
        y: y + (Math.random() - 0.5) * 10,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        size: Math.random() * 3 + 1,
        life: 1.0,
        decay: Math.random() * 0.03 + 0.02,
        color: Math.random() > 0.5 ? '#FFD700' : '#FFF176',
        type: 'spark'
      });
    }
    // Stardust (white)
    if (Math.random() > 0.6) {
      this.trailParticles.push({
        x: x + (Math.random() - 0.5) * 15,
        y: y + (Math.random() - 0.5) * 15,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5 - 0.5,
        size: Math.random() * 2 + 0.5,
        life: 1.0,
        decay: Math.random() * 0.015 + 0.01,
        color: '#ffffff',
        type: 'dust'
      });
    }
  }

  update() {
    this.time += 0.016; // ~60fps

    // Update trail particles
    for (let i = this.trailParticles.length - 1; i >= 0; i--) {
      const p = this.trailParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.96;
      p.vy *= 0.96;
      p.life -= p.decay;
      p.size *= 0.98;

      if (p.life <= 0 || p.size < 0.2) {
        this.trailParticles.splice(i, 1);
      }
    }

    // Cap trail particles
    if (this.trailParticles.length > 100) {
      this.trailParticles.splice(0, this.trailParticles.length - 100);
    }

    // Drift nebula clouds
    for (const cloud of this.nebulaClouds) {
      cloud.x += cloud.driftX;
      cloud.y += cloud.driftY;
      // Wrap around
      if (cloud.x < -cloud.radius) cloud.x = this.width + cloud.radius;
      if (cloud.x > this.width + cloud.radius) cloud.x = -cloud.radius;
      if (cloud.y < -cloud.radius) cloud.y = this.height + cloud.radius;
      if (cloud.y > this.height + cloud.radius) cloud.y = -cloud.radius;
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Draw nebula clouds
    for (const cloud of this.nebulaClouds) {
      const breathe = Math.sin(this.time * 0.3 + cloud.phase) * 0.3 + 0.7;
      const gradient = this.ctx.createRadialGradient(
        cloud.x, cloud.y, 0,
        cloud.x, cloud.y, cloud.radius * breathe
      );
      gradient.addColorStop(0, cloud.color);
      gradient.addColorStop(1, 'transparent');
      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(
        cloud.x - cloud.radius, cloud.y - cloud.radius,
        cloud.radius * 2, cloud.radius * 2
      );
    }

    // Draw stars
    for (const star of this.stars) {
      const twinkle = Math.sin(this.time * star.twinkleSpeed * 60 + star.twinklePhase);
      const alpha = star.opacity * (0.6 + twinkle * 0.4);

      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      this.ctx.fillStyle = star.color;
      this.ctx.globalAlpha = Math.max(0.05, alpha);
      this.ctx.fill();

      // Star glow for larger stars
      if (star.size > 1.5) {
        this.ctx.beginPath();
        this.ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
        this.ctx.fillStyle = star.color;
        this.ctx.globalAlpha = alpha * 0.08;
        this.ctx.fill();
      }
    }

    this.ctx.globalAlpha = 1;

    // Draw trail particles
    for (const p of this.trailParticles) {
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.life;
      this.ctx.fill();

      // Glow for sparks
      if (p.type === 'spark' && p.life > 0.3) {
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        this.ctx.fillStyle = p.color;
        this.ctx.globalAlpha = p.life * 0.15;
        this.ctx.fill();
      }
    }

    this.ctx.globalAlpha = 1;
  }

  // Main animation loop
  animate() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.animate());
  }

  start() {
    this.animate();
  }
}
