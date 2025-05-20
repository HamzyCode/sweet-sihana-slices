import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
              alt="Baking cakes" 
              className="rounded-image"
            />
          </div>
          <div className="about-content">
            <div className="about-header">
              <span className="about-label">Our Story</span>
              <h2 className="about-title">
                Baking Happiness Since 2010
              </h2>
              <p className="about-text">
                Sihana's Cake began with a passion for creating delicious, handmade cakes that bring joy to special moments. What started as a small home bakery has grown into a beloved local cake shop, but our commitment to quality and taste has remained the same.
              </p>
              <p className="about-text">
                Every cake is made from scratch using premium ingredients, with no artificial flavors or preservatives. We believe that the best cakes come from the finest ingredients and a whole lot of love.
              </p>
            </div>
            
            <div className="about-features">
              <div className="feature-card">
                <div className="feature-icon premium">
                  <CakeSliceIcon />
                </div>
                <h3 className="feature-title">Premium Quality</h3>
                <p className="feature-text">Only the finest ingredients</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon handmade">
                  <StarIcon />
                </div>
                <h3 className="feature-title">100% Handmade</h3>
                <p className="feature-text">Crafted with attention to detail</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon customers">
                  <UsersIcon />
                </div>
                <h3 className="feature-title">Happy Customers</h3>
                <p className="feature-text">Thousands of smiling faces</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon love">
                  <HeartIcon />
                </div>
                <h3 className="feature-title">Made with Love</h3>
                <p className="feature-text">You can taste the difference</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CakeSliceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
    <circle cx="17" cy="7" r="5"></circle>
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 1 0 7.75"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

export default About;
