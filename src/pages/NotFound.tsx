
import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="text-center px-4">
          <img 
            src="/lovable-uploads/79ee26b0-cc55-4465-a2a3-f6b24880cd90.png" 
            alt="Sihana's Cake Logo" 
            className="w-32 h-32 mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold font-playfair text-cake-brown mb-4">Oops! Page Not Found</h1>
          <p className="text-xl text-cake-brown/70 mb-8 max-w-md mx-auto">
            We couldn't find the page you were looking for. Let's get you back to sweetness.
          </p>
          <Link to="/" className="cake-button cake-button-primary">
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
