
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../utils/supabaseClient';
import { CakeSlice, ChevronRight } from 'lucide-react';
import './Featured.css';

const Featured = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const products = await fetchProducts();
        
        // Extract unique categories
        const uniqueCategories = [...new Set(products.map(product => product.category))];
        setCategories(uniqueCategories);
        
        // Set initial products
        setFeaturedProducts(products);
        setLoading(false);
      } catch (error) {
        console.error('Error loading products:', error);
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  // Filter products by category
  const filteredProducts = activeCategory === 'all' 
    ? featuredProducts
    : featuredProducts.filter(product => product.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  // Get category label for display
  const getCategoryLabel = (category) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <section className="featured-section" id="products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Delectable Collection</h2>
          <p className="section-description">
            Discover our handcrafted cakes, each made with premium ingredients and decorated with artistic flair.
          </p>
        </div>
        
        {/* Category filters */}
        <div className="category-filters">
          <button 
            className={`category-filter ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('all')}
          >
            All Cakes
          </button>
          {categories.map((category) => (
            <button 
              key={category}
              className={`category-filter ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>
        
        {loading ? (
          <div className="loading-spinner">
            <CakeSlice className="animate-spin" size={32} />
            <p>Loading delicious cakes...</p>
          </div>
        ) : (
          <div className="cakes-grid">
            {filteredProducts.map((cake) => (
              <div key={cake.id} className="cake-card">
                <div className="cake-image-container">
                  <img 
                    src={cake.image} 
                    alt={cake.name}
                    className="cake-image"
                  />
                  <div className={`cake-badge ${cake.category}`}>
                    {getCategoryLabel(cake.category)}
                  </div>
                </div>
                <div className="cake-details">
                  <h3 className="cake-title">{cake.name}</h3>
                  <p className="cake-description">{cake.description}</p>
                  <div className="cake-bottom">
                    <Link to={`/product/${cake.id}`} className="cake-link">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="section-action">
          <Link to="/menu" className="primary-button">
            View All Cakes
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
