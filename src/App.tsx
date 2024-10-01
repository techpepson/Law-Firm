import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components/component-exports";
import "@radix-ui/themes/styles.css";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
};

export default App;
