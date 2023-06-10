import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LANGUAGES } from './consts';

import en from './locales/en.json';
import ua from './locales/ua.json';

const resources = {
  [LANGUAGES.en]: {
    translation: en,
  },
  [LANGUAGES.ua]: {
    translation: ua,
  },
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    debug: true,
    fallbackLng: LANGUAGES.ua,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: 'v3',
  });
