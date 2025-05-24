
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import { getAllProducts, getCategories, getFrostingTypes } from '../utils/productData.js';
import './Menu.css';

const Menu = () => {
  const [products] = useState(getAllProducts());
  const [filteredProducts, setFilteredProducts] = useState(getAllProducts());
  const [categories] = useState(getCategories());
  const [frostingTypes] = useState(getFrostingTypes());
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFrosting, setSelectedFrosting] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter products based on selected filters and search term
  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by frosting type
    if (selectedFrosting !== 'all') {
      filtered = filtered.filter(product => product.frostingType === selectedFrosting);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.occasions && product.occasions.some(occasion => 
          occasion.toLowerCase().includes(searchTerm.toLowerCase())
        ))
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedFrosting, searchTerm, products]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleFrostingChange = (frosting) => {
    setSelectedFrosting(frosting);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedFrosting('all');
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="menu-section">
          <div className="container">
            <div className="menu-header">
              <h1 className="menu-title">Our Delicious Menu</h1>
              <p className="menu-subtitle">
                Discover our collection of handcrafted cakes, each made with the finest ingredients and lots of love.
              </p>
            </div>

            <div className="menu-filters">
              <div className="filter-group">
                <label htmlFor="search" className="filter-label">Search</label>
                <input
                  type="text"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search cakes..."
                  className="filter-input"
                />
              </div>

              <div className="filter-group">
                <label htmlFor="category" className="filter-label">Category</label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label htmlFor="frosting" className="filter-label">Frosting Type</label>
                <select
                  id="frosting"
                  value={selectedFrosting}
                  onChange={(e) => handleFrostingChange(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All Frostings</option>
                  {frostingTypes.map(frosting => (
                    <option key={frosting} value={frosting}>
                      {frosting.charAt(0).toUpperCase() + frosting.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <button onClick={clearFilters} className="clear-filters-btn">
                Clear Filters
              </button>
            </div>

            <div className="menu-stats">
              <p>Showing {filteredProducts.length} of {products.length} cakes</p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="no-results">
                <h3>No cakes found</h3>
                <p>Try adjusting your filters or search term to find what you're looking for.</p>
                <button onClick={clearFilters} className="reset-btn">
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="menu-grid">
                {filteredProducts.map(product => (
                  <div key={product.id} className="menu-item">
                    <div className="menu-item-image-container">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="menu-item-image"
                        loading="lazy"
                      />
                      <div className="menu-item-overlay">
                        <Link to={`/product/${product.id}`} className="view-details-btn">
                          View Details
                        </Link>
                      </div>
                    </div>
                    <div className="menu-item-content">
                      <h3 className="menu-item-title">{product.name}</h3>
                      <p className="menu-item-description">{product.description}</p>
                      
                      {product.occasions && product.occasions.length > 0 && (
                        <div className="menu-item-occasions">
                          {product.occasions.slice(0, 2).map((occasion, index) => (
                            <span key={index} className="occasion-tag">
                              {occasion}
                            </span>
                          ))}
                          {product.occasions.length > 2 && (
                            <span className="occasion-tag more">
                              +{product.occasions.length - 2} more
                            </span>
                          )}
                        </div>
                      )}
                      
                      <div className="menu-item-details">
                        <span className="detail-item">
                          <strong>Category:</strong> {product.category}
                        </span>
                        {product.frostingType && (
                          <span className="detail-item">
                            <strong>Frosting:</strong> {product.frostingType}
                          </span>
                        )}
                      </div>
                      
                      <Link to={`/product/${product.id}`} className="menu-item-btn">
                        Learn More
                      </Link>
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

export default Menu;
