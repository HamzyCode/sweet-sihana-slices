
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './CallToAction.css';

const CallToAction = () => {
  const { user } = useAuth();
  
  return (
    <section className="cta-section">
      <div className="cta-background"></div>
      
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            {user ? "Ready to Order Your Perfect Cake?" : "Join Our Sweet Community"}
          </h2>
          <p className="cta-description">
            {user 
              ? "Whether you're celebrating a birthday, wedding, or special occasion, we're here to create the perfect cake for your memorable moments."
              : "Log in to explore our full collection, save your favorite designs, and place custom orders for your special occasions."
            }
          </p>
          <div className="cta-buttons">
            {user ? (
              <Link to="/contact" className="cta-primary-button">
                Order Now
                <ArrowRightIcon />
              </Link>
            ) : (
              <Link to="/login" className="cta-primary-button">
                Log In
                <ArrowRightIcon />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default CallToAction;
