
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">About Sihana's Cake</h2>
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
              <div className="feature">
                <div className="feature-icon">🎂</div>
                <h3>Custom Designs</h3>
                <p>Unique cakes tailored to your vision and celebration</p>
              </div>
              <div className="feature">
                <div className="feature-icon">🌟</div>
                <h3>Premium Ingredients</h3>
                <p>Only the finest, freshest ingredients in every creation</p>
              </div>
              <div className="feature">
                <div className="feature-icon">❤️</div>
                <h3>Made with Love</h3>
                <p>Every cake is crafted with passion and attention to detail</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img 
              src="/assets/images/products/IMG_1884-Photoroom.jpg" 
              alt="Sihana working on a beautiful cake" 
              className="baker-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
