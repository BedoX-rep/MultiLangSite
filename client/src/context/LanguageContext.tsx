import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

interface LanguageContextType {
  language: string;
  direction: 'ltr' | 'rtl';
  setLanguage: (lang: string) => void;
}

// Create a default context value
const defaultContextValue: LanguageContextType = {
  language: 'en',
  direction: 'ltr',
  setLanguage: () => {}
};

// Export the context with a default value
export const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Get stored language from localStorage or use browser language
  const getInitialLanguage = () => {
    const savedLanguage = localStorage.getItem('i18nextLng');
    return savedLanguage || navigator.language.split('-')[0] || 'en';
  };

  const [language, setLanguageState] = useState(getInitialLanguage());
  const [direction, setDirection] = useState<'ltr' | 'rtl'>(language === 'ar' ? 'rtl' : 'ltr');
  const { i18n } = useTranslation();

  // Initialize with the correct language
  useEffect(() => {
    const initialLang = getInitialLanguage();
    i18n.changeLanguage(initialLang);
    setLanguageState(initialLang);
    setDirection(initialLang === 'ar' ? 'rtl' : 'ltr');
  }, []);

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguageState(lang);
    setDirection(lang === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('i18nextLng', lang);
  };

  useEffect(() => {
    // Update HTML attributes
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    
    console.log('Language changed to:', language, 'Direction:', direction);
  }, [language, direction]);

  // Create the value object to be passed to the provider
  const contextValue = {
    language,
    direction,
    setLanguage
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
