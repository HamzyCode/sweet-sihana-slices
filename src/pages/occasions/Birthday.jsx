
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header.jsx';
import Footer from '../../components/layout/Footer.jsx';
import { getProductsByOccasion } from '../../utils/productData.js';
import '../Occasion.css';

const Birthday = () => {
  const birthdayCakes = getProductsByOccasion('birthday');

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
