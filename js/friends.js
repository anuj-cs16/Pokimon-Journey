/* ============================================================
 * friends.js — Handles hover tooltips for friend markers
 * ============================================================ */

import { FRIENDS } from './data.js';

export class FriendManager {
  constructor() {
    this.tooltip = document.getElementById('friend-tooltip');
    this.tooltipContent = document.getElementById('friend-tooltip-content');
    
    // Will be initialized in app.js after map renders
  }

  initInteraction(friendMarkers) {
    friendMarkers.forEach(marker => {
      marker.addEventListener('mouseenter', (e) => this.showTooltip(e, marker));
      marker.addEventListener('mouseleave', () => this.hideTooltip());
      marker.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent panel close
        this.showTooltip(e, marker);
      });
    });
  }

  showTooltip(event, markerElement) {
    const friendId = markerElement.getAttribute('data-friend-id');
    const friend = FRIENDS.find(f => f.id === friendId);
    
    if (!friend) return;

    // Build content
    this.tooltipContent.innerHTML = `
      <div class="friend-header">
        <span class="friend-emoji">${friend.emoji}</span>
        <span class="friend-name" style="color: ${friend.color}">${friend.name.toUpperCase()}</span>
      </div>
      <div class="friend-meeting">${friend.meeting}</div>
      <div class="friend-role">${friend.role}</div>
    `;

    this.tooltip.classList.add('visible');

    // Position tooltip
    this.positionTooltip(event);
  }

  hideTooltip() {
    this.tooltip.classList.remove('visible');
  }

  positionTooltip(event) {
    // Get mouse coords
    let x = event.clientX;
    let y = event.clientY;
    
    const rect = this.tooltip.getBoundingClientRect();
    const margin = 20;

    // Default position: slightly below and to the right of cursor
    x += 15;
    y += 15;

    // Check bounds
    if (x + rect.width + margin > window.innerWidth) {
      x = event.clientX - rect.width - 15; // flip left
    }
    
    if (y + rect.height + margin > window.innerHeight) {
      y = event.clientY - rect.height - 15; // flip up
    }

    this.tooltip.style.left = `${x}px`;
    this.tooltip.style.top = `${y}px`;
    this.tooltip.style.transform = 'translateY(0)'; // overrides css initial state
  }
}
