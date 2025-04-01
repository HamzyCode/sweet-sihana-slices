
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo-container">
            <img 
              src="/lovable-uploads/79ee26b0-cc55-4465-a2a3-f6b24880cd90.png" 
              alt="Sihana's Cake Logo" 
              className="logo"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/menu">Menu</NavLink>
            <div className="dropdown">
              <button className="dropdown-button">
                Occasions <span className="dropdown-icon">▼</span>
              </button>
              <div className="dropdown-content">
                <Link to="/occasions/birthday" className="dropdown-item">
                  Birthday
                </Link>
                <Link to="/occasions/wedding" className="dropdown-item">
                  Wedding
                </Link>
                <Link to="/occasions/anniversary" className="dropdown-item">
                  Anniversary
                </Link>
              </div>
            </div>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
          
          {/* Action Buttons */}
          <div className="action-buttons">
            <Link to="/cart" className="cart-button">
              <CartIcon />
              <span>Cart (0)</span>
            </Link>
            <Link to="/order" className="order-button">
              Order Now
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="container">
            <nav className="mobile-nav">
              <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
              <MobileNavLink href="/menu" onClick={() => setIsMenuOpen(false)}>Menu</MobileNavLink>
              <MobileNavLink href="/occasions" onClick={() => setIsMenuOpen(false)}>Occasions</MobileNavLink>
              <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
              <MobileNavLink href="/cart" onClick={() => setIsMenuOpen(false)} className="cart-link">
                <CartIcon /> Cart (0)
              </MobileNavLink>
              <Link 
                to="/order" 
                className="mobile-order-button"
                onClick={() => setIsMenuOpen(false)}
              >
                Order Now
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <Link to={href} className="nav-link">
      {children}
    </Link>
  );
};

const MobileNavLink = ({ href, children, onClick, className = "" }) => {
  return (
    <Link 
      to={href} 
      className={`mobile-nav-link ${className}`} 
      onClick={onClick}
    >
      {children}
    </Link>
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
