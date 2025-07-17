
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import { products, getFrostingTypes } from '../utils/productData.js';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../utils/translations';
import './Gallery.css';

const Gallery = () => {
  const { language } = useLanguage();
  const [filter, setFilter] = useState('all');
  // Use frosting types for filters
  const frostingTypes = ['all', ...getFrostingTypes()];
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const filteredItems = filter === 'all' 
    ? products 
    : products.filter(item => item.frostingType === filter);
    
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="gallery-section">
          <div className="container">
            <div className="section-header">
              <h1 className="section-title">{t('galleryTitle', language)}</h1>
              <p className="section-description">
                {t('gallerySubtitle', language)}
              </p>
            </div>
            
            <div className="gallery-filters">
              {frostingTypes.map((frostingType) => (
                <button 
                  key={frostingType}
                  className={`filter-button ${filter === frostingType ? 'active' : ''}`}
                  onClick={() => setFilter(frostingType)}
                >
                  {frostingType === 'all' ? t('allFrostingTypes', language) : frostingType}
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
                    <span className="gallery-category">{item.frostingType}</span>
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
