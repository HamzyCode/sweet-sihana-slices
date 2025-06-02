
import React, { useState, useEffect } from 'react';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const languages = [
    { code: 'en', flag: '🇬🇧', name: 'English' },
    { code: 'sq', flag: '🇦🇱', name: 'Shqip' },
    { code: 'mk', flag: '🇲🇰', name: 'Македонски' }
  ];

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
    document.documentElement.setAttribute('data-language', savedLanguage);
  }, []);

  const handleLanguageChange = (languageCode) => {
    setCurrentLanguage(languageCode);
    localStorage.setItem('language', languageCode);
    document.documentElement.setAttribute('data-language', languageCode);
    
    // Trigger a custom event for other components to listen to
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: languageCode }));
  };

  return (
    <div className="language-switcher">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`language-button ${currentLanguage === lang.code ? 'active' : ''}`}
          onClick={() => handleLanguageChange(lang.code)}
          title={lang.name}
        >
          {lang.flag}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
