import { configureStore } from "@reduxjs/toolkit";
import { toggleMobileView } from "../mobileView.reducer";
import { sendEmailSlice } from "../email/send-email.slice";
import { contactSlice } from "../email/contact.slice";

export const store = configureStore({
  reducer: {
    mobileView: toggleMobileView.reducer,
    sendEmail: sendEmailSlice.reducer,
    contact: contactSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
