/* ============================================================
 * pokedex.js — Ash's Pokédex Logic
 * Handles rendering, filtering, and sorting of Pokedex data.
 * ============================================================ */

import { POKEDEX_DATA } from './pokedex-data.js';

const TYPE_COLORS = {
  Normal: '#A8A878', Fire: '#F08030', Water: '#6890F0', Electric: '#F8D030',
  Grass: '#78C850', Ice: '#98D8D8', Fighting: '#C03028', Poison: '#A040A0',
  Ground: '#E0C068', Flying: '#A890F0', Psychic: '#F85888', Bug: '#A8B820',
  Rock: '#B8A038', Ghost: '#705898', Dragon: '#7038F8', Dark: '#705848',
  Steel: '#B8B8D0', Fairy: '#EE99AC'
};

const REGIONS = ['Kanto', 'Orange Islands', 'Johto', 'Hoenn', 'Battle Frontier', 'Sinnoh', 'Unova', 'Kalos', 'Alola', 'Journeys'];

export class PokedexManager {
  constructor() {
    this.overlay = document.getElementById('pokedex-overlay');
    this.closeBtn = document.getElementById('pokedex-close');
    this.viewToggle = document.getElementById('view-toggle');
    this.searchInput = document.getElementById('pokedex-search');
    this.sortToggle = document.getElementById('sort-toggle');
    
    this.filterRegionContainer = document.getElementById('filter-region');
    this.filterTypeContainer = document.getElementById('filter-type');
    this.contentContainer = document.getElementById('pokedex-content');
    
    this.activeRegions = new Set();
    this.activeTypes = new Set();
    this.searchQuery = '';
    this.strongestFirst = true;
    this.isGridView = true;

    this.init();
  }

  init() {
    this.buildFilters();
    this.bindEvents();
    this.render();
  }

  buildFilters() {
    // Regions
    this.filterRegionContainer.innerHTML = '';
    REGIONS.forEach(region => {
      const chip = document.createElement('div');
      chip.className = 'filter-chip';
      chip.textContent = region;
      chip.dataset.region = region;
      chip.addEventListener('click', () => this.toggleRegion(region, chip));
      this.filterRegionContainer.appendChild(chip);
    });

    // Types
    this.filterTypeContainer.innerHTML = '';
    Object.keys(TYPE_COLORS).forEach(type => {
      const icon = document.createElement('div');
      icon.className = 'type-icon';
      icon.textContent = type.substring(0, 3).toUpperCase();
      icon.style.backgroundColor = TYPE_COLORS[type];
      icon.title = type;
      icon.dataset.type = type;
      icon.addEventListener('click', () => this.toggleType(type, icon));
      this.filterTypeContainer.appendChild(icon);
    });
  }

  bindEvents() {
    this.closeBtn.addEventListener('click', () => this.close());
    
    this.viewToggle.addEventListener('click', () => {
      this.isGridView = !this.isGridView;
      this.viewToggle.textContent = this.isGridView ? 'List View' : 'Grid View';
      this.contentContainer.className = this.isGridView ? 'grid-view' : 'list-view';
      this.render(); // Re-render to apply list specific changes if needed
    });

    this.searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.toLowerCase();
      this.render();
    });

    this.sortToggle.addEventListener('click', () => {
      this.strongestFirst = !this.strongestFirst;
      const icon = this.sortToggle.querySelector('.sort-icon');
      const text = this.sortToggle.querySelector('.sort-text');
      
      icon.textContent = this.strongestFirst ? '↓' : '↑';
      text.textContent = this.strongestFirst ? 'Strongest First' : 'Weakest First';
      
      this.render();
    });
  }

  toggleRegion(region, element) {
    if (this.activeRegions.has(region)) {
      this.activeRegions.delete(region);
      element.classList.remove('active');
    } else {
      this.activeRegions.add(region);
      element.classList.add('active');
    }
    this.render();
  }

  toggleType(type, element) {
    if (this.activeTypes.has(type)) {
      this.activeTypes.delete(type);
      element.classList.remove('active');
    } else {
      this.activeTypes.add(type);
      element.classList.add('active');
    }
    this.render();
  }

  setRegionFilter(region) {
    this.activeRegions.clear();
    document.querySelectorAll('.filter-chip').forEach(el => el.classList.remove('active'));
    
    if (region) {
      this.activeRegions.add(region);
      const chip = document.querySelector(`.filter-chip[data-region="${region}"]`);
      if (chip) chip.classList.add('active');
    }
    this.render();
  }

  getFilteredAndSortedData() {
    let data = POKEDEX_DATA.filter(pokemon => {
      // 1. Search filter
      const matchesSearch = this.searchQuery === '' || 
        pokemon.name.toLowerCase().includes(this.searchQuery) ||
        pokemon.moves.some(m => m.name.toLowerCase().includes(this.searchQuery));
      
      // 2. Region filter
      const matchesRegion = this.activeRegions.size === 0 || this.activeRegions.has(pokemon.region);
      
      // 3. Type filter (multi-select means if ANY of the active types match)
      const matchesType = this.activeTypes.size === 0 || pokemon.types.some(t => this.activeTypes.has(t));

      return matchesSearch && matchesRegion && matchesType;
    });

    // Sort
    data.sort((a, b) => {
      if (this.strongestFirst) {
        return b.powerLevel - a.powerLevel;
      } else {
        return a.powerLevel - b.powerLevel;
      }
    });

    return data;
  }

  render() {
    const data = this.getFilteredAndSortedData();
    this.contentContainer.innerHTML = '';
    
    const countSpan = document.querySelector('.pokedex-count');
    if (countSpan) {
      countSpan.textContent = `${data.length} Pokémon Documented`;
    }

    data.forEach(pokemon => {
      const card = document.createElement('div');
      card.className = 'pokemon-card';
      
      const tierClass = pokemon.powerTier === 'S+' ? 'tier-S-plus' : `tier-${pokemon.powerTier}`;
      const statusClass = pokemon.status.replace(/[^a-zA-Z]/g, '');

      let typesHtml = pokemon.types.map(t => 
        `<span class="type-pill" style="background-color: ${TYPE_COLORS[t]}">${t}</span>`
      ).join('');

      let movesHtml = pokemon.moves.map(m => 
        `<div class="move-item">
          <span class="move-name">${m.name}</span>
          <div>
            <span class="move-cat cat-${m.category}">${m.category}</span>
            <span style="margin-left: 5px;">${m.firstUsed}</span>
          </div>
        </div>`
      ).join('');

      let episodesHtml = pokemon.episodes.map(e => 
        `<div class="episode-item">
          <span style="font-family: var(--font-retro); font-size: 10px;">${e.code}</span>
          <span>${e.title}</span>
        </div>`
      ).join('');

      card.innerHTML = `
        <div class="card-header">
          <img class="pokemon-image" src="${pokemon.image}" alt="${pokemon.name}">
          <div class="tier-badge ${tierClass}">${pokemon.powerTier}</div>
          <div class="region-tag">${pokemon.region}</div>
        </div>
        <div class="card-body">
          <div class="pokemon-info">
            <h3 class="pokemon-name">${pokemon.name}</h3>
            <div class="type-pills">${typesHtml}</div>
            <div class="status-indicator status-${statusClass}">
              <div class="status-dot"></div>
              ${pokemon.status}
            </div>
            ${this.isGridView ? `<div style="font-size: 11px; color: var(--text-dim); margin-bottom: 5px;">Caught: ${pokemon.caughtLocation}</div>` : ''}
          </div>
          
          <div class="expandable-sections">
            <button class="section-toggle" data-target="moves-${pokemon.id}">
              Known Moves <span>▼</span>
            </button>
            <div class="section-content" id="moves-${pokemon.id}">
              ${movesHtml}
            </div>
            
            <button class="section-toggle" style="margin-top: 10px;" data-target="episodes-${pokemon.id}">
              Key Episodes <span>▼</span>
            </button>
            <div class="section-content" id="episodes-${pokemon.id}">
              ${episodesHtml}
            </div>
          </div>
        </div>
      `;

      // Attach toggle listeners
      if (this.isGridView) {
        const toggles = card.querySelectorAll('.section-toggle');
        toggles.forEach(toggle => {
          toggle.addEventListener('click', () => {
            const targetId = toggle.getAttribute('data-target');
            const targetContent = card.querySelector(`#${targetId}`);
            
            // Close others
            card.querySelectorAll('.section-content').forEach(c => {
              if (c.id !== targetId) c.classList.remove('open');
            });
            card.querySelectorAll('.section-toggle span').forEach(s => s.textContent = '▼');
            
            if (targetContent.classList.contains('open')) {
              targetContent.classList.remove('open');
              toggle.querySelector('span').textContent = '▼';
            } else {
              targetContent.classList.add('open');
              toggle.querySelector('span').textContent = '▲';
            }
          });
        });
      }

      this.contentContainer.appendChild(card);
    });
  }

  open(regionFilter = null) {
    if (regionFilter) {
      this.setRegionFilter(regionFilter);
    }
    this.overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  close() {
    this.overlay.classList.add('hidden');
    document.body.style.overflow = '';
  }
}
