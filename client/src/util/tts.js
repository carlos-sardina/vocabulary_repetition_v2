import { isMobile } from "react-device-detect";

export const Speech = {
  /**
   * This methods read the text sent as a parameter
   * @param {String} text Text to speech
   * @param {String} language Type voice
   */
  readText: (text, lang) => {
    return new Promise((resolve, reject) => {
      const synth = window.speechSynthesis;

      const voices = synth.getVoices();
      const textToRead = new SpeechSynthesisUtterance(text);

      console.log(voices);
      

      if (voices.length) {
        textToRead.voice = voices.filter(voice => (isMobile ? voice.lang : voice.voiceURI) === lang)[0];
        synth.speak(textToRead);
      }
      textToRead.onend = () => resolve();
    })
  },
  getVoices: () => window.speechSynthesis.getVoices(),
  open: () => window.speechSynthesis
};
