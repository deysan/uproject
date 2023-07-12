import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  debug: false,

  interpolation: {
    escapeValue: false,
  },
  resources: { en: { translations: {} } },
});

// eslint-disable-next-line no-restricted-exports
export default i18n;
