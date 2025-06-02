
import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import './AuthLayout.css';

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="auth-container">
          <div className="auth-card">
            {title && <h2 className="auth-title">{title}</h2>}
            {subtitle && <p className="auth-description">{subtitle}</p>}
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
