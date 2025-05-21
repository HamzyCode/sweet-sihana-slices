
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import { products, getCategories, getOccasions } from '../utils/productData.js';
import './Gallery.css';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  // Use only standard occasions: all, birthday, wedding, anniversary, custom
  const occasions = ['all', 'birthday', 'wedding', 'anniversary', 'custom'];
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const filteredItems = filter === 'all' 
    ? products 
    : products.filter(item => (
        item.occasions && item.occasions.includes(filter)
    ));
    
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="gallery-section">
          <div className="container">
            <div className="section-header">
              <h1 className="section-title">Our Cake Gallery</h1>
              <p className="section-description">
                Browse through our delicious creations and get inspired for your next celebration.
              </p>
            </div>
            
            <div className="gallery-filters">
              {occasions.map((occasion) => (
                <button 
                  key={occasion}
                  className={`filter-button ${filter === occasion ? 'active' : ''}`}
                  onClick={() => setFilter(occasion)}
                >
                  {occasion.charAt(0).toUpperCase() + occasion.slice(1)}
                </button>
              ))}
            </div>
            
            <div className="gallery-grid">
              {filteredItems.map(item => (
                <Link to={`/product/${item.id}`} key={item.id} className="gallery-item">
                  <div className="gallery-image-container">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="gallery-image"
                    />
                  </div>
                  <div className="gallery-overlay">
                    <h3 className="gallery-title">{item.name}</h3>
                    <span className="gallery-category">{item.category}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
