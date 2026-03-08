import React from "react";
import ReactDOM from "react-dom/client";   // ✅ THIS LINE WAS MISSING

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register"; // create this file
import ForgotPassword from "./components/ForgotPassword";
import Feedback from "./components/Feedback";
import ListCrop from "./components/ListCrop";
import "./i18n";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Feedback" element={<Feedback />} />
              <Route path="/list-crop" element={<ListCrop />} />
    </Routes>
  </BrowserRouter>
);
