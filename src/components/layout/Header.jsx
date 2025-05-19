
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <Link to="/">
              <img 
                src="/assets/sihanasCakeLogo.png" 
                alt="Sihana's Cake Logo" 
                className="logo"
              />
            </Link>
          </div>
          
          <nav className="desktop-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/menu" className="nav-link">Menu</Link>
            <Link to="/gallery" className="nav-link">Gallery</Link>
            
            <div className="dropdown">
              <button className="dropdown-button">
                Occasions <span className="dropdown-icon">▼</span>
              </button>
              <div className="dropdown-content">
                <Link to="/occasions/birthday" className="dropdown-item">Birthday</Link>
                <Link to="/occasions/wedding" className="dropdown-item">Wedding</Link>
                <Link to="/occasions/anniversary" className="dropdown-item">Anniversary</Link>
                <Link to="/occasions/custom" className="dropdown-item">Custom</Link>
              </div>
            </div>
            
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
          
          {/* <div className="action-buttons">
             <Link to="/cart" className="cart-button">
              <CartIcon /> Cart (0)
            </Link>
            <Link to="/order" className="order-button">Order Now</Link>
          </div> */}
          
          <button className="menu-button" onClick={toggleMenu}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav">
              <Link to="/" className="mobile-nav-link" onClick={toggleMenu}>Home</Link>
              <Link to="/about" className="mobile-nav-link" onClick={toggleMenu}>About</Link>
              <Link to="/menu" className="mobile-nav-link" onClick={toggleMenu}>Menu</Link>
              <Link to="/gallery" className="mobile-nav-link" onClick={toggleMenu}>Gallery</Link>
              <Link to="/occasions" className="mobile-nav-link" onClick={toggleMenu}>Occasions</Link>
              <Link to="/contact" className="mobile-nav-link" onClick={toggleMenu}>Contact</Link>
              <Link to="/cart" className="mobile-nav-link cart-link" onClick={toggleMenu}>
                <CartIcon /> Cart (0)
              </Link>
              <Link to="/order" className="mobile-order-button" onClick={toggleMenu}>Order Now</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

export default Header;
