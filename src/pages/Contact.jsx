
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { sanitizeAndValidateContactForm } from '../utils/inputSanitization';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitCount, setSubmitCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Rate limiting - prevent spam submissions
    if (submitCount >= 3) {
      setErrors({ submit: 'Too many submissions. Please wait before trying again.' });
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    setSubmitStatus(null);

    // Validate and sanitize form data
    const validation = sanitizeAndValidateContactForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    try {
      // In a real application, you would send this to your backend
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitCount(prev => prev + 1);
      
      // Reset submit count after 5 minutes
      setTimeout(() => setSubmitCount(0), 300000);
      
    } catch (error) {
      setSubmitStatus('error');
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <Header />
      
      <main className="contact-content">
        <div className="container">
          <div className="contact-header">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Get in touch with us for custom orders, questions, or just to say hello.</p>
          </div>
          
          <div className="contact-layout">
            <div className="contact-info">
              <div className="info-item">
                <h3>Get in Touch</h3>
                <p>Ready to place an order or have questions about our delicious cakes? We're here to help!</p>
              </div>
              
              <div className="info-item">
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
              
              <div className="info-item">
                <h4>Email</h4>
                <p>orders@sihanascakes.com</p>
              </div>
              
              <div className="info-item">
                <h4>Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
                   Saturday: 10:00 AM - 4:00 PM<br />
                   Sunday: By appointment only</p>
              </div>
            </div>
            
            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <h3>Send us a Message</h3>
                
                {submitStatus === 'success' && (
                  <div className="success-message">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="error-message">
                    There was an error sending your message. Please try again.
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
                    maxLength="100"
                    required
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    maxLength="100"
                    required
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength="20"
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    maxLength="2000"
                    required
                  ></textarea>
                  <div className="char-count">{formData.message.length}/2000</div>
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>
                
                {errors.submit && <div className="error-message">{errors.submit}</div>}
                
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
