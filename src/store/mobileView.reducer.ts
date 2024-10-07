//mobile view reducer function
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobile: false,
};

export const toggleMobileView = createSlice({
  name: "toggle-mobile-view",
  initialState,
  reducers: {
    toggleMobileState: (state) => {
      state.isMobile = !state.isMobile;
    },
  },
});

export const { toggleMobileState } = toggleMobileView.actions;

export default toggleMobileView.reducer;
