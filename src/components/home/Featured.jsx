
import React from 'react';
import { Link } from 'react-router-dom';
import './Featured.css';
import { products } from '../../utils/productData.js';

// Select 4 featured products from our product data
const featuredCakes = products.slice(0, 4).map(product => ({
  id: product.id,
  name: product.name,
  description: product.description,
  image: product.image,
  category: product.category === 'chocolate' ? 'bestseller' : 
           product.category === 'fruit' ? 'popular' : 'new'
}));

const Featured = () => {
  return (
    <section className="featured-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Featured Cakes</h2>
          <p className="section-description">
            Discover our most loved and popular cake creations, handcrafted with premium ingredients and a whole lot of love.
          </p>
        </div>
        
        <div className="cakes-grid">
          {featuredCakes.map((cake) => (
            <div key={cake.id} className="cake-card">
              <div className="cake-image-container">
                <img 
                  src={cake.image} 
                  alt={cake.name}
                  className="cake-image"
                />
                {cake.category && (
                  <div className={`cake-badge ${cake.category}`}>
                    {cake.category}
                  </div>
                )}
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
        
        <div className="section-action">
          <Link to="/menu" className="primary-button">
            View All Cakes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
