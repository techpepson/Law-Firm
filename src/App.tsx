import React from "react";
import { Routes, Route } from "react-router-dom";
import { About, Home, People } from "./components/component-exports";
import "@radix-ui/themes/styles.css";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/people" element={<People />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
