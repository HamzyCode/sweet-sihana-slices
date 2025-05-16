
import React from 'react';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import './About.css';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="about-hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Our Story</h1>
              <p className="hero-description">
                From a small home kitchen to becoming North Macedonia's favorite cake shop
              </p>
            </div>
          </div>
        </section>
        
        <section className="about-story">
          <div className="container">
            <div className="story-grid">
              <div className="story-image">
                <img 
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Sihana's Cake founder"
                />
              </div>
              
              <div className="story-content">
                <h2 className="section-title">The Beginning</h2>
                <p>
                  Sihana's Cake was founded in 2010 by pastry chef Sihana Rexhepi, who had a passion for creating beautiful and delicious cakes since childhood. What started as a small home-based business quickly became known throughout the community for exceptional quality and artistic designs.
                </p>
                <p>
                  Every cake at Sihana's is made with love and attention to detail. We believe that cakes are not just desserts; they are centerpieces of your most precious celebrations and memories.
                </p>
                <div className="founder-signature">
                  <span>- Sihana Rexhepi</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="about-mission">
          <div className="container">
            <div className="mission-content">
              <h2 className="section-title">Our Mission</h2>
              <p>
                We are dedicated to creating memorable cake experiences for all life's special moments. Through our passion for baking and artistic design, we aim to exceed expectations and bring joy to every celebration.
              </p>
              <div className="mission-values">
                <div className="value-item">
                  <h3>Quality</h3>
                  <p>We use only the finest ingredients to ensure that every cake tastes as good as it looks.</p>
                </div>
                <div className="value-item">
                  <h3>Creativity</h3>
                  <p>Each cake is a unique creation, designed to reflect your personality and the spirit of your celebration.</p>
                </div>
                <div className="value-item">
                  <h3>Service</h3>
                  <p>We're committed to providing exceptional customer service from consultation to delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="about-process">
          <div className="container">
            <h2 className="section-title">How We Create Your Perfect Cake</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Consultation</h3>
                <p>We discuss your vision, preferences, dietary needs, and the occasion to understand what you're looking for.</p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Design</h3>
                <p>Our cake artists create a custom design based on your input, offering suggestions and expertise.</p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Baking</h3>
                <p>We bake your cake from scratch using premium ingredients, ensuring freshness and quality.</p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Decoration</h3>
                <p>The cake is decorated with precision and artistry, bringing the design to life.</p>
              </div>
              <div className="process-step">
                <div className="step-number">5</div>
                <h3>Delivery</h3>
                <p>Your cake is carefully delivered to ensure it arrives in perfect condition for your special occasion.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="about-instagram">
          <div className="container">
            <h2 className="section-title">Follow Our Journey</h2>
            <p className="instagram-description">
              Follow us on Instagram <a href="https://instagram.com/sihanas_cake" target="_blank" rel="noopener noreferrer">@sihanas_cake</a> to see our latest creations and get inspired for your next celebration.
            </p>
            
            <div className="instagram-gallery">
              <a href="https://instagram.com/sihanas_cake" target="_blank" rel="noopener noreferrer" className="gallery-item">
                <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Cake" />
              </a>
              <a href="https://instagram.com/sihanas_cake" target="_blank" rel="noopener noreferrer" className="gallery-item">
                <img src="https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Cake" />
              </a>
              <a href="https://instagram.com/sihanas_cake" target="_blank" rel="noopener noreferrer" className="gallery-item">
                <img src="https://images.unsplash.com/photo-1557308536-ee471ef2c390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Cake" />
              </a>
              <a href="https://instagram.com/sihanas_cake" target="_blank" rel="noopener noreferrer" className="gallery-item">
                <img src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Cake" />
              </a>
            </div>
            
            <a href="/gallery" className="primary-button">View Our Gallery</a>
          </div>
        </section>
        
        <section className="team-section">
          <div className="container">
            <h2 className="section-title">Meet Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-image">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Sihana Rexhepi" />
                </div>
                <h3>Sihana Rexhepi</h3>
                <p className="member-role">Founder & Head Baker</p>
              </div>
              <div className="team-member">
                <div className="member-image">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Mark Johnson" />
                </div>
                <h3>Mark Johnson</h3>
                <p className="member-role">Cake Designer</p>
              </div>
              <div className="team-member">
                <div className="member-image">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Sarah Lee" />
                </div>
                <h3>Sarah Lee</h3>
                <p className="member-role">Pastry Chef</p>
              </div>
              <div className="team-member">
                <div className="member-image">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="David Chen" />
                </div>
                <h3>David Chen</h3>
                <p className="member-role">Customer Service</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
