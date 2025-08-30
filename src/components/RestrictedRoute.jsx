

// src/components/RestrictedRoute.jsx

import { Navigate, Outlet } from "react-router-dom";

function RestrictedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // If already logged in → redirect to profile 
  if (user) {
    return <Navigate to="/profile" replace />;
  }

  // If children passed (e.g. <RestrictedRoute><Login /></RestrictedRoute>)
  if (children) {
    return children;
  }

  // Otherwise, render nested routes with <Outlet />
  return <Outlet />;
}

export default RestrictedRoute;
