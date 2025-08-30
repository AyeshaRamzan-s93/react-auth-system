

// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // If no user → redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If children passed (e.g. <ProtectedRoute><Profile /></ProtectedRoute>)
  if (children) {
    return children;
  }

  // Otherwise, render nested routes with <Outlet />
  return <Outlet />;
}

export default ProtectedRoute;




// ProtectedRoute = allows access only if logged in. Otherwise redirects to login.

// RestrictedRoute = blocks access if already logged in (for login/signup).