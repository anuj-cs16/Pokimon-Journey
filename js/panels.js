/* ============================================================
 * panels.js — Handles Region Panels, Home Panels, and Path Cards
 * ============================================================ */

import { NODES, PATHS, TYPE_COLORS, REGION_THEMES, FRIENDS } from './data.js';

export class PanelManager {
  constructor(callbacks) {
    this.callbacks = callbacks; // { onClosePanel }
    this.regionPanel = document.getElementById('region-panel');
    this.panelContent = document.getElementById('panel-content');
    this.pathCard = document.getElementById('path-card');
    this.pathCardContent = document.getElementById('path-card-content');
    this.backdrop = document.getElementById('overlay-backdrop');
    
    // Bind close events
    document.querySelector('.panel-close').addEventListener('click', () => this.closeAll());
    document.querySelector('.card-close').addEventListener('click', () => this.closeAll());
    this.backdrop.addEventListener('click', () => this.closeAll());
  }

  // Helper to get HTML for type pills
  _getTypeHTML(types) {
    if (!types) return '';
    return types.map(t => {
      const color = TYPE_COLORS[t] || '#777';
      return `<span class="type-pill" style="background: ${color}">${t}</span>`;
    }).join('');
  }

  // Open the side panel for a Region
  openRegionPanel(nodeId) {
    const node = NODES.find(n => n.id === nodeId);
    if (!node || node.type !== 'region') return;

    const data = node.data;
    const theme = REGION_THEMES[node.colorKey];
    
    // Set panel accent color
    this.regionPanel.style.setProperty('--panel-accent', theme.neon);

    let html = `
      <div class="panel-header">
        <div class="region-icon" style="color: ${theme.neon}">${node.icon}</div>
        <h2>${node.name.toUpperCase()}</h2>
        <div class="region-subtitle">${node.subtitle}</div>
      </div>
    `;

    // 1. League Result / Special Note
    if (data.specialNote) {
      html += `
        <div class="panel-section">
          <div class="special-note">${data.specialNote}</div>
        </div>
      `;
    } else if (data.league) {
      html += `
        <div class="panel-section">
          <h3 class="panel-section-title">League Record</h3>
          <div class="league-result ${data.league.result.includes('Champion') || data.league.result.includes('Monarch') ? 'champion' : ''}">
            ${data.league.icon} ${data.league.name}: <span style="color: ${theme.neon}">${data.league.result}</span>
          </div>
        </div>
      `;
    }

    // 2. Badges / Symbols
    if (data.badges && data.badges.length > 0) {
      const label = data.badgeLabel || 'Gym Badges';
      html += `
        <div class="panel-section">
          <h3 class="panel-section-title">${label} (${data.badges.length})</h3>
          <div class="badge-row">
            ${data.badges.map(b => `
              <div class="badge-item">
                <div class="badge-dot"></div>
                ${b}
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // 3. Pokémon Caught (with Type Filters)
    if (data.pokemon && data.pokemon.length > 0) {
      // Gather unique types
      const types = new Set();
      data.pokemon.forEach(p => p.types.forEach(t => types.add(t)));
      
      html += `
        <div class="panel-section">
          <h3 class="panel-section-title">Pokémon Team</h3>
          <div class="type-filters">
            <button class="type-filter-btn active" data-type="all">All</button>
            ${Array.from(types).map(t => `<button class="type-filter-btn" data-type="${t}" style="border-color: ${TYPE_COLORS[t]}">${t}</button>`).join('')}
          </div>
          <div class="pokemon-grid" id="region-pokemon-grid">
            ${data.pokemon.map(p => `
              <div class="pokemon-card" data-types="${p.types.join(',')}">
                <span class="p-name">${p.name}</span>
                ${p.special ? `<span style="font-size:10px; color: ${theme.neon}">(${p.special})</span>` : ''}
                ${this._getTypeHTML(p.types)}
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // 4. Goodbyes / Released
    if (data.released && data.released.length > 0) {
      html += `
        <div class="panel-section">
          <h3 class="panel-section-title" style="color: #ff8888; border-color: rgba(255,100,100,0.2)">Goodbyes</h3>
          <div class="goodbye-list">
            ${data.released.map(r => `
              <div class="goodbye-card">
                <div class="pokemon-name">${r.name}</div>
                <div class="goodbye-context">"${r.context}"</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // 5. Story Beats
    if (data.storyBeats && data.storyBeats.length > 0) {
      html += `
        <div class="panel-section">
          <h3 class="panel-section-title">Key Story Arcs</h3>
          <div class="story-timeline">
            ${data.storyBeats.map(b => `
              <div class="story-beat">
                <div class="beat-title">${b.title}</div>
                <div class="beat-desc">${b.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // 6. Companions
    if (data.friends && data.friends.length > 0) {
      const friendData = data.friends.map(name => FRIENDS.find(f => f.name === name)).filter(Boolean);
      html += `
        <div class="panel-section">
          <h3 class="panel-section-title">Traveling Companions</h3>
          <div class="companion-row">
            ${friendData.map(f => `
              <div class="companion-item" title="${f.role}">
                <div class="companion-avatar" style="border-color: ${f.color}">${f.emoji}</div>
                <span class="companion-name">${f.name}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    this.panelContent.innerHTML = html;
    
    // Bind type filter events
    const grid = document.getElementById('region-pokemon-grid');
    if (grid) {
      const cards = grid.querySelectorAll('.pokemon-card');
      const btns = this.panelContent.querySelectorAll('.type-filter-btn');
      
      btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          btns.forEach(b => b.classList.remove('active'));
          e.target.classList.add('active');
          
          const type = e.target.dataset.type;
          cards.forEach(card => {
            if (type === 'all' || card.dataset.types.includes(type)) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
    }

    this._showBackdrop();
    this.regionPanel.classList.add('open');
  }

  // Open panel for Pallet Town / Home
  openHomePanel(nodeId) {
    const node = NODES.find(n => n.id === nodeId);
    if (!node || node.type !== 'home') return;

    const data = node.data;
    const theme = REGION_THEMES[node.colorKey];
    this.regionPanel.style.setProperty('--panel-accent', theme.neon);

    let html = `
      <div class="panel-header">
        <div class="region-icon" style="color: ${theme.neon}">${node.icon}</div>
        <h2>${node.subtitle.toUpperCase()}</h2>
        <div class="region-subtitle">${node.name}</div>
      </div>
      
      <div class="panel-section home-panel-content">
        <div class="home-summary">${data.summary}</div>
      </div>
    `;

    if (data.pokemonAtLab && data.pokemonAtLab.length > 0) {
      html += `
        <div class="panel-section">
          <h3 class="panel-section-title">Pokémon at Oak's Lab (${data.pokemonAtLab.length})</h3>
          <div class="lab-pokemon-grid">
            ${data.pokemonAtLab.map(name => `
              <span class="lab-pokemon-chip">${name}</span>
            `).join('')}
          </div>
        </div>
      `;
    }

    this.panelContent.innerHTML = html;
    this._showBackdrop();
    this.regionPanel.classList.add('open');
  }

  // Open bottom sheet for a Path
  openPathCard(pathId) {
    const path = PATHS.find(p => p.id === pathId);
    if (!path) return;

    const fromNode = NODES.find(n => n.id === path.from);
    const toNode = NODES.find(n => n.id === path.to);

    const fromColor = REGION_THEMES[fromNode.colorKey].neon;
    const toColor = REGION_THEMES[toNode.colorKey].neon;

    let html = `
      <div class="path-card-header">
        <div class="path-from-to">
          <span style="color: ${fromColor}">${fromNode.name}</span>
          <span class="path-arrow">➔</span>
          <span style="color: ${toColor}">${toNode.name}</span>
        </div>
        <div class="travel-method">${path.travelMethod}</div>
      </div>
      
      <div class="path-summary">${path.summary}</div>
      
      <ul class="path-events">
        ${path.events.map(e => `<li>${e}</li>`).join('')}
      </ul>
    `;

    this.pathCardContent.innerHTML = html;
    this._showBackdrop();
    this.pathCard.classList.add('open');
  }

  _showBackdrop() {
    this.backdrop.classList.add('visible');
    // Lock body scroll
    document.body.style.overflow = 'hidden';
  }

  closeAll() {
    this.regionPanel.classList.remove('open');
    this.pathCard.classList.remove('open');
    this.backdrop.classList.remove('visible');
    document.body.style.overflow = '';
    
    if (this.callbacks.onClosePanel) {
      this.callbacks.onClosePanel();
    }
  }
}
