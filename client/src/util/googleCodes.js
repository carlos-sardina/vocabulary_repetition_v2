import { languages } from '../data/availableLanguages'

export const GoogleLanguage = {
  getFromCode: (code) => languages.filter(lang => code === lang.code)[0].google_id_pc,
  spanish: () => 'Google español de Estados Unidos'
}

/* español Estados Unidos */