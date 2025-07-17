
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import { products, getCategories } from '../utils/productData.js';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../utils/translations';
import './Menu.css';

const Menu = () => {
  const { language } = useLanguage();
  const [filter, setFilter] = useState('all');
  const categories = ['all', ...getCategories()];
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const filteredItems = filter === 'all' 
    ? products 
    : products.filter(item => item.category === filter);
    
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="menu-section">
          <div className="container">
            <div className="section-header">
              <h1 className="section-title">{t('menuTitle', language)}</h1>
              <p className="section-description">
                {t('menuSubtitle', language)}
              </p>
            </div>
            
            <div className="menu-filters">
              {categories.map((category) => (
                <button 
                  key={category}
                  className={`filter-button ${filter === category ? 'active' : ''}`}
                  onClick={() => setFilter(category)}
                >
                  {category === 'all' ? t('allCategories', language) : category}
                </button>
              ))}
            </div>
            
            <div className="menu-grid">
              {filteredItems.map(item => (
                <Link to={`/product/${item.id}`} key={item.id} className="menu-item">
                  <div className="menu-image-container">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="menu-image"
                    />
                  </div>
                  <div className="menu-content">
                    <h3 className="menu-title">{item.name}</h3>
                    <p className="menu-category">{item.category}</p>
                    <p className="menu-price">{item.price}</p>
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

export default Menu;
