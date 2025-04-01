
import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cake-brown text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <img 
              src="/lovable-uploads/79ee26b0-cc55-4465-a2a3-f6b24880cd90.png" 
              alt="Sihana's Cake Logo" 
              className="h-24 mb-4 mx-auto md:mx-0 bg-white rounded-full p-2"
            />
            <p className="text-sm text-center md:text-left mt-4">
              Premium quality cakes for all occasions since 2010. Made with love and the finest ingredients.
            </p>
          </div>
          
          {/* Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-playfair mb-4 text-center md:text-left">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><Link to="/" className="hover:text-cake-pink transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-cake-pink transition-colors">About Us</Link></li>
              <li><Link to="/menu" className="hover:text-cake-pink transition-colors">Our Menu</Link></li>
              <li><Link to="/order" className="hover:text-cake-pink transition-colors">Order Online</Link></li>
              <li><Link to="/contact" className="hover:text-cake-pink transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-xl font-playfair mb-4 text-center md:text-left">Contact Us</h3>
            <ul className="space-y-3 text-center md:text-left">
              <li className="flex flex-col md:flex-row md:items-center gap-2">
                <Phone size={16} className="mx-auto md:mx-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex flex-col md:flex-row md:items-center gap-2">
                <Mail size={16} className="mx-auto md:mx-0" />
                <span>hello@sihanascake.com</span>
              </li>
              <li className="flex flex-col md:flex-row md:items-start gap-2">
                <MapPin size={16} className="mx-auto md:mx-0 md:mt-1" />
                <span>123 Cake Street<br />Dessert City, SW 12345</span>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div className="col-span-1">
            <h3 className="text-xl font-playfair mb-4 text-center md:text-left">Opening Hours</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>Monday - Friday: 8am - 8pm</li>
              <li>Saturday: 9am - 6pm</li>
              <li>Sunday: 10am - 4pm</li>
            </ul>
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-cake-pink transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-cake-pink transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/20 text-center text-sm">
          <p>© {new Date().getFullYear()} Sihana's Cake. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link to="/privacy" className="hover:text-cake-pink transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-cake-pink transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
