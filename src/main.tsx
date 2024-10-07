import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Theme } from "@radix-ui/themes";
import { Provider } from "react-redux"; // Import Provider from react-redux
import { store } from "./store/config/store.config.ts"; // Import your store

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      {/* Wrap with Provider and pass the store */}
      <Router>
        <Theme accentColor="gold">
          <App />
        </Theme>
      </Router>
    </Provider>
  </StrictMode>
);
