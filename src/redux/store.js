import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";

//IMPORT REDUCERS
import reviewReducer from "./ducks/reviewReducer";

export default createStore(
  combineReducers({
    reviewReducer
  }),
  applyMiddleware(promiseMiddleware())
);
