import { createStore, combineReducers } from 'redux'

import modalsReducer from "./reducers/modals";

const reducer = combineReducers({
  modalsReducer
});

const devtoools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const Store = createStore(reducer, devtoools);
