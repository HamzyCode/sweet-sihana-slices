
import React, { useState } from 'react';

const LanguageSelector = ({ selectedLanguage, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'sq', name: 'Shqip', flag: '🇦🇱' },
    { code: 'mk', name: 'Македонски', flag: '🇲🇰' }
  ];

  const selectedLang = languages.find(lang => lang.code === selectedLanguage);

  const handleLanguageSelect = (langCode) => {
    onLanguageChange(langCode);
    setIsOpen(false);
  };

  const clearSelection = () => {
    onLanguageChange('en');
    setIsOpen(false);
  };

  return (
    <div className="language-selector">
      <div className="selected-language" onClick={() => setIsOpen(!isOpen)}>
        <span className="flag">{selectedLang.flag}</span>
        <span className="name">{selectedLang.name}</span>
        {selectedLanguage !== 'en' && (
          <button 
            className="clear-button"
            onClick={(e) => {
              e.stopPropagation();
              clearSelection();
            }}
          >
            ×
          </button>
        )}
        <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
      </div>
      
      {isOpen && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className={`language-option ${lang.code === selectedLanguage ? 'active' : ''}`}
              onClick={() => handleLanguageSelect(lang.code)}
            >
              <span className="flag">{lang.flag}</span>
              <span className="name">{lang.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
