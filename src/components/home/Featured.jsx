
import React from 'react';
import { Link } from 'react-router-dom';
import { useFeaturedInstagramPosts } from '../../utils/instagramApi.jsx';
import './Featured.css';

const Featured = () => {
  const { posts, loading, error } = useFeaturedInstagramPosts(4);
  
  if (loading) {
    return (
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Featured Cakes</h2>
            <p className="section-description">
              Discover our most loved and popular cake creations from Instagram in the last 90 days.
            </p>
          </div>
          <div className="instagram-loading">
            <div className="loading-spinner"></div>
            <span>Loading featured cakes...</span>
          </div>
        </div>
      </section>
    );
  }
  
  if (error) {
    return (
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Featured Cakes</h2>
            <p className="section-description">
              Discover our most loved and popular cake creations from Instagram in the last 90 days.
            </p>
          </div>
          <div className="instagram-error">
            <p>{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="featured-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Featured Cakes</h2>
          <p className="section-description">
            Discover our most popular cakes on Instagram in the last 90 days.
          </p>
        </div>
        
        <div className="instagram-featured-grid">
          {posts.map((post) => (
            <div key={post.id} className="instagram-post">
              <div className="post-header">
                <div className="post-user">
                  <div className="user-avatar"></div>
                  <span className="username">{post.username}</span>
                </div>
                <div className="post-more">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="6" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="18" cy="12" r="1.5" fill="currentColor" />
                  </svg>
                </div>
              </div>
              
              <div className="post-image-container">
                <img 
                  src={post.image} 
                  alt={post.caption}
                  className="post-image"
                />
                {post.isNew && (
                  <div className="new-tag">New</div>
                )}
              </div>
              
              <div className="post-actions">
                <div className="post-action">
                  <HeartIcon />
                </div>
                <div className="post-action">
                  <CommentIcon />
                </div>
                <div className="post-action">
                  <ShareIcon />
                </div>
                <div className="post-action-save">
                  <SaveIcon />
                </div>
              </div>
              
              <div className="post-content">
                <div className="post-likes">{post.likes} likes</div>
                <div className="post-caption">
                  <span className="username">{post.username}</span> 
                  <span className="caption-text">{post.caption}</span>
                </div>
                <div className="post-time">{post.postedDate}</div>
                <Link to="/gallery" className="cake-link">
                  View More Photos
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="section-action">
          <Link to="/gallery" className="primary-button">
            View Our Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

// Instagram-style icons
const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const CommentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.656 17.008a9.993 9.993 0 0 0 1.344-5.008c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10c1.755 0 3.4-.454 4.836-1.25M7 15.8l.467-.467c1.126-1.126 1.688-1.688 2.392-1.928a3 3 0 0 1 1.282 0c.704.24 1.267.802 2.392 1.928l.467.467" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShareIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m22 3-9 9m0 0v-7m0 7h7M11 5H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SaveIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 21v-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2m8-10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default Featured;
