import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPrevSignupModal: false,
  noSignUp: false,
  noLogIn: false,
  IHUAddModal: false,
  isProceedIHIComplete: false,
  sentCodeModal: false,
  isVerifyWithCode: false,
  addClinicModal: false,
  addDoctorModal: false,
  isShowPaymentForm: false,
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
    setIsVerifyWithCode: (state, action) => {
      state.isVerifyWithCode = action?.payload;
    },
    handleAddClinicModal: (state, action) => {
      state.addClinicModal = action?.payload;
    },
    handleAddDoctorModal: (state, action) => {
      state.addDoctorModal = action?.payload;
    },
    setIsShowPaymentForm: (state, action) => {
      state.isShowPaymentForm = action?.payload;
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
  setIsVerifyWithCode,
  handleAddClinicModal,
  handleAddDoctorModal,
} = signUpModalSlice.actions;
export default signUpModalSlice.reducer;
