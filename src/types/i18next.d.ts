import { resources, defaultNS } from '../i18n/index';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof resources)['en-AU'];
  }
}
