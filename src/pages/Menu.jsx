
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import './Menu.css';

// Menu items data
const menuItems = [
  {
    id: 1,
    name: 'Chocolate Delight',
    description: 'Rich chocolate cake with creamy ganache and chocolate shavings.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$35.99',
    category: 'chocolate'
  },
  {
    id: 2,
    name: 'Strawberry Dream',
    description: 'Light vanilla sponge with fresh strawberries and cream.',
    image: 'https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$32.99',
    category: 'fruit'
  },
  {
    id: 3,
    name: 'Vanilla Bliss',
    description: 'Classic vanilla cake with buttercream frosting and sprinkles.',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$29.99',
    category: 'vanilla'
  },
  {
    id: 4,
    name: 'Red Velvet',
    description: 'Classic red velvet with cream cheese frosting.',
    image: 'https://images.unsplash.com/photo-1586788680399-b6409fcf1c90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$33.99',
    category: 'specialty'
  },
  {
    id: 5,
    name: 'Carrot Cake',
    description: 'Moist carrot cake with walnuts and cream cheese frosting.',
    image: 'https://images.unsplash.com/photo-1594054723100-97bf81669244?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$31.99',
    category: 'specialty'
  },
  {
    id: 6,
    name: 'Lemon Blueberry',
    description: 'Tangy lemon cake with fresh blueberries and lemon glaze.',
    image: 'https://images.unsplash.com/photo-1519915745176-7a5064701189?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$34.99',
    category: 'fruit'
  },
  {
    id: 7,
    name: 'Black Forest',
    description: 'Chocolate cake with cherries, whipped cream, and chocolate shavings.',
    image: 'https://images.unsplash.com/photo-1604413191066-4dd20bedf486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$36.99',
    category: 'chocolate'
  },
  {
    id: 8,
    name: 'Tiramisu Cake',
    description: 'Coffee-soaked layers with mascarpone cream and cocoa.',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$38.99',
    category: 'specialty'
  },
  // Add more menu items with different categories
  {
    id: 9,
    name: 'Fruit Tart',
    description: 'Fresh seasonal fruits arranged on a sweet pastry base with custard.',
    image: 'https://images.unsplash.com/photo-1488477304112-4944851de03d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$28.99',
    category: 'desserts'
  },
  {
    id: 10,
    name: 'Chocolate Roll',
    description: 'Soft chocolate sponge rolled with cream filling.',
    image: 'https://images.unsplash.com/photo-1605807646983-377bc5a76493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$27.99',
    category: 'rolls'
  },
  {
    id: 11,
    name: 'Vanilla Roll',
    description: 'Light vanilla sponge rolled with fruit jam and cream.',
    image: 'https://images.unsplash.com/photo-1614145121029-83a9f7b68bf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$26.99',
    category: 'rolls'
  },
  {
    id: 12,
    name: 'Chocolate Éclair',
    description: 'Choux pastry filled with cream and topped with chocolate.',
    image: 'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$4.99',
    category: 'desserts'
  }
];

const Menu = () => {
  const [filter, setFilter] = useState('all');
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const filteredItems = filter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === filter);
    
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
              <button 
                className={`filter-button ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All Items
              </button>
              <button 
                className={`filter-button ${filter === 'chocolate' ? 'active' : ''}`}
                onClick={() => setFilter('chocolate')}
              >
                Chocolate
              </button>
              <button 
                className={`filter-button ${filter === 'fruit' ? 'active' : ''}`}
                onClick={() => setFilter('fruit')}
              >
                Fruit
              </button>
              <button 
                className={`filter-button ${filter === 'vanilla' ? 'active' : ''}`}
                onClick={() => setFilter('vanilla')}
              >
                Vanilla
              </button>
              <button 
                className={`filter-button ${filter === 'specialty' ? 'active' : ''}`}
                onClick={() => setFilter('specialty')}
              >
                Specialty
              </button>
              <button 
                className={`filter-button ${filter === 'desserts' ? 'active' : ''}`}
                onClick={() => setFilter('desserts')}
              >
                Desserts
              </button>
              <button 
                className={`filter-button ${filter === 'rolls' ? 'active' : ''}`}
                onClick={() => setFilter('rolls')}
              >
                Rolls
              </button>
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
                      <span className="menu-price">{item.price}</span>
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
