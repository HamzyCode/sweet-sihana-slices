
import React, { useState } from 'react';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import useInstagramFeed from '../utils/instagramApi.jsx';
import InstaPostCard from '../components/instagram/InstaPostCard.jsx';
import { Instagram } from 'lucide-react';
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
                <Instagram size={24} />
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
                  <InstaPostCard key={post.id} post={post} />
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

export default Gallery;
