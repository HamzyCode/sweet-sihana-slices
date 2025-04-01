
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="not-found-container">
        <div className="not-found-content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>Oops! The page you are looking for doesn't exist.</p>
          <Link to="/" className="home-button">Return to Home</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
