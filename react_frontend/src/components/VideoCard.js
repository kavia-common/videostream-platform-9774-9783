import React from 'react';
import './VideoCard.css';

// PUBLIC_INTERFACE
function VideoCard({ title, thumbnail, avatar, channel, duration, views, published, isLive, isVerified }) {
  /**
   * Renders a video preview card for feeds.
   */
  return (
    <div className="video-card" tabIndex="0" aria-label={`${title}, ${channel}, ${views}, ${published}${isLive ? ', En direct' : ''}`}>
      <div className="thumbnail" style={{ backgroundImage: `url('${thumbnail}')` }}>
        <span className="video-duration">{duration}</span>
      </div>
      <div className="credits">
        <div className="avatar" style={{ backgroundImage: `url('${avatar}')` }}></div>
        <div className="info">
          <p className="title">{title}</p>
          <div className="channel-meta">
            <span className="channel-row">
              {channel}
              {isVerified && <span className="verified-icon" title="Vérifié">✔️</span>}
            </span>
            <span>{`${views} • ${published}`}</span>
          </div>
          {isLive && (
            <span className="channel-row" style={{ color: 'var(--color-cc0000)', fontSize: 12 }}>
              🔴 En direct
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
export default VideoCard;
