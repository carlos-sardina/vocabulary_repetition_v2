import { Store } from '../redux/store';
import { Speech, GoogleLanguage } from './index';

export const Player = {
  /**
   * Play words with the repeat times config
   * 
   * @param {Array} words * Words to play
   * @param {Object} times * Times to play each word
   */
  play: async (tempWords, times = 1) => {
    if(!Array.isArray(tempWords)) {
      return false;
    }

    let words = [];
    tempWords.map(word => words.push(...new Array(times).fill(word)))
    const totalWords = words.length; // actualizar el total de palabras a reproducir

    for(let i in words) {
        
      console.log(words[i]);
      // guardar el ID actual del elemento reproduciendo
      // actualizar el contador en ese elemento, tambien al reproducirlo en el modal

      await new Promise(next => {
        Speech.readText(words[i].word, GoogleLanguage.getFromCode(words[i].language))
          .then(() => Speech.readText(words[i].meaning, GoogleLanguage.spanish()))
          .then(() => next())
      })
    }
  }
}

// detener con el boton
// calcular tiempo estimado
