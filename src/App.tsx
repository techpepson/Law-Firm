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
  Disclaimer,
  LegalNotice,
  EstateAdmin,
} from "./components/component-exports";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "@radix-ui/themes/styles.css";

const App: React.FC = () => {
  return (
    <>
      <ToastContainer position="top-right" hideProgressBar={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice-areas">
          <Route path="will-draft" element={<WillContest />} />
          <Route path="succession-planning" element={<SuccessionPlanning />} />
          <Route path="inheritance-disputes" element={<Inheritance />} />
          <Route path="estate-admin" element={<EstateAdmin />} />
        </Route>
        <Route path="/attorney/:id" element={<StaffDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/notice" element={<LegalNotice />} />
      </Routes>
    </>
  );
};

export default App;
