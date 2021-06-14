import { makeStyles, Theme } from "@material-ui/core";
import React, { FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage } from "../LoginPage";

const AuthRoot: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.authRoot}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Navigate to="/404" />
      </Routes>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  authRoot: {
    width:'100%',
    height: '100%',
  },
}));

export default AuthRoot;
