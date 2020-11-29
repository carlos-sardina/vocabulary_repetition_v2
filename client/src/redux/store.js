import { createStore, combineReducers } from 'redux'

import modalsReducer from "./reducers/modals";
import wordsReducer from "./reducers/words";
import languageReducer from "./reducers/language";

const reducer = combineReducers({
  modalsReducer,
  wordsReducer,
  languageReducer
});

const devtoools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const Store = createStore(reducer, devtoools);
