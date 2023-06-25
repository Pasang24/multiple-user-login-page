import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Forbidden from "./Forbidden";

const ProtectedRoute = (props) => {
  // const { user } = useSelector((state) => state.user);
  const role = JSON.parse(localStorage.getItem("role"));

  if (role) {
    if (role == props.role) {
      return <Outlet />;
    }
    return <Forbidden />;
  }
  return <Navigate to="login" />;
};

export default ProtectedRoute;
