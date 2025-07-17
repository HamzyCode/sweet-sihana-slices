
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../utils/translations';
import './Footer.css';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img 
              src="/lovable-uploads/0cb5ed58-8ec7-4ef4-9f35-9c70cf595309.png" 
              alt="Sihana's Cake" 
              className="logo"
            />
            <p>
              {t('footerDescription', language)}
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h3>{t('quickLinks', language)}</h3>
              <ul>
                <li><Link to="/">{t('home', language)}</Link></li>
                <li><Link to="/#about">{t('about', language)}</Link></li>
                <li><Link to="/menu">{t('menu', language)}</Link></li>
                <li><Link to="/contact">{t('contact', language)}</Link></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h3>{t('services', language)}</h3>
              <ul>
                <li><Link to="/menu">{t('birthdayCakes', language)}</Link></li>
                <li><Link to="/menu">{t('weddingCakes', language)}</Link></li>
                <li><Link to="/menu">{t('customDesigns', language)}</Link></li>
                <li>
                  <a 
                    href="https://wolt.com/mk/mkd/skopje/venue/sihanas-cake?utm_source=googlemapreserved&utm_campaign=sihanas-cake&utm_content=6810a0a648710a3bed1076f2&rwg_token=ACgRB3dY2Fp_xMTLD2LCy1VA_uc_96kB7x3AjLTDM_YhbrvlJHnR0AUakm1ClquML8kU9VzK1bFbh63E6QktpeDZe9IwaFau0UDRTqSaR5eAo2LMQejt1KY%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wolt-footer-link"
                  >
                    <img 
                      src="/lovable-uploads/0cb5ed58-8ec7-4ef4-9f35-9c70cf595309.png" 
                      alt="Wolt" 
                      className="wolt-footer-logo"
                    />
                    {t('orderOnWolt', language)}
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="link-group">
              <h3>{t('contactInfo', language)}</h3>
              <ul>
                <li>
                  <a 
                    href="https://maps.app.goo.gl/VhAp61LNGafGPBKt8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Makedonsko Kosovska Brigada 12
                  </a>
                </li>
                <li>
                  <a href="tel:+38975231968">
                    (+389) 75 231 968
                  </a>
                </li>
                <li>
                  <a href="mailto:sihanaskejk@gmail.com">
                    sihanaskejk@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>&copy; 2025 Sihana's Cake. {t('allRightsReserved', language)}</p>
            <p className="developer-credit">{t('developedBy', language)}</p>
          </div>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
