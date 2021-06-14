import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthRoot from "./pages/AuthRoot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthRoot />} />
        <Route path="/404" element={<p>404</p>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
