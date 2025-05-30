import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import LanguageSelector from '../components/contact/LanguageSelector.jsx';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    occasion: 'general',
    language: 'en',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  });

  useEffect(() => {
    const selectedProduct = sessionStorage.getItem('selectedProduct');
    if (selectedProduct) {
      try {
        const product = JSON.parse(selectedProduct);
        setFormData(prevState => ({
          ...prevState,
          message: `I am interested in ordering: ${product.name}\n\n${prevState.message}`
        }));
        sessionStorage.removeItem('selectedProduct');
      } catch (e) {
        console.error("Error parsing selected product:", e);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLanguageChange = (language) => {
    setFormData(prevState => ({
      ...prevState,
      language
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all required fields.'
      });
      return;
    }
    
    console.log('Form submitted:', formData);
    
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      occasion: 'general',
      language: formData.language,
    });
  };

  const translations = {
    en: {
      title: 'Contact Us',
      subtitle: 'Have a question or want to order a custom cake? Get in touch with us!',
      visitUs: 'Visit Us',
      callUs: 'Call Us',
      emailUs: 'Email Us',
      sendMessage: 'Send us a Message',
      namePlaceholder: 'Name *',
      emailPlaceholder: 'Email *',
      phonePlaceholder: 'Phone Number',
      occasionPlaceholder: 'Occasion',
      messagePlaceholder: 'Message *',
      submit: 'Send Message',
      generalInquiry: 'General Inquiry',
      birthdayCake: 'Birthday Cake',
      weddingCake: 'Wedding Cake',
      anniversaryCake: 'Anniversary Cake',
      other: 'Other',
    },
    sq: {
      title: 'Na Kontaktoni',
      subtitle: 'Keni ndonjë pyetje apo dëshironi të porositni një tortë? Na kontaktoni!',
      visitUs: 'Na Vizitoni',
      callUs: 'Na Telefononi',
      emailUs: 'Na Shkruani',
      sendMessage: 'Na Dërgoni një Mesazh',
      namePlaceholder: 'Emri *',
      emailPlaceholder: 'Email *',
      phonePlaceholder: 'Numri i Telefonit',
      occasionPlaceholder: 'Rasti',
      messagePlaceholder: 'Mesazhi *',
      submit: 'Dërgo Mesazhin',
      generalInquiry: 'Pyetje e Përgjithshme',
      birthdayCake: 'Tortë Ditëlindjeje',
      weddingCake: 'Tortë Dasme',
      anniversaryCake: 'Tortë Përvjetori',
      other: 'Tjetër',
    },
    mk: {
      title: 'Контактирајте нè',
      subtitle: 'Имате прашање или сакате да нарачате торта? Контактирајте нè!',
      visitUs: 'Посетете нè',
      callUs: 'Јавете ни се',
      emailUs: 'Пишете ни',
      sendMessage: 'Испратете ни порака',
      namePlaceholder: 'Име *',
      emailPlaceholder: 'Емаил *',
      phonePlaceholder: 'Телефонски број',
      occasionPlaceholder: 'Повод',
      messagePlaceholder: 'Порака *',
      submit: 'Испрати порака',
      generalInquiry: 'Општо прашање',
      birthdayCake: 'Роденденска торта',
      weddingCake: 'Свадбена торта',
      anniversaryCake: 'Торта за годишнина',
      other: 'Друго',
    }
  };

  const t = translations[formData.language];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="contact-section">
          <div className="container">
            <div className="contact-header">
              <h1 className="contact-title">{t.title}</h1>
              <p className="contact-subtitle">
                {t.subtitle}
              </p>
              
              <LanguageSelector 
                selectedLanguage={formData.language}
                onLanguageChange={handleLanguageChange}
              />
            </div>
            
            <div className="contact-content">
              <div className="contact-info">
                <div className="info-card">
                  <div className="icon-container">
                    <LocationIcon />
                  </div>
                  <h3>{t.visitUs}</h3>
                  <p>
                    <a 
                      href="https://maps.app.goo.gl/VhAp61LNGafGPBKt8" 
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
                  <h3>{t.callUs}</h3>
                  <p><a href="tel:+38975231968">(+389) 75 231 968</a></p>
                </div>
                
                <div className="info-card">
                  <div className="icon-container">
                    <EmailIcon />
                  </div>
                  <h3>{t.emailUs}</h3>
                  <p><a href="mailto:sihanaskejk@gmail.com">sihanaskejk@gmail.com</a></p>
                </div>
              </div>
              
              <div className="contact-form-container">
                <h2>{t.sendMessage}</h2>
                
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
                      <label htmlFor="name">{t.namePlaceholder}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={t.namePlaceholder}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">{t.emailPlaceholder}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder={t.emailPlaceholder}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">{t.phonePlaceholder}</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t.phonePlaceholder}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="occasion">{t.occasionPlaceholder}</label>
                      <select
                        id="occasion"
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleChange}
                      >
                        <option value="general">{t.generalInquiry}</option>
                        <option value="birthday">{t.birthdayCake}</option>
                        <option value="wedding">{t.weddingCake}</option>
                        <option value="anniversary">{t.anniversaryCake}</option>
                        <option value="other">{t.other}</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message">{t.messagePlaceholder}</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        required
                        placeholder={t.messagePlaceholder}
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="submit-button">
                      {t.submit}
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
