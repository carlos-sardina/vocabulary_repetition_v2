import { languages } from '../data/availableLanguages';
import { isMobile } from 'react-device-detect';

export const GoogleLanguage = {
  getFromCode: (code) => languages.filter(lang => code === lang.code)[0][(isMobile ? 'google_id_mobile' : 'google_id_pc')],
  spanish: () => isMobile ? 'español Estados Unidos' : 'Google español de Estados Unidos'
}