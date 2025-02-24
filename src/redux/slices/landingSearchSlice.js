import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedService: null,
  selectedLocation: null,
  serviceDropdown: false,
  locationDropdown: false,
  selectedConsult: null,
};

const landingSearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSelectedService: (state, action) => {
      state.selectedService = action.payload;
      state.serviceDropdown = false;
    },
    setSelectedLocation: (state, action) => {
      state.selectedLocation = action.payload;
      state.locationDropdown = false;
    },
    toggleServiceDropdown: (state) => {
      state.serviceDropdown = !state.serviceDropdown;
    },
    toggleLocationDropdown: (state) => {
      state.locationDropdown = !state.locationDropdown;
    },
    setSelectedConsult: (state, action) => {
      state.selectedConsult = action.payload;
    },
  },
});

export const {
  setSelectedService,
  setSelectedLocation,
  toggleServiceDropdown,
  toggleLocationDropdown,
  setSelectedConsult,
} = landingSearchSlice.actions;
export default landingSearchSlice.reducer;
