
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
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/menu">Our Menu</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="link-group">
              <h3>Occasions</h3>
              <ul>
                <li><Link to="/occasions/birthday">Birthday Cakes</Link></li>
                <li><Link to="/occasions/wedding">Wedding Cakes</Link></li>
                <li><Link to="/occasions/anniversary">Anniversary Cakes</Link></li>
                <li><Link to="/occasions/custom">Custom Cakes</Link></li>
              </ul>
            </div>

            <div className="link-group">
              <h3>Contact Us</h3>
              <ul>
                <a href="https://maps.app.goo.gl/NJ12A9uZVr1MBbPr5" target="_blank" ><li>Blagoje Parovic</li>
                <li>North Macedonia, SK 1000</li></a>
                <li>Email: sihanaskejk@gmail.com</li>
                <li>Phone: (+389) 75 231 968</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sihana's Cake. All Rights Reserved.</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <TwitterIcon />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <PinterestIcon />
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

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const PinterestIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.94-.2-2.4.02-3.42.2-.94 1.3-6 1.3-6s-.33-.66-.33-1.64c0-1.54.9-2.7 2-2.7.95 0 1.4.72 1.4 1.57 0 .95-.6 2.36-.9 3.68-.26 1.09.54 1.97 1.62 1.97 1.94 0 3.43-2.04 3.43-5 0-2.62-1.88-4.46-4.56-4.46-3.1 0-4.93 2.33-4.93 4.74 0 .94.36 1.95.82 2.5.08.13.1.24.07.37l-.3 1.28c-.05.2-.16.24-.37.14-1.38-.65-2.25-2.72-2.25-4.4 0-3.56 2.58-6.8 7.44-6.8 3.9 0 6.93 2.8 6.93 6.53 0 3.9-2.47 7.05-5.9 7.05-1.15 0-2.23-.6-2.6-1.3l-.7 2.68c-.25.97-.95 2.17-1.42 2.9.82.25 1.66.39 2.5.39A8.02 8.02 0 0 0 20 12a8 8 0 0 0-8-8z"></path>
  </svg>
);

export default Footer;
