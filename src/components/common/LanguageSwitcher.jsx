
import React, { useState, useEffect } from 'react';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const languages = [
    { code: 'en', flag: '🇬🇧', name: 'English' },
    { code: 'sq', flag: '🇦🇱', name: 'Shqip' },
    { code: 'mk', flag: '🇲🇰', name: 'Македонски' }
  ];

  // Language content mapping
  const content = {
    en: {
      home: 'Home',
      about: 'About',
      menu: 'Menu',
      contact: 'Contact',
      login: 'Login',
      admin: 'Admin',
      logout: 'Logout',
      heroTitle: 'Handcrafted Cakes for Every Celebration',
      heroSubtitle: 'Creating sweet memories with artisanal cakes made from the finest ingredients',
      orderNow: 'Order Now',
      viewMenu: 'View Menu',
      aboutTitle: 'Crafting Sweet Memories Since 2010',
      featuredTitle: 'Our Featured Cakes',
      contactTitle: 'Get in Touch',
      orderButton: 'Order Your Custom Cake'
    },
    sq: {
      home: 'Ballina',
      about: 'Rreth Nesh',
      menu: 'Menyja',
      contact: 'Kontakt',
      login: 'Hyrje',
      admin: 'Admin',
      logout: 'Dalje',
      heroTitle: 'Torta të Punuara me Dorë për Çdo Festë',
      heroSubtitle: 'Duke krijuar kujtime të ëmbla me torta artizanale të bëra nga përbërësit më të mirë',
      orderNow: 'Porosit Tani',
      viewMenu: 'Shiko Menynë',
      aboutTitle: 'Duke Krijuar Kujtime të Ëmbla që nga 2010',
      featuredTitle: 'Tortat Tona të Veçanta',
      contactTitle: 'Na Kontaktoni',
      orderButton: 'Porosit Tortën Tuaj të Personalizuar'
    },
    mk: {
      home: 'Дома',
      about: 'За Нас',
      menu: 'Мени',
      contact: 'Контакт',
      login: 'Најава',
      admin: 'Админ',
      logout: 'Одјава',
      heroTitle: 'Рачно Изработени Торти за Секоја Прослава',
      heroSubtitle: 'Создаваме слатки спомени со артизански торти направени од најфини состојки',
      orderNow: 'Нарачај Сега',
      viewMenu: 'Види Мени',
      aboutTitle: 'Создаваме Слатки Спомени од 2010',
      featuredTitle: 'Нашите Истакнати Торти',
      contactTitle: 'Контактирајте Не',
      orderButton: 'Нарачајте Ја Вашата Персонализирана Торта'
    }
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
    document.documentElement.setAttribute('data-language', savedLanguage);
    updatePageContent(savedLanguage);
  }, []);

  const updatePageContent = (languageCode) => {
    const langContent = content[languageCode];
    
    // Update navigation links
    const navLinks = document.querySelectorAll('[data-translate]');
    navLinks.forEach(link => {
      const key = link.getAttribute('data-translate');
      if (langContent[key]) {
        link.textContent = langContent[key];
      }
    });

    // Update other text elements
    const textElements = document.querySelectorAll('[data-text]');
    textElements.forEach(element => {
      const key = element.getAttribute('data-text');
      if (langContent[key]) {
        element.textContent = langContent[key];
      }
    });
  };

  const handleLanguageChange = (languageCode) => {
    setCurrentLanguage(languageCode);
    localStorage.setItem('language', languageCode);
    document.documentElement.setAttribute('data-language', languageCode);
    updatePageContent(languageCode);
    
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
