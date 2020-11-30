import { languages } from "../data/availableLanguages";

export const Speech = {
  /**
   * This methods read the text sent as a parameter
   * @param {String} text Text to speech
   * @param {String} language Type voice
   */
  readText: (text, language) => {
    return new Promise((resolve, reject) => {
      const synth = window.speechSynthesis;

      const voices = synth.getVoices();
      const textToRead = new SpeechSynthesisUtterance(text);

      if (voices.length) {
        textToRead.voice = voices.filter(voice => voice.voiceURI === language)[0];
        synth.speak(textToRead);
      }
      textToRead.onend = () => resolve();
    })
  },
  getVoices: () => window.speechSynthesis.getVoices(),
  open: () => window.speechSynthesis
};
