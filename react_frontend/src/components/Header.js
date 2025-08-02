import React, { useState } from 'react';
import SearchBar from './SearchBar';
import './Header.css';

// Dummy authentication for demonstration (replace with OAuth later)
const user = null;

// PUBLIC_INTERFACE
function Header() {
  /**
   * Top navigation header with logo, search, and user actions.
   */
  return (
    <header className="header-bar">
      <span className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube Logo"
          height="20"
        />
      </span>
      <SearchBar />
      <div className="header-user-section">
        {!user ? (
          <button className="connect-btn" tabIndex="0">
            <span role="img" aria-label="user icon" style={{ marginRight: '6px' }}>
              👤
            </span>
            Se connecter
          </button>
        ) : (
          <span className="user-avatar" aria-label="Profile" style={{
            borderRadius: '50%',
            display: 'inline-block',
            width: 32, height: 32,
            background: `url('https://randomuser.me/api/portraits/men/99.jpg') center/cover`
          }}></span>
        )}
      </div>
    </header>
  );
}
export default Header;
