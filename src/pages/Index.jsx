
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import Hero from '../components/home/Hero.jsx';
import Featured from '../components/home/Featured.jsx';
import About from '../components/home/About.jsx';
import Categories from '../components/home/Categories.jsx';
import FAQ from '../components/home/FAQ.jsx';
import CallToAction from '../components/home/CallToAction.jsx';
import CustomerReviews from '../components/home/CustomerReviews.jsx';

const Index = () => {
  const location = useLocation();

  // Handle anchor scrolling from other pages
  useEffect(() => {
    const scrollToElementId = sessionStorage.getItem('scrollToElement');
    if (scrollToElementId) {
      const element = document.getElementById(scrollToElementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      sessionStorage.removeItem('scrollToElement');
    } else if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Featured />
        <About />
        <Categories />
        <CustomerReviews />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
