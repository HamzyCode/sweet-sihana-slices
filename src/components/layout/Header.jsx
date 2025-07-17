import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../utils/translations';
import LanguageToggle from '../LanguageToggle';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, isAdmin, signOut } = useAuth();
  const { language } = useLanguage();
  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname !== '/') {
      sessionStorage.setItem('scrollToElement', targetId);
      window.location.href = '/#' + targetId;
    }
  };

  const handleSignOut = async () => {
    try {
      const { error } = await signOut();
      if (error) {
        console.error('Sign out failed');
      } else {
        setIsMenuOpen(false);
        navigate('/');
      }
    } catch (err) {
      console.error('Sign out error');
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
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              {t('home', language)}
            </Link>
            <a 
              href="/#about" 
              className={`nav-link ${location.hash === '#about' ? 'active' : ''}`}
              onClick={(e) => handleAnchorClick(e, 'about')}
            >
              {t('about', language)}
            </a>
            <Link to="/menu" className={`nav-link ${isActive('/menu') ? 'active' : ''}`}>
              {t('menu', language)}
            </Link>
            <Link to="/gallery" className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}>
              {t('gallery', language)}
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
              {t('contact', language)}
            </Link>
          </nav>
          
          <div className="action-buttons">
            <LanguageToggle />
            {user ? (
              <>
                <div className="user-menu-container">
                  <div className="dropdown">
                    <button className="dropdown-button user-button">
                      {t('account', language)} <span className="dropdown-icon">▼</span>
                    </button>
                    <div className="dropdown-content user-dropdown">
                      {isAdmin && (
                        <Link to="/admin" className="dropdown-item">
                          {t('adminDashboard', language)}
                        </Link>
                      )}
                      <button onClick={handleSignOut} className="dropdown-item sign-out">
                        {t('signOut', language)}
                      </button>
                    </div>
                  </div>
                </div>
                <Link to="/contact" className="primary-button">{t('orderNow', language)}</Link>
              </>
            ) : (
              <Link to="/login" className="primary-button">{t('logIn', language)}</Link>
            )}
          </div>
          
          <button className="menu-button" onClick={toggleMenu}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav">
              <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`} onClick={toggleMenu}>
                {t('home', language)}
              </Link>
              <a 
                href="/#about" 
                className={`mobile-nav-link ${location.hash === '#about' ? 'active' : ''}`}
                onClick={(e) => {
                  handleAnchorClick(e, 'about');
                  toggleMenu();
                }}
              >
                {t('about', language)}
              </a>
              <Link to="/menu" className={`mobile-nav-link ${isActive('/menu') ? 'active' : ''}`} onClick={toggleMenu}>
                {t('menu', language)}
              </Link>
              <Link to="/gallery" className={`mobile-nav-link ${isActive('/gallery') ? 'active' : ''}`} onClick={toggleMenu}>
                {t('gallery', language)}
              </Link>
              <Link to="/contact" className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={toggleMenu}>
                {t('contact', language)}
              </Link>
              
              <div style={{ padding: '0.75rem 0', borderBottom: '1px solid #f0f0f0' }}>
                <LanguageToggle />
              </div>
              
              {user ? (
                <>
                  {isAdmin && (
                    <Link to="/admin" className="mobile-nav-link" onClick={toggleMenu}>
                      {t('adminDashboard', language)}
                    </Link>
                  )}
                  <button onClick={() => { handleSignOut(); toggleMenu(); }} className="mobile-nav-link sign-out-mobile">
                    {t('signOut', language)}
                  </button>
                  <Link to="/contact" className="mobile-primary-button" onClick={toggleMenu}>
                    {t('orderNow', language)}
                  </Link>
                </>
              ) : (
                <Link to="/login" className="mobile-primary-button" onClick={toggleMenu}>
                  {t('logIn', language)}
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
