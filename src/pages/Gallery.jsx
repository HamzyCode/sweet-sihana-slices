
import React, { useState } from 'react';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import useInstagramFeed from '../utils/instagramApi.jsx';
import './Gallery.css';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const { posts, loading, error } = useInstagramFeed(12, filter);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="gallery-section">
          <div className="container">
            <div className="section-header">
              <h1 className="section-title">Our Instagram Feed</h1>
              <p className="section-description">
                Check out our latest cake creations from our Instagram feed
              </p>
              <div className="instagram-handle">
                <InstagramIcon />
                <span>@sihanas_cake</span>
              </div>
            </div>
            
            <div className="gallery-filters">
              <button 
                className={`filter-button ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button 
                className={`filter-button ${filter === 'wedding' ? 'active' : ''}`}
                onClick={() => setFilter('wedding')}
              >
                Wedding
              </button>
              <button 
                className={`filter-button ${filter === 'birthday' ? 'active' : ''}`}
                onClick={() => setFilter('birthday')}
              >
                Birthday
              </button>
              <button 
                className={`filter-button ${filter === 'chocolate' ? 'active' : ''}`}
                onClick={() => setFilter('chocolate')}
              >
                Chocolate
              </button>
              <button 
                className={`filter-button ${filter === 'fruit' ? 'active' : ''}`}
                onClick={() => setFilter('fruit')}
              >
                Fruit
              </button>
            </div>
            
            {loading ? (
              <div className="instagram-loading">
                <div className="loading-spinner"></div>
                <span>Loading Instagram feed...</span>
              </div>
            ) : error ? (
              <div className="instagram-error">
                <p>{error}</p>
                <button onClick={() => window.location.reload()} className="retry-button">
                  Retry
                </button>
              </div>
            ) : (
              <div className="instagram-grid">
                {posts.map(post => (
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
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Instagram-style icons
const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

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

export default Gallery;
