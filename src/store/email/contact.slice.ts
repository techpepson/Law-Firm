//slice definitions for sending email
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { contactThunk } from "./contact.reducer";

const initialState = {
  name: "",
  email: "",
  message: "",
  responseMessage: "",
  success: false,
  error: false,
  loading: false,
};

export const contactSlice = createSlice({
  name: "contact/slice",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },

    updateMessage: (state, action) => {
      state.message = action.payload;
    },
    updateResponseMessage: (state, action: PayloadAction<string>) => {
      state.responseMessage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(contactThunk.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = false;
      })
      .addCase(contactThunk.fulfilled, (state) => {
        state.success = true;
        state.loading = false;
        state.error = false;
      })
      .addCase(contactThunk.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.success = false;
      });
  },
});

export const { updateName, updateEmail, updateMessage, updateResponseMessage } =
  contactSlice.actions;

export default contactSlice.reducer;
