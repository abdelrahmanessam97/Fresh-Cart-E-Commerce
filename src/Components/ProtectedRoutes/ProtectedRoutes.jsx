import { Navigate } from "react-router-dom";
import React from "react";

export default function ProtectedRoutes({ children }) {
  if (localStorage.getItem("userToken") !== null) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
}
