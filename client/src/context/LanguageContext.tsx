import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../lib/i18n';

// Define the context type
interface LanguageContextType {
  language: string;
  direction: 'ltr' | 'rtl';
  setLanguage: (lang: string) => void;
}

// Create default context value
const defaultContextValue: LanguageContextType = {
  language: 'en',
  direction: 'ltr',
  setLanguage: () => {}
};

// Create the context
export const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

// Define props for the provider component
interface LanguageProviderProps {
  children: ReactNode;
}

// Create the provider component
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState(i18n.language || 'en');
  const [direction, setDirection] = useState<'ltr' | 'rtl'>(
    i18n.language === 'ar' ? 'rtl' : 'ltr'
  );

  // Function to change the language
  const setLanguage = (lang: string) => {
    console.log('Changing language to:', lang);
    
    // First update i18n
    i18n.changeLanguage(lang);
    
    // Then update state
    setLanguageState(lang);
    
    // Update direction based on language
    const newDirection = lang === 'ar' ? 'rtl' : 'ltr';
    setDirection(newDirection);
    
    // Force save to localStorage (in case detection fails)
    localStorage.setItem('i18nextLng', lang);
  };

  // Update HTML document attributes when language/direction changes
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    console.log('Language updated to:', language, 'Direction:', direction);
  }, [language, direction]);

  // When i18n language changes externally, sync our state
  useEffect(() => {
    const handleLanguageChanged = () => {
      const currentLang = i18n.language;
      setLanguageState(currentLang);
      setDirection(currentLang === 'ar' ? 'rtl' : 'ltr');
    };

    // Add event listener for i18n language changes
    i18n.on('languageChanged', handleLanguageChanged);

    // Force English on first load
    i18n.changeLanguage('en');
    setLanguageState('en');
    setDirection('ltr');
    localStorage.setItem('i18nextLng', 'en');

    // Clean up
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        direction, 
        setLanguage 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
