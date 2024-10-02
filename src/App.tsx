import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Header, Home } from "./components/component-exports";
import "@radix-ui/themes/styles.css";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
