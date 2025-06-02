
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img 
              src="/assets/sihanasCakeLogo.png" 
              alt="Sihana's Cake Logo" 
              className="logo"
            />
            <p>Delicious cakes made with love since 2010.</p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/#about">About Us</Link></li>
                <li><Link to="/menu">Our Menu</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="link-group">
              <h3>Contact Us</h3>
              <ul>
                <a href="https://maps.app.goo.gl/VhAp61LNGafGPBKt8" target="_blank" rel="noopener noreferrer">
                  <li>Makedonsko Kosovska Brigada 12</li>
                  <li>North Macedonia, SK 1000</li>
                </a>
                <li>
                  <a href="mailto:sihanaskejk@gmail.com">Email: sihanaskejk@gmail.com</a>
                </li>
                <li>
                  <a href="tel:+38975231968">Phone: (+389) 75 231 968</a>
                </li>
              </ul>
            </div>

            <div className="link-group">
              <h3>Order Online</h3>
              <ul>
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
                    Order via Wolt
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sihana's Cake. All Rights Reserved.</p>
          <div className="social-icons">
            <a href="https://facebook.com/sihanascake" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://instagram.com/sihanas_cake" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default Footer;
