
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../utils/translations';

const About = () => {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            {t('aboutTitle', language)}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('aboutDescription', language)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
