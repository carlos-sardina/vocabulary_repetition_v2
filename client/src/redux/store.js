import { createStore, combineReducers } from 'redux'

import modalsReducer from "./reducers/modals";
import wordsReducer from "./reducers/words";
import playerReducer from "./reducers/player";
import domLoader from './reducers/DOMLoader';

const reducer = combineReducers({
  modalsReducer,
  wordsReducer,
  playerReducer,
  domLoader
});

const devtoools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const Store = createStore(reducer, devtoools);
