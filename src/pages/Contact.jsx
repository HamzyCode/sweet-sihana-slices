
import React, { useState } from 'react';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    occasion: 'general',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all required fields.'
      });
      return;
    }
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      occasion: 'general',
    });
    
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="contact-section">
          <div className="container">
            <div className="contact-header">
              <h1 className="contact-title">Contact Us</h1>
              <p className="contact-subtitle">
                Have a question or want to order a custom cake? Get in touch with us!
              </p>
            </div>
            
            <div className="contact-content">
              <div className="contact-info">
                <div className="info-card">
                  <div className="icon-container">
                    <LocationIcon />
                  </div>
                  <h3>Visit Us</h3>
                  <p>
                    <a 
                      href="https://maps.app.goo.gl/NJ12A9uZVr1MBbPr5" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Makedonsko Kosovska Brigada 12<br />
                      North Macedonia, SK 1000
                    </a>
                  </p>
                </div>
                
                <div className="info-card">
                  <div className="icon-container">
                    <PhoneIcon />
                  </div>
                  <h3>Call Us</h3>
                  <p><a href="tel:+38975231968">(+389) 75 231 968</a></p>
                </div>
                
                <div className="info-card">
                  <div className="icon-container">
                    <EmailIcon />
                  </div>
                  <h3>Email Us</h3>
                  <p><a href="mailto:sihanaskejk@gmail.com">sihanaskejk@gmail.com</a></p>
                </div>
              </div>
              
              <div className="contact-form-container">
                <h2>Send us a Message</h2>
                
                {formStatus.submitted ? (
                  <div className="success-message">
                    <p>{formStatus.message}</p>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    {formStatus.error && (
                      <div className="error-message">
                        <p>{formStatus.message}</p>
                      </div>
                    )}
                    
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="occasion">Occasion</label>
                      <select
                        id="occasion"
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleChange}
                      >
                        <option value="general">General Inquiry</option>
                        <option value="birthday">Birthday Cake</option>
                        <option value="wedding">Wedding Cake</option>
                        <option value="anniversary">Anniversary Cake</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        required
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="submit-button">
                      Send Message
                    </button>
                  </form>
                )}
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

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export default Contact;
