
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header.jsx';
import Footer from '../../components/layout/Footer.jsx';
import { getProductsByOccasion } from '../../utils/productData.js';
import '../Occasion.css';

const Wedding = () => {
  const weddingCakes = getProductsByOccasion('wedding');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="occasion-hero wedding">
          <div className="container">
            <div className="occasion-hero-content">
              <h1 className="occasion-title">Wedding Cakes</h1>
              <p className="occasion-description">
                Make your special day unforgettable with our elegant wedding cakes.
                Each cake is crafted with attention to detail and can be customized to match your wedding theme.
              </p>
            </div>
          </div>
        </section>
        
        <section className="occasion-cakes">
          <div className="container">
            <div className="cakes-grid">
              {weddingCakes.map(cake => (
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
            <div className="info-grid reverse">
              <div className="info-content">
                <h2>Elegant Wedding Celebrations</h2>
                <p>
                  Our wedding cakes are designed to be as beautiful as they are delicious. 
                  We work with you to create a cake that complements your wedding style, 
                  color scheme, and personal taste. From classic tiered cakes to modern 
                  designs, we can bring your vision to life.
                </p>
                <p>
                  We recommend scheduling a consultation at least 3-6 months before your 
                  wedding date to discuss your requirements and taste preferences. Our 
                  experienced team will guide you through the process and ensure your 
                  wedding cake is perfect for your special day.
                </p>
                
                <Link to="/contact" className="order-now-button">
                  Schedule a Wedding Cake Consultation
                </Link>
              </div>
              
              <div className="info-image">
                <img 
                  src="https://images.unsplash.com/photo-1535254973040-607b474867ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Wedding cake"
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

export default Wedding;
