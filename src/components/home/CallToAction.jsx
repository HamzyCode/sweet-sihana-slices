
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './CallToAction.css';

const CallToAction = () => {
  const { user } = useAuth();
  
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Order Your Perfect Cake?</h2>
          <p className="cta-description">
            Let's create something magical together. Contact us today to discuss your custom cake needs 
            and make your special occasion truly unforgettable.
          </p>
          <div className="cta-buttons">
            {user ? (
              <Link to="/contact" className="cta-button primary">
                Order Now
              </Link>
            ) : (
              <Link to="/login" className="cta-button primary">
                Sign In to Order
              </Link>
            )}
            <Link to="/gallery" className="cta-button secondary">
              View Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
