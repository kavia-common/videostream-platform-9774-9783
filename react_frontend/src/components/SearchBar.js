import React, { useState } from 'react';
import './SearchBar.css';

// PUBLIC_INTERFACE
function SearchBar({ onSearch }) {
  /**
   * Search bar for video queries, calls onSearch handler with text input.
   */
  const [q, setQ] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(q.trim());
  };

  return (
    <form className="search-bar" role="search" onSubmit={handleSubmit} style={{ flexGrow: 1 }}>
      <input
        type="text"
        placeholder="Rechercher"
        aria-label="Rechercher"
        value={q}
        onChange={e => setQ(e.target.value)}
      />
      <button type="submit" title="Chercher" aria-label="Chercher">
        <span aria-hidden="true">🔍</span>
        <span className="visually-hidden">Chercher</span>
      </button>
    </form>
  );
}
export default SearchBar;
