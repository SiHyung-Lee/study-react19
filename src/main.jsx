import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Signup from "./Signup.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<App />}
      />
      <Route
        path="/signup"
        element={<Signup />}
      />
    </Routes>
  </BrowserRouter>
);
