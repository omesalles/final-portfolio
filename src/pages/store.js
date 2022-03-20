import { createStore, combineReducers } from "redux";

const appReducer = combineReducers({});

/*export default createStore(appReducer);*/

export const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
