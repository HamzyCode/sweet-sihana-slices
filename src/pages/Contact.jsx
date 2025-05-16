
import React from 'react';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import './Contact.css';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="contact-hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Get in Touch</h1>
              <p className="hero-description">
                We'd love to hear from you! Whether you have a question about our cakes,
                need help with a special order, or just want to say hello.
              </p>
            </div>
          </div>
        </section>
        
        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <h2 className="section-title">Contact Information</h2>
                
                <div className="info-card">
                  <div className="info-icon">
                    <LocationIcon />
                  </div>
                  <div className="info-content">
                    <h3>Visit Us</h3>
                    <p>Blagoje Parovic</p>
                    <p>North Macedonia, SK 1000</p>
                    <a 
                      href="https://maps.app.goo.gl/NJ12A9uZVr1MBbPr5" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="info-link"
                    >
                      View on Map
                    </a>
                  </div>
                </div>
                
                <div className="info-card">
                  <div className="info-icon">
                    <PhoneIcon />
                  </div>
                  <div className="info-content">
                    <h3>Call Us</h3>
                    <p>Phone: (+389) 75 231 968</p>
                    <p>We're available Monday-Saturday, 9am-6pm</p>
                    <a 
                      href="tel:+38975231968"
                      className="info-link"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
                
                <div className="info-card">
                  <div className="info-icon">
                    <MailIcon />
                  </div>
                  <div className="info-content">
                    <h3>Email Us</h3>
                    <p>sihanaskejk@gmail.com</p>
                    <p>We'll respond as quickly as possible</p>
                    <a 
                      href="mailto:sihanaskejk@gmail.com"
                      className="info-link"
                    >
                      Send Email
                    </a>
                  </div>
                </div>
                
                <div className="info-card">
                  <div className="info-icon">
                    <InstagramIcon />
                  </div>
                  <div className="info-content">
                    <h3>Follow Us</h3>
                    <p>@sihanas_cake</p>
                    <p>Check out our latest cake creations</p>
                    <a 
                      href="https://instagram.com/sihanas_cake"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="info-link"
                    >
                      Follow on Instagram
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="contact-form-container">
                <h2 className="section-title">Send us a Message</h2>
                <form className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input 
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input 
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                      type="text"
                      id="subject"
                      placeholder="What is this about?"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea 
                      id="message"
                      rows="5"
                      placeholder="Tell us what you need..."
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-button">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        <section className="business-hours">
          <div className="container">
            <h2 className="section-title">Business Hours</h2>
            <div className="hours-grid">
              <div className="day-column">
                <div className="day">Monday</div>
                <div className="day">Tuesday</div>
                <div className="day">Wednesday</div>
                <div className="day">Thursday</div>
                <div className="day">Friday</div>
                <div className="day">Saturday</div>
                <div className="day">Sunday</div>
              </div>
              <div className="hours-column">
                <div className="hours">9:00 AM - 6:00 PM</div>
                <div className="hours">9:00 AM - 6:00 PM</div>
                <div className="hours">9:00 AM - 6:00 PM</div>
                <div className="hours">9:00 AM - 6:00 PM</div>
                <div className="hours">9:00 AM - 6:00 PM</div>
                <div className="hours">10:00 AM - 4:00 PM</div>
                <div className="hours">Closed</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export default Contact;
