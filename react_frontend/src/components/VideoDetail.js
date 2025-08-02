import React from 'react';
import Recommendations from './Recommendations';
import Comments from './Comments';
import './VideoDetail.css';

// Dummy video object for demonstration. In real use, data loads based on ID.
const video = {
  id: 1,
  title: 'Ma première fois au ski',
  videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  avatar: 'https://randomuser.me/api/portraits/men/73.jpg',
  channel: 'MichelVar',
  isVerified: true,
  views: '1 M de vues',
  published: 'il y a 15 jours',
  description: 'Une vidéo incroyable sur la première expérience au ski...',
  likes: 4320,
  dislikes: 120,
  comments: [
    { author: 'Alice', content: 'Super vidéo !', date: 'il y a 1 heure' },
    { author: 'Bob', content: 'J\'aime beaucoup.', date: 'il y a 2 heures' },
  ],
};

// PUBLIC_INTERFACE
function VideoDetail() {
  /**
   * Video detail page: video playback, info, actions, and comments.
   */
  return (
    <div className="video-detail-layout">
      <section className="video-detail-main">
        <div className="video-player-frame">
          <video controls width="100%" poster={video.thumbnail}>
            <source src={video.videoUrl} type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo HTML5.
          </video>
        </div>
        <h1 className="video-title">{video.title}</h1>
        <div className="video-meta-row">
          <div className="channel-meta">
            <span className="avatar" style={{ backgroundImage: `url('${video.avatar}')` }}></span>
            <span>{video.channel}</span>
            {video.isVerified && <span className="verified-icon" title="vérifié">✔️</span>}
          </div>
          <span className="video-stats">
            {video.views} • {video.published}
          </span>
        </div>
        <div className="video-actions-bar">
          <button className="like-btn" tabIndex="0" aria-label="J'aime">👍 {video.likes}</button>
          <button className="dislike-btn" tabIndex="0" aria-label="Je n'aime pas">👎 {video.dislikes}</button>
          {/* ... Add subscribe, share ... */}
        </div>
        <div className="video-description">{video.description}</div>
        <Comments comments={video.comments} />
      </section>
      <aside className="video-detail-aside">
        <Recommendations />
      </aside>
    </div>
  );
}
export default VideoDetail;
