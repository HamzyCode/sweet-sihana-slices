
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../utils/translations';

const Hero = () => {
  const { language } = useLanguage();

  return (
    <section className="hero bg-gradient-to-r from-pink-50 to-rose-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          {t('heroTitle', language)}
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {t('heroSubtitle', language)}
        </p>
        <Link
          to="/contact"
          className="inline-block bg-gradient-to-r from-pink-400 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-500 hover:to-pink-600 transition-all duration-300"
        >
          {t('orderNow', language)}
        </Link>
      </div>
    </section>
  );
};

export default Hero;
