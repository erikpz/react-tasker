import React, { FC } from "react";
import { Navigate, Route, RouteProps } from "react-router";

const PrivateRoutes: FC<RouteProps> = (props) => {
  if (localStorage.getItem('token')) {
    return <Route {...props} />;
  } else {
    return <Navigate to="/auth" />;
  }
};

export default PrivateRoutes;
