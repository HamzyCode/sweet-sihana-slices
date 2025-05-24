
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header.jsx';
import Footer from '../../components/layout/Footer.jsx';
import { getProductsByOccasion } from '../../utils/productData.js';
import '../Occasion.css';

const Anniversary = () => {
  const anniversaryCakes = getProductsByOccasion('anniversary');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="occasion-hero anniversary">
          <div className="container">
            <div className="occasion-hero-content">
              <h1 className="occasion-title">Anniversary Cakes</h1>
              <p className="occasion-description">
                Celebrate years of love and commitment with our special anniversary cakes.
                Perfect for marking milestones and creating new memories together.
              </p>
            </div>
          </div>
        </section>
        
        <section className="occasion-cakes">
          <div className="container">
            <div className="cakes-grid">
              {anniversaryCakes.map(cake => (
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
                <h2>Celebrating Years of Love</h2>
                <p>
                  Our anniversary cakes are designed to honor your special milestone. 
                  Whether it's your first anniversary or your fiftieth, we can create 
                  a cake that represents your journey together. Each cake can be 
                  personalized with dates, names, and special messages to make your 
                  celebration even more meaningful.
                </p>
                <p>
                  For milestone anniversaries, we can incorporate traditional symbols 
                  like silver for 25 years or gold for 50 years. Our team is experienced 
                  in creating elegant designs that are as special as your relationship.
                </p>
                
                <Link to="/contact" className="order-now-button">
                  Order Your Anniversary Cake
                </Link>
              </div>
              
              <div className="info-image">
                <img 
                  src="https://images.unsplash.com/photo-1569152356647-0c63da81d0bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Anniversary celebration"
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

export default Anniversary;
