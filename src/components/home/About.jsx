
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
              alt="Beautiful cake display" 
              className="rounded-image"
            />
          </div>
          <div className="about-text">
            <div className="about-header">
              <span className="about-label">ABOUT US</span>
              <h2 className="about-title">Crafting Sweet Memories Since 2010</h2>
            </div>
            <p className="about-description">
              Welcome to Sihana's Cake, where every celebration becomes sweeter! Founded with passion and 
              dedication, we specialize in creating extraordinary cakes that turn your special moments into 
              unforgettable memories.
            </p>
            <p className="about-description">
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
