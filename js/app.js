/* ============================================================
 * app.js — Main Application Orchestrator
 * Initializes all modules and handles global interactions
 * ============================================================ */

import { ParticleSystem } from './particles.js';
import { JourneyMap } from './map.js';
import { ScrollManager } from './scroll.js';
import { PanelManager } from './panels.js';
import { FriendManager } from './friends.js';
import { LoaderSequence } from './loader.js';
import { PokedexManager } from './pokedex.js';
import { NODES } from './data.js';

class App {
  constructor() {
    this.init();
  }

  async init() {
    // 0. Initialize Loader
    this.loader = new LoaderSequence({
      onLoadComplete: () => {
        console.log("Loading complete, map revealed.");
      },
      onCloseSequenceComplete: () => {
        console.log("Closing sequence complete.");
        // In a real app, this might redirect to another page
        // window.location.href = '/';
      }
    });

    // 1. Initialize Canvas Particles
    const canvas = document.getElementById('particles-canvas');
    this.particles = new ParticleSystem(canvas);
    this.particles.start();

    // 2. Render SVG Map
    this.map = new JourneyMap('journey-map');

    // 3. Setup Panels
    this.panels = new PanelManager({
      onClosePanel: () => {
        if (this.scroll) this.scroll.resetZoom();
      }
    });

    // 4. Setup Scroll System
    this.scroll = new ScrollManager({
      onNodeReach: (nodeId, index) => {
        this.updateMiniNav(index);
      },
      onAshMove: (screenX, screenY) => {
        this.particles.updateAshPosition(screenX, screenY);
      }
    });

    // 5. Setup Friends
    this.friends = new FriendManager();
    const friendNodes = document.querySelectorAll('.friend-marker');
    this.friends.initInteraction(friendNodes);

    // 6. Initialize Pokédex
    this.pokedex = new PokedexManager();

    // 7. Bind Global Interactions
    this.bindEvents();
    this.buildMiniNav();
  }

  bindEvents() {
    // Node clicks (Zoom in + open panel)
    document.querySelectorAll('.node-group').forEach(nodeEl => {
      nodeEl.addEventListener('click', (e) => {
        const nodeId = nodeEl.getAttribute('data-node-id');
        const nodeData = NODES.find(n => n.id === nodeId);
        
        if (nodeData) {
          // Center camera on node and zoom in
          this.scroll.zoomToNode(nodeId);
          
          // Open appropriate panel
          if (nodeData.type === 'region') {
            this.panels.openRegionPanel(nodeId);
          } else if (nodeData.type === 'home') {
            this.panels.openHomePanel(nodeId);
          }
        }
      });
    });

    // Path clicks (Open bottom sheet)
    document.querySelectorAll('.path-segment').forEach(pathGroup => {
      pathGroup.addEventListener('click', (e) => {
        const pathId = pathGroup.getAttribute('data-path-id');
        this.panels.openPathCard(pathId);
      });
    });

    // Close Journey Button
    const closeBtn = document.getElementById('close-journey-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        gsap.to(window, {
          scrollTo: { y: 0 },
          duration: 0.5,
          onComplete: () => {
            this.loader.executeClosingSequence();
          }
        });
      });
    }

    // Pokédex Button
    const pokedexBtn = document.getElementById('pokedex-btn');
    if (pokedexBtn) {
      pokedexBtn.addEventListener('click', () => {
        this.pokedex.open();
      });
    }

    // Zoom Controls
    const zoomIn  = document.getElementById('zoom-in');
    const zoomOut = document.getElementById('zoom-out');
    const zoomReset = document.getElementById('zoom-reset');

    if (zoomIn) {
      zoomIn.addEventListener('click', () => this.scroll.adjustZoom(-200));
    }
    if (zoomOut) {
      zoomOut.addEventListener('click', () => this.scroll.adjustZoom(200));
    }
    if (zoomReset) {
      zoomReset.addEventListener('click', () => this.scroll.resetZoom());
    }
  }

  buildMiniNav() {
    const nav = document.getElementById('mini-nav');
    
    NODES.forEach((node, i) => {
      const btn = document.createElement('button');
      btn.className = 'mini-nav-dot';
      if (i === 0) btn.classList.add('active');
      
      const tooltip = document.createElement('div');
      tooltip.className = 'nav-tooltip';
      tooltip.textContent = node.name;
      
      btn.appendChild(tooltip);
      
      btn.addEventListener('click', () => {
        this.scroll.scrollToNode(i);
      });
      
      nav.appendChild(btn);
    });
  }

  updateMiniNav(index) {
    const dots = document.querySelectorAll('.mini-nav-dot');
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
}

// Boot the app immediately since this is an ES module (DOM is already parsed)
window.pokemonApp = new App();
