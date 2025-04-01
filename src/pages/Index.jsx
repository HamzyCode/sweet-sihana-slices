
import React from 'react';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import Hero from '../components/home/Hero.jsx';
import Featured from '../components/home/Featured.jsx';
import About from '../components/home/About.jsx';
import Categories from '../components/home/Categories.jsx';
import Testimonials from '../components/home/Testimonials.jsx';
import FAQ from '../components/home/FAQ.jsx';
import CallToAction from '../components/home/CallToAction.jsx';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Featured />
        <About />
        <Categories />
        <Testimonials />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
