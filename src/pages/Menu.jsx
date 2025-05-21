
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import { fetchProducts } from '../utils/supabaseClient';
import { Cake } from 'lucide-react';
import './Menu.css';

const Menu = () => {
  const [filter, setFilter] = useState('all');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  
  // Fetch products from Supabase
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
        
        // Extract unique categories
        const uniqueCategories = [...new Set(data.map(item => item.category))];
        setCategories(uniqueCategories);
        
        setLoading(false);
      } catch (error) {
        console.error('Error loading products:', error);
        setLoading(false);
      }
    };
    
    loadProducts();
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
              <h1 className="section-title">Our Cake Menu</h1>
              <p className="section-description">
                Explore our selection of delicious cakes, each made with premium ingredients and baked with love.
              </p>
            </div>
            
            {loading ? (
              <div className="menu-loading">
                <Cake className="animate-spin" size={48} />
                <p>Loading our delicious selection...</p>
              </div>
            ) : (
              <>
                <div className="menu-filters">
                  <button 
                    className={`filter-button ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => setFilter('all')}
                  >
                    All Items
                  </button>
                  {categories.map(category => (
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
                          <span className="menu-category">{item.category}</span>
                          <Link to={`/product/${item.id}`} className="menu-button">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
