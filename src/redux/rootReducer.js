import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import { default as landingSearchReducer } from "./slices/landingSearchSlice";
import { default as signUpModalReducer } from "./slices/signUpModalSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  landingSearch: landingSearchReducer,
  signUpModal: signUpModalReducer,
});

export default rootReducer;
