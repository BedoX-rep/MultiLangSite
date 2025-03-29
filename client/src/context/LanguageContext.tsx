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
    
    if (lang === language) {
      // No need to change if it's already the selected language
      return;
    }
    
    try {
      // Change i18n language - this will trigger the languageChanged event
      i18n.changeLanguage(lang);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  // Listen for i18n language changes from outside the context
  useEffect(() => {
    const handleLanguageChanged = (newLang: string) => {
      console.log('Language change detected:', newLang);
      
      // Update state
      setLanguageState(newLang);
      
      // Update direction
      const newDirection = newLang === 'ar' ? 'rtl' : 'ltr';
      setDirection(newDirection);
      
      // Update HTML document
      document.documentElement.lang = newLang;
      document.documentElement.dir = newDirection;
      console.log('Document direction updated:', newDirection);
      
      // Force refresh of DOM to ensure correct language rendering
      window.dispatchEvent(new Event('language-changed'));
    };

    // Add event listener
    i18n.on('languageChanged', handleLanguageChanged);
    
    // Cleanup
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

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
