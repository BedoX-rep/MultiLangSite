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
  // Initialize state
  const [language, setLanguageState] = useState('en');
  const [direction, setDirection] = useState<'ltr' | 'rtl'>('ltr');

  // Simple function to change language
  const setLanguage = (lang: string) => {
    console.log('Context setLanguage called with:', lang);
    
    try {
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

  // Listen for i18n language changes
  useEffect(() => {
    const handleLanguageChanged = (newLang: string) => {
      console.log('Language change detected:', newLang);
      setLanguageState(newLang);
      setDirection(newLang === 'ar' ? 'rtl' : 'ltr');
    };

    // Add event listener
    i18n.on('languageChanged', handleLanguageChanged);
    
    // Initialize with English
    setLanguage('en');
    
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
  return context;
};
