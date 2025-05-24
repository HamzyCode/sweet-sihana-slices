
import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import { supabase } from '../integrations/supabase/client';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    eventDate: '',
    eventType: '',
    servings: ''
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Check for selected product from session storage
  useEffect(() => {
    const productData = sessionStorage.getItem('selectedProduct');
    if (productData) {
      const product = JSON.parse(productData);
      setSelectedProduct(product);
      setFormData(prev => ({
        ...prev,
        message: `I'm interested in ordering the ${product.name}. `
      }));
      // Clear the session storage
      sessionStorage.removeItem('selectedProduct');
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          ...formData,
          selectedProduct
        }
      });

      if (error) {
        throw error;
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        eventDate: '',
        eventType: '',
        servings: ''
      });
      setSelectedProduct(null);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="contact-section">
          <div className="container">
            <div className="contact-header">
              <h1 className="contact-title">Get in Touch</h1>
              <p className="contact-subtitle">
                Ready to make your special occasion sweeter? Let's discuss your custom cake needs!
              </p>
            </div>
            
            <div className="contact-content">
              <div className="contact-info">
                <h2>Contact Information</h2>
                
                <div className="info-item">
                  <div className="info-icon">
                    <PhoneIcon />
                  </div>
                  <div className="info-details">
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <EmailIcon />
                  </div>
                  <div className="info-details">
                    <h3>Email</h3>
                    <p>orders@sihanascake.com</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <LocationIcon />
                  </div>
                  <div className="info-details">
                    <h3>Location</h3>
                    <p>123 Sweet Street<br />Bakery District, BD 12345</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <ClockIcon />
                  </div>
                  <div className="info-details">
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
                       Saturday: 10:00 AM - 4:00 PM<br />
                       Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-form-container">
                {selectedProduct && (
                  <div className="selected-product-notice">
                    <h3>Inquiry for: {selectedProduct.name}</h3>
                    <p>We're excited to help you with this cake!</p>
                  </div>
                )}
                
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="eventDate" className="form-label">Event Date</label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="eventType" className="form-label">Event Type</label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        <option value="">Select an event type</option>
                        <option value="birthday">Birthday</option>
                        <option value="wedding">Wedding</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="graduation">Graduation</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="servings" className="form-label">Number of Servings</label>
                      <select
                        id="servings"
                        name="servings"
                        value={formData.servings}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        <option value="">Select serving size</option>
                        <option value="10-20">10-20 people</option>
                        <option value="20-30">20-30 people</option>
                        <option value="30-50">30-50 people</option>
                        <option value="50-100">50-100 people</option>
                        <option value="100+">100+ people</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      rows="5"
                      placeholder="Tell us about your vision, any special requirements, dietary restrictions, or questions you have..."
                      required
                    ></textarea>
                  </div>
                  
                  {submitStatus === 'success' && (
                    <div className="form-success">
                      <p>Thank you for your inquiry! We'll get back to you within 24 hours.</p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="form-error">
                      <p>Sorry, there was an error sending your message. Please try again or contact us directly.</p>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    className="submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Icon components
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

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12,6 12,12 16,14"></polyline>
  </svg>
);

export default Contact;
