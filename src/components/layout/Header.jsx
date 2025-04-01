
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/79ee26b0-cc55-4465-a2a3-f6b24880cd90.png" 
              alt="Sihana's Cake Logo" 
              className="h-16 md:h-20"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/menu">Menu</NavLink>
            <div className="relative group">
              <button className="flex items-center gap-1 text-cake-brown hover:text-cake-pink transition-colors">
                Occasions 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white shadow-lg rounded-lg py-2 min-w-40 mt-2 z-50">
                <Link to="/occasions/birthday" className="block px-4 py-2 hover:bg-cake-pink/10">
                  Birthday
                </Link>
                <Link to="/occasions/wedding" className="block px-4 py-2 hover:bg-cake-pink/10">
                  Wedding
                </Link>
                <Link to="/occasions/anniversary" className="block px-4 py-2 hover:bg-cake-pink/10">
                  Anniversary
                </Link>
              </div>
            </div>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
          
          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/cart" className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="21" r="1"/>
                <circle cx="19" cy="21" r="1"/>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
              </svg>
              <span className="ml-1">Cart (0)</span>
            </Link>
            <Link to="/order" className="cake-button cake-button-primary">
              Order Now
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-cake-brown"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
              </svg> : 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            }
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto py-4 px-4">
            <nav className="flex flex-col gap-4">
              <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
              <MobileNavLink href="/menu" onClick={() => setIsMenuOpen(false)}>Menu</MobileNavLink>
              <MobileNavLink href="/occasions" onClick={() => setIsMenuOpen(false)}>Occasions</MobileNavLink>
              <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
              <MobileNavLink href="/cart" onClick={() => setIsMenuOpen(false)} className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                </svg>
                Cart (0)
              </MobileNavLink>
              <Link 
                to="/order" 
                className="cake-button cake-button-primary w-full text-center mt-2"
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
    <Link to={href} className="text-cake-brown hover:text-cake-pink transition-colors">
      {children}
    </Link>
  );
};

const MobileNavLink = ({ 
  href, 
  children, 
  onClick,
  className = ""
}) => {
  return (
    <Link 
      to={href} 
      className={`text-lg py-2 border-b border-gray-100 ${className}`} 
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Header;
