import { DOMLoader } from './index';

export const Speech = {
  /**
   * This methods read the text sent as a parameter
   * @param {String} text Text to speech
   * @param {String} language Type voice
   */
  readText: (text, lang) => {
    return new Promise((resolve, reject) => {
      console.log(lang);
      const synth = window.speechSynthesis;
      let voices = synth.getVoices();

      let timer = setInterval(() => {
        if(!voices.length) {
          console.log(voices)
          voices = synth.getVoices();
        } else {
          console.log(voices)
          clearInterval(timer);
          DOMLoader.hidde();

          const textToRead = new SpeechSynthesisUtterance(text);
          textToRead.voice = voices.filter(voice => voice.voiceURI === lang)[0];
          console.log(voices.filter(voice => voice.voiceURI === lang)[0])
          synth.speak(textToRead);
          textToRead.onend = () => resolve();
        }
      }, 200);
    });
  },
  getVoices: () => window.speechSynthesis.getVoices()
};
