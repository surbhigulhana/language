// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './en.json';
import frTranslation from './fr.json';
import arTranslation from './ar.json';
import itTranslation from './it.json';
import esTranslation from './es.json';

// Initialize i18next
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
      ar: { translation: arTranslation},
      it: { translation: itTranslation } ,
      es: { translation: esTranslation } 

    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language if translation not found
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n; // Export the i18n instance