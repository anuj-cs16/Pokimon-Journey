/* ============================================================
 * map.js — SVG Map Renderer
 * Builds nodes, paths, and markers from data.js
 * ============================================================ */

import { NODES, PATHS, FRIENDS, SUB_MAPS, TYPE_COLORS, REGION_THEMES } from './data.js';

export class JourneyMap {
  constructor(svgId) {
    this.svg = document.getElementById(svgId);
    this.pathsLayer = document.getElementById('paths-layer');
    this.subMapLayer = document.getElementById('sub-map-layer');
    this.friendsLayer = document.getElementById('friends-layer');
    this.nodesLayer = document.getElementById('nodes-layer');
    this.ashMarker = document.getElementById('ash-marker');

    this.nodesMap = new Map();
    NODES.forEach(node => this.nodesMap.set(node.id, node));

    this.renderPaths();
    this.renderNodes();
    this.renderFriends();
    this.renderSubMaps();
  }

  // Generate SVG path string with a nice curve
  _createCurvedPath(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Add a natural curve to the path
    const curvature = 0.2; // Adjust for more/less curve
    const midX = x1 + dx / 2 - dy * curvature;
    const midY = y1 + dy / 2 + dx * curvature;

    return `M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`;
  }

  renderPaths() {
    let masterPathD = '';

    PATHS.forEach((path, index) => {
      const fromNode = this.nodesMap.get(path.from);
      const toNode = this.nodesMap.get(path.to);

      if (!fromNode || !toNode) return;

      const d = this._createCurvedPath(fromNode.x, fromNode.y, toNode.x, toNode.y);

      // We append to the master path for Ash to follow
      if (index === 0) {
        masterPathD += d;
      } else {
        // Connect the previous segment to this one smoothly or just start new segment
        masterPathD += ` ${d.replace('M', 'L')}`; 
      }

      // Individual segment group
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', 'path-segment future');
      g.setAttribute('data-path-id', path.id);

      // Define gradient for the path
      const defs = this.svg.querySelector('defs');
      const gradId = `grad-${path.id}`;
      const grad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
      grad.setAttribute('id', gradId);
      grad.setAttribute('x1', '0%');
      grad.setAttribute('y1', '0%');
      grad.setAttribute('x2', '100%');
      grad.setAttribute('y2', '100%');
      
      const c1 = REGION_THEMES[fromNode.colorKey].neon;
      const c2 = REGION_THEMES[toNode.colorKey].neon;
      
      grad.innerHTML = `
        <stop offset="0%" stop-color="${c1}" />
        <stop offset="100%" stop-color="${c2}" />
      `;
      defs.appendChild(grad);

      // Background glow line
      const pathGlow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      pathGlow.setAttribute('d', d);
      pathGlow.setAttribute('class', 'energy-path-glow future');
      pathGlow.setAttribute('stroke', `url(#${gradId})`);
      pathGlow.setAttribute('id', `glow-${path.id}`);
      
      // Foreground animated line
      const pathLine = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      pathLine.setAttribute('d', d);
      pathLine.setAttribute('class', 'energy-path future');
      pathLine.setAttribute('stroke', `url(#${gradId})`);
      pathLine.setAttribute('id', `line-${path.id}`);

      g.appendChild(pathGlow);
      g.appendChild(pathLine);
      this.pathsLayer.appendChild(g);
    });

    // Create the master hidden path for GSAP MotionPath
    const masterPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    masterPath.setAttribute('d', masterPathD);
    masterPath.setAttribute('id', 'master-journey-path');
    masterPath.setAttribute('fill', 'none');
    masterPath.setAttribute('stroke', 'none');
    this.pathsLayer.appendChild(masterPath);
  }

  renderNodes() {
    NODES.forEach((node, index) => {
      const theme = REGION_THEMES[node.colorKey];
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      
      let classList = `node-group ${node.type}-node`;
      if (theme.special) classList += ` ${theme.special}`;
      g.setAttribute('class', classList);
      g.setAttribute('id', `node-${node.id}`);
      g.setAttribute('transform', `translate(${node.x}, ${node.y})`);
      g.setAttribute('data-node-id', node.id);

      // Glow backdrop
      const glow = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      glow.setAttribute('r', node.radius + 15);
      glow.setAttribute('fill', theme.neon);
      glow.setAttribute('class', 'node-glow');
      glow.setAttribute('filter', theme.special ? 'url(#champion-glow)' : 'url(#node-glow)');

      // Outer animated ring
      const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      ring.setAttribute('r', node.radius);
      ring.setAttribute('stroke', theme.main);
      ring.setAttribute('class', 'node-outer-ring');

      // Inner body
      const body = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      body.setAttribute('r', node.radius - 8);
      body.setAttribute('fill', theme.glow);
      body.setAttribute('class', 'node-body');

      // Icon
      const icon = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      icon.setAttribute('class', 'node-icon');
      icon.setAttribute('y', '3'); // slight optical adjustment
      icon.textContent = node.icon;

      // Label (above node)
      const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('class', 'node-label');
      label.setAttribute('y', -(node.radius + 20));
      label.textContent = node.name.toUpperCase();

      // Subtitle (below label)
      const subtitle = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      subtitle.setAttribute('class', 'node-subtitle');
      subtitle.setAttribute('y', -(node.radius + 8));
      subtitle.textContent = node.subtitle;

      g.appendChild(glow);
      g.appendChild(ring);
      g.appendChild(body);
      g.appendChild(icon);
      g.appendChild(label);
      g.appendChild(subtitle);
      
      this.nodesLayer.appendChild(g);
    });
  }

  renderFriends() {
    FRIENDS.forEach(friend => {
      const node = this.nodesMap.get(friend.regionId);
      if (!node) return;

      const x = node.x + friend.offset.x;
      const y = node.y + friend.offset.y;

      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', 'friend-marker');
      g.setAttribute('id', `friend-${friend.id}`);
      g.setAttribute('transform', `translate(${x}, ${y})`);
      g.setAttribute('data-friend-id', friend.id);

      const bg = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      bg.setAttribute('r', 12);
      bg.setAttribute('fill', friend.color);
      bg.setAttribute('opacity', '0.2');
      bg.setAttribute('filter', 'url(#node-glow)');

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('r', 10);
      circle.setAttribute('fill', 'rgba(15, 12, 35, 0.9)');
      circle.setAttribute('class', 'friend-marker-circle');

      const emoji = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      emoji.setAttribute('class', 'friend-marker-emoji');
      emoji.setAttribute('y', '1');
      emoji.textContent = friend.emoji;

      const name = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      name.setAttribute('class', 'friend-marker-name');
      name.setAttribute('y', '20');
      name.textContent = friend.name;

      g.appendChild(bg);
      g.appendChild(circle);
      g.appendChild(emoji);
      g.appendChild(name);
      
      this.friendsLayer.appendChild(g);
    });
  }

  renderSubMaps() {
    // Generate inner region details (hidden initially)
    Object.keys(SUB_MAPS).forEach(regionId => {
      const node = this.nodesMap.get(regionId);
      if (!node) return;
      
      const subMap = SUB_MAPS[regionId];
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('id', `submap-${regionId}`);
      g.setAttribute('transform', `translate(${node.x}, ${node.y})`);

      subMap.locations.forEach(loc => {
        const locG = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        locG.setAttribute('class', 'sub-location');
        locG.setAttribute('transform', `translate(${loc.x}, ${loc.y})`);

        // Connect to center node
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', -loc.x);
        line.setAttribute('y1', -loc.y);
        line.setAttribute('x2', 0);
        line.setAttribute('y2', 0);
        line.setAttribute('class', 'sub-location-connector');

        const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        dot.setAttribute('r', loc.type === 'league' ? 4 : 3);
        dot.setAttribute('class', 'sub-location-dot');
        
        if (loc.type === 'league') {
          dot.setAttribute('fill', REGION_THEMES[node.colorKey].neon);
        }

        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('class', 'sub-location-label');
        label.setAttribute('y', '10');
        label.textContent = loc.name;

        locG.appendChild(line);
        locG.appendChild(dot);
        locG.appendChild(label);
        g.appendChild(locG);
      });

      this.subMapLayer.appendChild(g);
    });
  }

  // Calculate actual length of path elements manually (fallback for GSAP DrawSVG plugin)
  setupPathLengths() {
    document.querySelectorAll('.energy-path').forEach(path => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    });
  }
}
