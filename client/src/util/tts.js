import { DOMLoader } from './index';

export const Speech = {
  /**
   * This methods read the text sent as a parameter
   * @param {String} text Text to speech
   * @param {String} language Type voice
   */
  readText: (text, lang) => {
    return new Promise((resolve, reject) => {
      const synth = window.speechSynthesis;
      let voices = synth.getVoices();

      let timer = setInterval(() => {
        if(!voices.length) {
          voices = synth.getVoices();
        } else {
          clearInterval(timer);
          DOMLoader.hidde();

          let textToRead = new SpeechSynthesisUtterance(text);

          const chosenItem = voices.filter(voice => voice.voiceURI === lang)[0];
          textToRead.voice = chosenItem;
          textToRead.lang = chosenItem.lang;

          synth.speak(textToRead);
          textToRead.onend = () => resolve();
        }
      }, 200);
    });
  },
  getVoices: () => window.speechSynthesis.getVoices()
};
