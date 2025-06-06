
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
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
              Creating beautiful and delicious cakes for all your special moments. 
              Made with love and the finest ingredients.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/#about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h3>Services</h3>
              <ul>
                <li><Link to="/menu">Birthday Cakes</Link></li>
                <li><Link to="/menu">Wedding Cakes</Link></li>
                <li><Link to="/menu">Custom Designs</Link></li>
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
                    Order on Wolt
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="link-group">
              <h3>Contact Info</h3>
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
          <p>&copy; 2025 Sihana's Cake. All rights reserved.</p>
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
