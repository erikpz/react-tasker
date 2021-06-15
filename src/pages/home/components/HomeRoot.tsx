import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomeLayout from "../HomeLayout";

export const HomeRoot = () => {
  return (
    <HomeLayout>
      <Routes>
        <Route path="/" element={<p>HOME</p>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </HomeLayout>
  );
};
