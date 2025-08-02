import React from 'react';
import MainLayout from './MainLayout';
import VideoFeed from './components/VideoFeed';
import VideoDetail from './components/VideoDetail';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Uncomment if using react-router-dom
import './App.css';

/**
 * Main front-end app entrypoint.
 * Handles routing between main feed and video detail pages. For this version, simple toggle for demo.
 */
function App() {
  // Simple toggle for demo: feed or detail (replace with router in real app)
  const [view, setView] = React.useState('feed');

  // Simulate page switch for demonstration.
  function goToDetail() { setView('detail'); }
  function goToFeed() { setView('feed'); }

  return (
    <MainLayout>
      <div>
        <div style={{display:'flex', gap: '14px', marginBottom: 10}}>
          <button className="btn" onClick={goToFeed}>Feed</button>
          <button className="btn" onClick={goToDetail}>Video Detail</button>
        </div>
        {view === 'feed' && <VideoFeed />}
        {view === 'detail' && <VideoDetail />}
      </div>
    </MainLayout>
  );
}

export default App;
