import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { updateToastMessage } from "./send-email.slice";
import { EmailPayload } from "../../types/email.types";

export const sendEmailThunk = createAsyncThunk(
  "email/reducer",
  async (data: EmailPayload, thunkApi) => {
    try {
      const response = await axios.post(
        "https://fortuna-server.onrender.com/api/email/fortuna/send-email",
        data
      );

      if (response.status === 200) {
        const responseMessage = response.data.message;
        thunkApi.dispatch(
          updateToastMessage(responseMessage || "Message sent successfully.")
        );
      } else if (response.status === 400) {
        const message = response.data.message;
        thunkApi.dispatch(
          updateToastMessage(message || "All fields are required.")
        );
      } else {
        // Handle unexpected status codes
        const message =
          response.data?.message || "An unexpected error occurred.";
        thunkApi.dispatch(updateToastMessage(message));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Check if there is a response from the server
        const errorMessage =
          error.response?.data?.message || "Failed to send email.";
        thunkApi.dispatch(updateToastMessage(errorMessage));
      } else {
        // Handle non-Axios errors (e.g., network issues)
        thunkApi.dispatch(updateToastMessage("A network error occurred."));
      }
      console.error(error);
    }
  }
);
