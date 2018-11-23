import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './locale-en';

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translations: enTranslations
    }
  },

  fallbackLng: 'en',
  ns: ['translations'],
  defaultNS: 'translations'
});

export default i18n;
