import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

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

// Initialize with language detector
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    
    // Detection options
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
    
    // Other configuration
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

// Add debug logging so we can see when languages change
i18n.on('languageChanged', (lng) => {
  console.log(`i18n language changed to: ${lng}`);
});

export default i18n;
