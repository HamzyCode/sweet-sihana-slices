
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../utils/translations';

const FAQ = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          {t('faq', language)}
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">How do I place an order?</h3>
              <p className="text-gray-600">You can place an order by contacting us directly or through our Wolt delivery service.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Do you offer custom designs?</h3>
              <p className="text-gray-600">Yes, we specialize in custom cake designs for all occasions. Contact us to discuss your requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
