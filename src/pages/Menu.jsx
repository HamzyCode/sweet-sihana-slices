
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import { getProductsByCategoryAndShape, getCategories, getCakeShapes } from '../utils/productData.js';
import './Menu.css';

const Menu = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [shapeFilter, setShapeFilter] = useState('all');
  const [filteredItems, setFilteredItems] = useState([]);
  
  const categories = ['all', ...getCategories()];
  const cakeShapes = ['all', ...getCakeShapes()];
  
  // Update filtered items when filters change
  useEffect(() => {
    setFilteredItems(getProductsByCategoryAndShape(categoryFilter, shapeFilter));
  }, [categoryFilter, shapeFilter]);
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Toggle filter visibility
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
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
            
            <div className="menu-filter-container">
              <button 
                className="filter-toggle-button"
                onClick={toggleFilters}
              >
                {showFilters ? 'Hide Filters' : 'Select Category'}
              </button>
              
              {showFilters && (
                <div className="filter-panels">
                  <div className="category-filters">
                    <h3 className="filter-heading">Categories</h3>
                    <div className="menu-filters">
                      {categories.map((category) => (
                        <button 
                          key={category}
                          className={`filter-button ${categoryFilter === category ? 'active' : ''}`}
                          onClick={() => setCategoryFilter(category)}
                        >
                          {category === 'all' ? 'All Categories' : category}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="shape-filters">
                    <h3 className="filter-heading">Cake Shape</h3>
                    <div className="menu-filters">
                      {cakeShapes.map((shape) => (
                        <button 
                          key={shape}
                          className={`filter-button ${shapeFilter === shape ? 'active' : ''}`}
                          onClick={() => setShapeFilter(shape)}
                        >
                          {shape === 'all' ? 'All Shapes' : shape}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
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
            
            {filteredItems.length === 0 && (
              <div className="no-products">
                <p>No products found matching your selected filters.</p>
                <button 
                  className="reset-filters-button"
                  onClick={() => {
                    setCategoryFilter('all');
                    setShapeFilter('all');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
