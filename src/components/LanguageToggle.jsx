
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { language, changeLanguage } = useLanguage();

  const languages = [
    { code: 'en', flag: '🇬🇧', name: 'English' },
    { code: 'mk', flag: '🇲🇰', name: 'Македонски' },
    { code: 'sq', flag: '🇦🇱', name: 'Shqip' }
  ];

  return (
    <div className="relative">
      <select
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="appearance-none bg-transparent border-none text-sm cursor-pointer focus:outline-none pr-6"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
      <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-xs">▼</span>
    </div>
  );
};

export default LanguageToggle;
