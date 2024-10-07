import { configureStore } from "@reduxjs/toolkit";
import { toggleMobileView } from "../mobileView.reducer";

export const store = configureStore({
  reducer: {
    mobileView: toggleMobileView.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
