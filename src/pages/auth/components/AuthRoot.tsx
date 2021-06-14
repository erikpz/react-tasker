import React, { FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage } from "../LoginPage";

const AuthRoot: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Navigate to="/404" />
    </Routes>
  );
};

export default AuthRoot;
 