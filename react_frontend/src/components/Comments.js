import React from 'react';
import './Comments.css';

// PUBLIC_INTERFACE
function Comments({ comments }) {
  /**
   * Renders a list of video comments. Props: array of {author, content, date}
   */
  return (
    <section className="video-comments">
      <h2>Commentaires</h2>
      <ul className="comments-list">
        {comments && comments.length ? comments.map((c, i) => (
          <li key={i}>
            <span className="comment-author">{c.author}</span>
            <span className="comment-date">{c.date}</span>
            <div className="comment-content">{c.content}</div>
          </li>
        )) : <li>Aucun commentaire.</li>}
      </ul>
    </section>
  );
}
export default Comments;
