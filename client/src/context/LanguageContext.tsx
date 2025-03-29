import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageContextType {
  language: string;
  direction: 'ltr' | 'rtl';
  setLanguage: (lang: string) => void;
}

// Create a default context value to avoid undefined check
const defaultContextValue: LanguageContextType = {
  language: 'en',
  direction: 'ltr',
  setLanguage: () => console.warn('LanguageProvider not found')
};

// Export the context with a default value
export const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState(i18n.language || 'en');
  const [direction, setDirection] = useState<'ltr' | 'rtl'>(language === 'ar' ? 'rtl' : 'ltr');

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguageState(lang);
    setDirection(lang === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('i18nextLng', lang);
  };

  useEffect(() => {
    // Set initial direction based on language
    setDirection(language === 'ar' ? 'rtl' : 'ltr');
    
    // Update HTML attributes
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [language, direction]);

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  return useContext(LanguageContext);
};
