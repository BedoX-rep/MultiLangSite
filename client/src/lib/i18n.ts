import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// We're going to bypass the language detector completely
// import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from '../locales/en.json';
import frTranslation from '../locales/fr.json';
import arTranslation from '../locales/ar.json';

// Define available languages
const resources = {
  en: {
    translation: enTranslation
  },
  fr: {
    translation: frTranslation
  },
  ar: {
    translation: arTranslation
  }
};

// Basic initialization without any detection
i18n
  .use(initReactI18next)
  .init({
    resources,
    // Hardcode English as the default language
    lng: 'en', 
    fallbackLng: 'en',
    
    // Other configuration
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    },
    
    // We'll handle the language changes manually
    detection: {
      order: []
    }
  });

// Add debug logging so we can see when languages change
i18n.on('languageChanged', (lng) => {
  console.log(`i18n language changed to: ${lng}`);
});

// Force set to English on startup
i18n.changeLanguage('en');

export default i18n;
