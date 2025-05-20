
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Delicious Cakes<br />
              <span className="highlight">Made with Love</span>
            </h1>
            <p className="hero-description">
              Handcrafted premium quality cakes for all your special moments. 
              Made with the finest ingredients since 2010.
            </p>
            <div className="hero-buttons">
              <Link to="/menu" className="primary-button">
                Explore Our Cakes
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
          
          <div className="hero-image">
            <img 
              src="/assets/sihanasCakeLogo.png" 
              alt="Sihana's Cake Logo" 
              className="floating-image"
            />
          </div>
        </div>
      </div>
      
      <div className="wave-divider"></div>
    </section>
  );
};

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default Hero;
