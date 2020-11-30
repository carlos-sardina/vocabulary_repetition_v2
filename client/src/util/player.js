import { Store } from '../redux/store';
import { Speech, GoogleLanguage, NumbersUtilities, PlayerBar } from './index';
import { setTotalWords, setPlayingId, addIteration, setEstimatedTime, resetPlayerData } from '../redux/actions';
import { addTimeCounted } from '../services/words';

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
    Store.dispatch(setTotalWords(words.length));
    PlayerBar.showPlayer();

    for(let i in words) {
      Store.dispatch(setPlayingId(words[i]._id));
      Store.dispatch(addIteration());
      await addTimeCounted(words[i]._id);

      await new Promise(next => {
        const t0 = performance.now();
        Speech.readText(words[i].word, GoogleLanguage.getFromCode(words[i].language))
          .then(() => Speech.readText(words[i].meaning, GoogleLanguage.spanish()))
          .then(() => {
            const t1 = performance.now();
            const estimatedTime = (words.length - i) * (t1 - t0);
            Store.dispatch(setEstimatedTime(NumbersUtilities.millisToMinutesAndSeconds(estimatedTime)))

            return next();
          })
      })

      if(Number(i) + 1 === words.length) {
        PlayerBar.hiddePlayer();
        Store.dispatch(resetPlayerData());
      }
    }
  }
}