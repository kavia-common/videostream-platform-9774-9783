import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './MainLayout.css';

// PUBLIC_INTERFACE
function MainLayout({ children }) {
  /**
   * Main layout wrapper for the YouTube-like UI. Includes header and sidebar.
   * @param {React.ReactNode} children - Main content displayed right of sidebar.
   * @returns {JSX.Element}
   */
  return (
    <div className="main-app-container">
      <Header />
      <div className="layout-content">
        <Sidebar />
        <main className="main-content" tabIndex="-1">
          {children}
        </main>
      </div>
    </div>
  );
}
export default MainLayout;
