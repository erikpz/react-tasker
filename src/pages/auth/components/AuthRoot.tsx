import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core";
import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";

const AuthRoot: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.authRoot}>
      <Routes>
        <Route path="/sign-in" element={<LoginPage />} />
        <Route path="/sign-up" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  authRoot: {
    width: "100vw",
    height: "100vh",
  },
}));

export default AuthRoot;
