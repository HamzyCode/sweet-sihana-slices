
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../utils/translations';

const CustomerReviews = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          {t('customerReviews', language)}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400">★★★★★</div>
            </div>
            <p className="text-gray-600 mb-4">"Amazing cakes! Perfect for our wedding day."</p>
            <p className="font-semibold">- Maria K.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400">★★★★★</div>
            </div>
            <p className="text-gray-600 mb-4">"The chocolate cake was incredible. Highly recommend!"</p>
            <p className="font-semibold">- Stefan P.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400">★★★★★</div>
            </div>
            <p className="text-gray-600 mb-4">"Beautiful custom design and delicious taste."</p>
            <p className="font-semibold">- Ana M.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
