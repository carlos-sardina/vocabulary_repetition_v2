import { type as wordTypes } from "../actions/words";

const initialState = {
  words: [],
  selectedWord: null
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
    default:
      return state
  }
}

export default wordsReducer;