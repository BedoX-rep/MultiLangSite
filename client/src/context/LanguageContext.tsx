import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import i18n from '../lib/i18n';

// Define the context type
interface LanguageContextType {
  language: string;
  direction: 'ltr' | 'rtl';
  setLanguage: (lang: string) => void;
}

// Create the context
export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  direction: 'ltr',
  setLanguage: () => {}
});

// Define props for the provider component
interface LanguageProviderProps {
  children: ReactNode;
}

// Create the provider component
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Initialize state with the current i18n language or default to 'en'
  const [language, setLanguageState] = useState(i18n.language || 'en');
  const [direction, setDirection] = useState<'ltr' | 'rtl'>(i18n.language === 'ar' ? 'rtl' : 'ltr');

  // Function to change language that ensures context state and i18n are in sync
  const setLanguage = (lang: string) => {
    console.log('Context setLanguage called with:', lang);
    
    try {
      // Update localStorage directly
      localStorage.setItem('i18nextLng', lang);
      
      // Change i18n language
      i18n.changeLanguage(lang);
      
      // Update our state
      setLanguageState(lang);
      
      // Set direction based on language
      setDirection(lang === 'ar' ? 'rtl' : 'ltr');
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  // Listen for i18n language changes from outside the context
  useEffect(() => {
    const handleLanguageChanged = (newLang: string) => {
      console.log('Language change detected:', newLang);
      setLanguageState(newLang);
      setDirection(newLang === 'ar' ? 'rtl' : 'ltr');
    };

    // Add event listener
    i18n.on('languageChanged', handleLanguageChanged);
    
    // Set initial language from i18n or localStorage
    const savedLang = localStorage.getItem('i18nextLng') || 'en';
    if (savedLang !== language) {
      setLanguage(savedLang);
    }
    
    // Cleanup
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  // Update HTML document when direction changes
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    console.log('Document direction updated:', direction);
  }, [language, direction]);

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage }}>
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
