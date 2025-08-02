import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './design-system.css'; // Import the Figma design system styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
