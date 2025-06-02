
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
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
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.send(
        'service_7qiw07x',
        'template_1nnkkii',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
          to_email: 'sihanaskejk@gmail.com'
        },
        '3ESLHOit32HCXF-GY'
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="contact-hero">
          <div className="container">
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-subtitle">
              Ready to order your perfect cake? We'd love to hear from you!
            </p>
          </div>
        </div>

        <div className="container contact-content">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Visit Our Shop</h3>
                  <a 
                    href="https://maps.app.goo.gl/VhAp61LNGafGPBKt8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    Makedonsko Kosovska Brigada 12<br />
                    North Macedonia, SK 1000
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h3>Email Us</h3>
                  <a href="mailto:sihanaskejk@gmail.com" className="contact-link">
                    sihanaskejk@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h3>Call Us</h3>
                  <a href="tel:+38975231968" className="contact-link">
                    (+389) 75 231 968
                  </a>
                </div>
              </div>

              <div className="order-options">
                <h3>Order Options</h3>
                <div className="order-buttons">
                  <a 
                    href="https://wolt.com/mk/mkd/skopje/venue/sihanas-cake?utm_source=googlemapreserved&utm_campaign=sihanas-cake&utm_content=6810a0a648710a3bed1076f2&rwg_token=ACgRB3dY2Fp_xMTLD2LCy1VA_uc_96kB7x3AjLTDM_YhbrvlJHnR0AUakm1ClquML8kU9VzK1bFbh63E6QktpeDZe9IwaFau0UDRTqSaR5eAo2LMQejt1KY%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wolt-button"
                  >
                    <img 
                      src="/lovable-uploads/0cb5ed58-8ec7-4ef4-9f35-9c70cf595309.png" 
                      alt="Wolt" 
                      className="wolt-logo-large"
                    />
                    Order via Wolt
                  </a>
                  
                  <a 
                    href="https://maps.app.goo.gl/Fh37Y61hD72fFfc2A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="review-button"
                  >
                    ⭐ Leave a Google Review
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={errors.name ? 'error' : ''}
                    required
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? 'error' : ''}
                    required
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your cake requirements..."
                    className={errors.message ? 'error' : ''}
                    required
                  ></textarea>
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="error-message">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}

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
