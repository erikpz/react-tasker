import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomeLayout from "../HomeLayout";
import { HomePage } from "../HomePage";

export const HomeRoot = () => {
  return (
    <HomeLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </HomeLayout>
  );
};
