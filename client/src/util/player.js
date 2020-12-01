import { Store } from '../redux/store';
import { Speech, GoogleLanguage, NumbersUtilities, PlayerBar, DOMLoader } from './index';
import { setTotalWords, setPlayingId, addIteration, setEstimatedTime, resetPlayerData, addReproducedTime } from '../redux/actions';
import { addTimeCounted } from '../services/words';

export const Player = {
  canPlay: true,
  /**
   * Play words with the repeat times config
   * 
   * @param {Array} words * Words to play
   * @param {Object} times * Times to play each word
   */
  play: async function(tempWords, times = 1) {
    if(!Array.isArray(tempWords)) {
      return false;
    }

    this.canPlay = true;
    let words = [];
    tempWords.map(word => words.push(...new Array(times).fill(word)))
    Store.dispatch(setTotalWords(words.length));
    PlayerBar.showPlayer();

    for(let i in words) {
      if(!this.canPlay) {
        DOMLoader.hidde();
        this.resetPlayer();
        break;
      }
      Store.dispatch(setPlayingId(words[i]._id));
      Store.dispatch(addIteration());
      Store.dispatch(addReproducedTime(words[i]._id));
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
        this.resetPlayer();
      }
    }
  },
  stop: function() {
    this.canPlay = false;
  },
  resetPlayer: function() {
    PlayerBar.hiddePlayer();
    Store.dispatch(resetPlayerData());
  }
}