import React, { useState } from 'react';
import VideoCard from './VideoCard';
import './VideoFeed.css';

// Mock data for video cards (mimics the structure from Figma and assets)
const videos = [
  {
    id: 1,
    title: 'Ma première fois au ski',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    avatar: 'https://randomuser.me/api/portraits/men/73.jpg',
    channel: 'MichelVar',
    duration: '3:15',
    views: '1 M de vues',
    published: 'il y a 15 jours',
    isLive: true,
    isVerified: true,
  },
  {
    id: 2,
    title: 'Behind the moon',
    thumbnail: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    avatar: 'https://randomuser.me/api/portraits/women/70.jpg',
    channel: 'Jane Cooper',
    duration: '3:15',
    views: '1 M de vues',
    published: 'il y a 15 jours',
    isLive: false,
    isVerified: false,
  },
  // Add more entries as needed to fill the grid
];

// PUBLIC_INTERFACE
function VideoFeed() {
  /**
   * Renders the video feed as found on the homepage (grid).
   */
  return (
    <div className="feed-rows">
      <div className="feed-row" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        {videos.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
      {/* More .feed-row sections can be added if implementing a paginated grid */}
    </div>
  );
}
export default VideoFeed;
