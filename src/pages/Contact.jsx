
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { sanitizeAndValidateContactForm } from '../utils/inputSanitization';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../utils/translations';
import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const { language } = useLanguage();
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

  const handleWhatsAppClick = () => {
    const phoneNumber = '38975231968'; // Without + sign for WhatsApp
    const message = encodeURIComponent(t('getInTouchDesc', language));
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+38975231968');
  };

  return (
    <div className="contact-page">
      <Header />
      
      <div className="contact-hero">
        <div className="container">
          <h1 className="contact-title">{t('contactUs', language)}</h1>
          <p className="contact-subtitle">{t('contactSubtitle', language)}</p>
        </div>
      </div>
      
      <main className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>{t('getInTouch', language)}</h2>
              
              <div className="contact-item">
                <Phone className="contact-icon" />
                <div>
                  <h3>{t('phone', language)}</h3>
                  <button 
                    onClick={handlePhoneClick}
                    className="contact-link"
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                  >
                    (+389) 75 231 968
                  </button>
                </div>
              </div>
              
              <div className="contact-item">
                <Mail className="contact-icon" />
                <div>
                  <h3>{t('email', language)}</h3>
                  <a href="mailto:sihanaskejk@gmail.com" className="contact-link">
                    sihanaskejk@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <div>
                  <h3>{t('address', language)}</h3>
                  <a 
                    href="https://maps.app.goo.gl/VhAp61LNGafGPBKt8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    Makedonsko Kosovska Brigada 12, Skopje
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <Clock className="contact-icon" />
                <div>
                  <h3>{t('hours', language)}</h3>
                  <p className="contact-link" style={{ whiteSpace: 'pre-line' }}>
                    {t('hoursDesc', language)}
                  </p>
                </div>
              </div>

              <div className="order-options">
                <h3>{t('orderOptions', language)}</h3>
                <div className="order-buttons">
                  <button 
                    onClick={handleWhatsAppClick}
                    className="wolt-button"
                    style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
                  >
                    <MessageCircle size={24} />
                    {t('contactViaWhatsApp', language)}
                  </button>
                  
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
                    {t('orderOnWolt', language)}
                  </a>
                  
                  <a 
                    href="https://www.google.com/maps/place/Sihana%E2%80%99s+Cake/@42.010737,21.4330487,17z/data=!3m1!4b1!4m6!3m5!1s0x135415a747e4e8fd:0xdbc2354beaa24950!8m2!3d42.010737!4d21.4330487!16s%2Fg%2F11y3k5k5k5?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="review-button"
                  >
                    <ExternalLink size={20} />
                    {t('leaveReview', language)}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h2>{t('sendMessage', language)}</h2>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  {t('thankYouMessage', language)}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="error-message">
                  {t('errorMessage', language)}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">{t('name', language)} *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    maxLength="100"
                    required
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">{t('email', language)} *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    maxLength="100"
                    required
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">{t('phone', language)} ({t('optional', language)})</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength="20"
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">{t('message', language)} *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    maxLength="2000"
                    required
                    className={errors.message ? 'error' : ''}
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
                  {isSubmitting ? t('sending', language) : t('sendMessageBtn', language)}
                </button>
              </form>
            </div>
          </div>
          
          <div className="map-section">
            <h2>{t('findUsOnMap', language)}</h2>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.5124804218394!2d21.4330487!3d42.010737299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415a747e4e8fd%3A0xdbc2354beaa24950!2zU2loYW5h4oCZcyBDYWtl!5e0!3m2!1sen!2smk!4v1752790035177!5m2!1sen!2smk" 
                width="100%" 
                height="450" 
                style={{ border: 0, borderRadius: '1rem' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sihana's Cake Location"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
