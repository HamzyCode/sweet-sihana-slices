
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img 
              src="/assets/images/products/IMG_1884-Photoroom.jpg" 
              alt="Sihana working on a beautiful cake" 
              className="rounded-image"
            />
          </div>
          <div className="about-text">
            <div className="about-header">
              <span className="about-label">ABOUT US</span>
              <h2 className="about-title">Crafting Sweet Memories Since 2010</h2>
            </div>
            <p className="about-text">
              Welcome to Sihana's Cake, where every celebration becomes sweeter! Founded with passion and 
              dedication, we specialize in creating extraordinary cakes that turn your special moments into 
              unforgettable memories.
            </p>
            <p className="about-text">
              Our talented team of bakers and decorators brings years of experience and creativity to every 
              project. From intimate birthday celebrations to grand wedding receptions, we craft each cake 
              with the finest ingredients and meticulous attention to detail.
            </p>
            
            <div className="about-features">
              <div className="feature-card">
                <div className="feature-icon premium">
                  <span>🏆</span>
                </div>
                <h4 className="feature-title">Premium Quality</h4>
                <p className="feature-text">Only the finest ingredients</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon handmade">
                  <span>👩‍🍳</span>
                </div>
                <h4 className="feature-title">Handmade</h4>
                <p className="feature-text">Crafted with love and care</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon customers">
                  <span>😊</span>
                </div>
                <h4 className="feature-title">Happy Customers</h4>
                <p className="feature-text">Thousands of satisfied clients</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon love">
                  <span>❤️</span>
                </div>
                <h4 className="feature-title">Made with Love</h4>
                <p className="feature-text">Every cake tells a story</p>
              </div>
            </div>
            
            <a href="/contact" className="primary-button">
              Order Your Custom Cake
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
