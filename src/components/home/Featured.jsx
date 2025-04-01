
import React from 'react';
import { Link } from 'react-router-dom';
import './Featured.css';

const featuredCakes = [
  {
    id: 1,
    name: 'Chocolate Delight',
    description: 'Rich chocolate cake with creamy ganache and chocolate shavings.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$35.99',
    category: 'bestseller'
  },
  {
    id: 2,
    name: 'Strawberry Dream',
    description: 'Light vanilla sponge with fresh strawberries and cream.',
    image: 'https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$32.99',
    category: 'popular'
  },
  {
    id: 3,
    name: 'Vanilla Bliss',
    description: 'Classic vanilla cake with buttercream frosting and sprinkles.',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$29.99',
    category: 'new'
  },
  {
    id: 4,
    name: 'Red Velvet',
    description: 'Classic red velvet with cream cheese frosting.',
    image: 'https://images.unsplash.com/photo-1586788680399-b6409fcf1c90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$34.99',
    category: 'popular'
  }
];

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
                  <span className="cake-price">{cake.price}</span>
                  <Link to={`/menu/${cake.id}`} className="cake-link">
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
