import { type as languageTypes } from "../actions/language";

const initialState = {
  language: null
};

const languageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case languageTypes.set_language:
    return {
      language: payload
    }
    default:
      return state
  }
}

export default languageReducer;