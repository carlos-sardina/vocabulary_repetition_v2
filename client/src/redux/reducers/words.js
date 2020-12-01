import { type as wordTypes } from "../actions/words";

const initialState = {
  words: [],
  selectedWord: null,
  studiedAverage: 0,
  repeat_times: null
};

const wordsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case wordTypes.set_list:
      return {
        ...state,
        words: payload,
      }
    case wordTypes.set_selected_word:
      return {
        ...state,
        selectedWord: payload
      }
    case wordTypes.set_average_times:
      return {
        ...state,
        studiedAverage: payload
      }
    case wordTypes.set_repeat_times:
      return {
        ...state,
        repeat_times: payload
      }
    case wordTypes.add_reproduced_time:
      const words = state.words.map(word => {
        if(word._id === payload) {
          word.times_played = word.times_played + 1; 
        }

        return word;
      })
      return {
        ...state,
        words
      }
    default:
      return state
  }
}

export default wordsReducer;