import { languages } from '../data/availableLanguages';
import { isMobile } from 'react-device-detect';

export const GoogleLanguage = {
  getFromCode: (code) => languages.filter(lang => code === lang.code)[0][(isMobile ? 'google_id_mobile' : 'google_id_pc')],
  spanish: () => isMobile ? 'es-US' : 'Google español de Estados Unidos'
}