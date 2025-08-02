import React from 'react';
import VideoCard from './VideoCard';
import './Recommendations.css';

// Dummy recommendations (replace with props/API if available)
const recs = [
  {
    id: 10,
    title: 'Awesome animals in the wild',
    thumbnail: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    channel: 'Jane Cooper',
    duration: '3:15',
    views: '382 K vues',
    published: 'il y a 8 jours',
    isLive: false,
    isVerified: false,
  }
];

// PUBLIC_INTERFACE
function Recommendations() {
  /**
   * Renders right-sidebar recommendations on the video detail page.
   */
  return (
    <aside className="recommendations-aside">
      <h3>À regarder ensuite</h3>
      {recs.map(v => (
        <VideoCard key={v.id} {...v} />
      ))}
    </aside>
  );
}
export default Recommendations;
