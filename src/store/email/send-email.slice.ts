//slice definitions for sending email
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sendEmailThunk } from "./send-email.reducer";

const initialState = {
  name: "",
  email: "",
  phone: "",
  practice: "estate-admin",
  description: "",
  toastMessage: "",
  success: false,
  error: false,
  loading: false,
};

export const sendEmailSlice = createSlice({
  name: "send-email/slice",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePhone: (state, action) => {
      state.phone = action.payload;
    },
    updatePractice: (state, action) => {
      state.practice = action.payload;
    },
    updateDescription: (state, action) => {
      state.description = action.payload;
    },
    updateToastMessage: (state, action: PayloadAction<string>) => {
      state.toastMessage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendEmailThunk.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = false;
      })
      .addCase(sendEmailThunk.fulfilled, (state) => {
        state.success = true;
        state.loading = false;
        state.error = false;
      })
      .addCase(sendEmailThunk.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.success = false;
      });
  },
});

export const {
  updateName,
  updateEmail,
  updateDescription,
  updatePhone,
  updatePractice,
  updateToastMessage,
} = sendEmailSlice.actions;

export default sendEmailSlice.reducer;
