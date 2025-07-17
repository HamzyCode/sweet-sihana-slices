
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../utils/translations';

const CallToAction = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-r from-pink-400 to-pink-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          {t('callToAction', language)}
        </h2>
        <Link
          to="/contact"
          className="inline-block bg-white text-pink-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
        >
          {t('contact', language)}
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
