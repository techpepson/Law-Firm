import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ContactPayload } from "../../types/email.types";
import { updateResponseMessage } from "./contact.slice";

export const contactThunk = createAsyncThunk(
  "email/reducer",
  async (data: ContactPayload, thunkApi) => {
    try {
      const response = await axios.post(
        "https://fortuna-server.onrender.com/api/email/fortuna/contact",
        data
      );

      if (response.status === 200) {
        const responseMessage = response.data.message;
        thunkApi.dispatch(
          updateResponseMessage(responseMessage || "Message sent successfully.")
        );
      } else if (response.status === 400) {
        const message = response.data.message;
        thunkApi.dispatch(
          updateResponseMessage(message || "All fields are required.")
        );
      } else {
        // Handle unexpected status codes
        const message =
          response.data?.message || "An unexpected error occurred.";
        thunkApi.dispatch(updateResponseMessage(message));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Check if there is a response from the server
        const errorMessage =
          error.response?.data?.message || "Failed to send email.";
        thunkApi.dispatch(updateResponseMessage(errorMessage));
      } else {
        // Handle non-Axios errors (e.g., network issues)
        thunkApi.dispatch(updateResponseMessage("A network error occurred."));
      }
      console.error(error);
    }
  }
);
