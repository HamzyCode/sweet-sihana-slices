import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, isAdmin, signOut } = useAuth();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Function to check if a path is active
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  // Handle anchor link scrolling
  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname !== '/') {
      // If we're not on the home page, navigate there first
      sessionStorage.setItem('scrollToElement', targetId);
      window.location.href = '/#' + targetId;
    }
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
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
            <a 
              href="/#about" 
              className={`nav-link ${location.hash === '#about' ? 'active' : ''}`}
              onClick={(e) => handleAnchorClick(e, 'about')}
            >
              About
            </a>
            <Link to="/menu" className={`nav-link ${isActive('/menu') ? 'active' : ''}`}>Menu</Link>
            <Link to="/gallery" className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}>Gallery</Link>
            
            <div className="dropdown">
              <button className={`dropdown-button ${isActive('/occasions') ? 'active' : ''}`}>
                Occasions <span className="dropdown-icon">▼</span>
              </button>
              <div className="dropdown-content">
                <Link to="/occasions/birthday" className={`dropdown-item ${isActive('/occasions/birthday') ? 'active' : ''}`}>Birthday</Link>
                <Link to="/occasions/wedding" className={`dropdown-item ${isActive('/occasions/wedding') ? 'active' : ''}`}>Wedding</Link>
                <Link to="/occasions/anniversary" className={`dropdown-item ${isActive('/occasions/anniversary') ? 'active' : ''}`}>Anniversary</Link>
              </div>
            </div>
            
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
          </nav>
          
          <div className="action-buttons">
            {user ? (
              <div className="user-menu-container">
                <div className="dropdown">
                  <button className="dropdown-button user-button">
                    Account <span className="dropdown-icon">▼</span>
                  </button>
                  <div className="dropdown-content user-dropdown">
                    {isAdmin && (
                      <Link to="/admin" className="dropdown-item">
                        Admin Dashboard
                      </Link>
                    )}
                    <button onClick={signOut} className="dropdown-item sign-out">
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/login" className="order-button">Login</Link>
            )}
            
            {user && (
              <Link to="/contact" className="order-button">Order Now</Link>
            )}
          </div>
          
          <button className="menu-button" onClick={toggleMenu}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav">
              <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`} onClick={toggleMenu}>Home</Link>
              <a 
                href="/#about" 
                className={`mobile-nav-link ${location.hash === '#about' ? 'active' : ''}`}
                onClick={(e) => {
                  handleAnchorClick(e, 'about');
                  toggleMenu();
                }}
              >
                About
              </a>
              <Link to="/menu" className={`mobile-nav-link ${isActive('/menu') ? 'active' : ''}`} onClick={toggleMenu}>Menu</Link>
              <Link to="/gallery" className={`mobile-nav-link ${isActive('/gallery') ? 'active' : ''}`} onClick={toggleMenu}>Gallery</Link>
              <Link to="/occasions/birthday" className={`mobile-nav-link ${isActive('/occasions/birthday') ? 'active' : ''}`} onClick={toggleMenu}>Birthday Cakes</Link>
              <Link to="/occasions/wedding" className={`mobile-nav-link ${isActive('/occasions/wedding') ? 'active' : ''}`} onClick={toggleMenu}>Wedding Cakes</Link>
              <Link to="/occasions/anniversary" className={`mobile-nav-link ${isActive('/occasions/anniversary') ? 'active' : ''}`} onClick={toggleMenu}>Anniversary Cakes</Link>
              <Link to="/contact" className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={toggleMenu}>Contact</Link>
              
              {user ? (
                <>
                  {isAdmin && (
                    <Link to="/admin" className="mobile-nav-link" onClick={toggleMenu}>
                      Admin Dashboard
                    </Link>
                  )}
                  <button onClick={signOut} className="mobile-nav-link sign-out-mobile">
                    Sign Out
                  </button>
                </>
              ) : (
                <Link to="/login" className="mobile-nav-link" onClick={toggleMenu}>
                  Login
                </Link>
              )}
              
              {user && (
                <Link to="/contact" className="mobile-order-button" onClick={toggleMenu}>
                  Order Now
                </Link>
              )}
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

export default Header;
