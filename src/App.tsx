import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  WillContest,
  SuccessionPlanning,
  About,
  Inheritance,
  StaffDetail,
  Contact,
} from "./components/component-exports";
import "@radix-ui/themes/styles.css";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice-areas">
          <Route path="will-draft" element={<WillContest />} />
          <Route path="succession-planning" element={<SuccessionPlanning />} />
          <Route path="inheritance-disputes" element={<Inheritance />} />
        </Route>
        <Route path="/attorney/:id" element={<StaffDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
