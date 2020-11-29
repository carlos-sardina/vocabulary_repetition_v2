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
    default:
      return state
  }
}

export default wordsReducer;