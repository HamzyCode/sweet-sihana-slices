
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import { getProductsByCategory, getCategories } from '../utils/productData.js';
import './Menu.css';

const Menu = () => {
  const [filter, setFilter] = useState('all');
  const [filteredItems, setFilteredItems] = useState([]);
  const categories = ['all', ...getCategories()];
  
  // Set filtered items when filter changes
  useEffect(() => {
    setFilteredItems(getProductsByCategory(filter));
  }, [filter]);
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="menu-section">
          <div className="container">
            <div className="section-header">
              <h1 className="section-title">Our Cake Menu</h1>
              <p className="section-description">
                Explore our selection of delicious cakes, each made with premium ingredients and baked with love.
              </p>
            </div>
            
            <div className="menu-filters">
              {categories.map((category) => (
                <button 
                  key={category}
                  className={`filter-button ${filter === category ? 'active' : ''}`}
                  onClick={() => setFilter(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
            
            <div className="menu-grid">
              {filteredItems.map((item) => (
                <div key={item.id} className="menu-item">
                  <Link to={`/product/${item.id}`} className="menu-image-link">
                    <div className="menu-image-container">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="menu-image"
                      />
                    </div>
                  </Link>
                  <div className="menu-details">
                    <h3 className="menu-title">{item.name}</h3>
                    <p className="menu-description">{item.description}</p>
                    <div className="menu-bottom">
                      <Link to={`/product/${item.id}`} className="menu-button">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
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
