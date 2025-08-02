import React from 'react';
import './Sidebar.css';

// PUBLIC_INTERFACE
function Sidebar() {
  /**
   * Sidebar navigation component with static categories.
   */
  return (
    <aside className="sidebar" aria-label="Navigation">
      <nav className="nav-section">
        <div>Accueil</div>
        <div>Explorer</div>
        <div>Shorts</div>
        <div>Abonnements</div>
        <div>Bibliothèque</div>
        <div>Historique</div>
      </nav>
    </aside>
  );
}
export default Sidebar;
