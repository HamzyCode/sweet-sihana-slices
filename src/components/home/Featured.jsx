
import React from 'react';
import { Link } from 'react-router-dom';
import { useFeaturedInstagramPosts } from '../../utils/instagram/index.jsx';
import InstaPostCard from '../instagram/InstaPostCard.jsx';
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
            <div key={post.id} className="instagram-post-wrapper">
              <InstaPostCard post={post} />
              <Link to="/gallery" className="cake-link">
                View More Photos
              </Link>
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

export default Featured;
