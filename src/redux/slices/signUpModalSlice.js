import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPrevSignupModal: false,
  noSignUp: false,
  noLogIn: false,
  IHUAddModal: false,
  isProceedIHIComplete: false,
  sentCodeModal: false,
};

const signUpModalSlice = createSlice({
  name: "signUpModal",
  initialState,
  reducers: {
    setIsPrevSignupModal: (state, action) => {
      state.isPrevSignupModal = action?.payload;
    },
    setIsNoSignUp: (state, action) => {
      state.noSignUp = action?.payload;
    },
    setIsNoLogIn: (state, action) => {
      state.noLogIn = action?.payload;
    },
    setIHUAddModal: (state, action) => {
      state.IHUAddModal = action?.payload;
    },
    setIsProceedIHIComplete: (state, action) => {
      state.isProceedIHIComplete = action?.payload;
    },
    handleSentCodeModal: (state, action) => {
      state.sentCodeModal = action?.payload;
    },
  },
});

export const {
  setIsPrevSignupModal,
  setIsNoSignUp,
  setIsNoLogIn,
  setIHUAddModal,
  setIsProceedIHIComplete,
  handleSentCodeModal,
} = signUpModalSlice.actions;
export default signUpModalSlice.reducer;
