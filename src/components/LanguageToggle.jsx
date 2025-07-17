
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { language, changeLanguage } = useLanguage();

  const languages = [
    { code: 'en', flag: '🇬🇧', name: 'EN' },
    { code: 'mk', flag: '🇲🇰', name: 'MK' },
    { code: 'sq', flag: '🇦🇱', name: 'AL' }
  ];

  return (
    <div className="flex bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-3 py-2 text-sm font-medium transition-colors border-r border-gray-200 last:border-r-0 ${
            language === lang.code
              ? 'bg-gradient-to-r from-pink-400 to-pink-500 text-white'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
