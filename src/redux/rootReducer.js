import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import landingSearchReducer from "./slices/landingSearchSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  landingSearch: landingSearchReducer,
});

export default rootReducer;
