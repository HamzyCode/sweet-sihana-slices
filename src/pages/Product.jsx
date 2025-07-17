
import React from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { t } from '../utils/translations';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import { getProductById, getRelatedProducts } from '../utils/productData.js';
import './Product.css';

const Product = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">{t('productNotFound', language)}</h1>
            <p className="text-gray-600">{t('productNotFoundDescription', language)}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.description}</p>
              {product.longDescription && (
                <p className="text-gray-700 mb-6">{product.longDescription}</p>
              )}
              <div className="mb-6">
                <span className="text-2xl font-bold text-pink-500">{product.price}</span>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">{t('category', language)}</h3>
                <p className="text-gray-600">{product.category}</p>
              </div>
              {product.ingredients && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">{t('ingredients', language)}</h3>
                  <ul className="text-gray-600">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index} className="mb-1">• {ingredient}</li>
                    ))}
                  </ul>
                </div>
              )}
              <button className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-500 hover:to-pink-600 transition-all duration-300">
                {t('orderNow', language)}
              </button>
            </div>
          </div>
          
          {relatedProducts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">{t('relatedProducts', language)}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <div key={relatedProduct.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{relatedProduct.name}</h3>
                      <p className="text-gray-600 mb-2">{relatedProduct.description}</p>
                      <p className="text-xl font-bold text-pink-500">{relatedProduct.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
