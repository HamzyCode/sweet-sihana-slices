
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header.jsx';
import Footer from '../../components/layout/Footer.jsx';
import '../Occasion.css';

const birthdayCakes = [
  {
    id: 1,
    name: 'Chocolate Delight',
    description: 'Rich chocolate cake with creamy ganache and chocolate shavings.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$35.99',
  },
  {
    id: 3,
    name: 'Vanilla Bliss',
    description: 'Classic vanilla cake with buttercream frosting and sprinkles.',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$29.99',
  },
  {
    id: 4,
    name: 'Red Velvet',
    description: 'Classic red velvet with cream cheese frosting.',
    image: 'https://images.unsplash.com/photo-1586788680399-b6409fcf1c90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$33.99',
  },
  {
    id: 6,
    name: 'Lemon Blueberry',
    description: 'Tangy lemon cake with fresh blueberries and lemon glaze.',
    image: 'https://images.unsplash.com/photo-1519915745176-7a5064701189?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$34.99',
  }
];

const Birthday = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="occasion-hero">
          <div className="container">
            <div className="occasion-hero-content">
              <h1 className="occasion-title">Birthday Cakes</h1>
              <p className="occasion-description">
                Make your birthday celebration extra special with our delicious handcrafted birthday cakes.
                Each cake is made with premium ingredients and can be personalized for your special day.
              </p>
            </div>
          </div>
        </section>
        
        <section className="occasion-cakes">
          <div className="container">
            <div className="cakes-grid">
              {birthdayCakes.map(cake => (
                <div key={cake.id} className="cake-card">
                  <div className="cake-image-container">
                    <img 
                      src={cake.image} 
                      alt={cake.name}
                      className="cake-image"
                    />
                  </div>
                  <div className="cake-details">
                    <h3 className="cake-title">{cake.name}</h3>
                    <p className="cake-description">{cake.description}</p>
                    <div className="cake-bottom">
                      <span className="cake-price">{cake.price}</span>
                      <Link to={`/product/${cake.id}`} className="cake-link">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="occasion-info">
          <div className="container">
            <div className="info-grid">
              <div className="info-content">
                <h2>Perfect Birthday Celebrations</h2>
                <p>
                  Our birthday cakes are designed to be the centerpiece of your celebration. 
                  Whether you're planning a party for a child, teenager, or adult, we have 
                  a cake that will delight everyone. Our cakes can be personalized with names, 
                  ages, and special messages to make your birthday even more memorable.
                </p>
                <p>
                  All our cakes are made fresh to order, ensuring the best taste and quality 
                  for your special day. We recommend ordering at least 48 hours in advance 
                  to ensure availability.
                </p>
                
                <Link to="/contact" className="order-now-button">
                  Order Your Birthday Cake
                </Link>
              </div>
              
              <div className="info-image">
                <img 
                  src="https://images.unsplash.com/photo-1557979619-445218919350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Birthday celebration"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Birthday;
