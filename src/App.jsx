

import { Routes, Route } from "react-router-dom";

import PageTitle from "./components/PageTitle";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";

import ProtectedRoute from "./components/ProtectedRoute";
import RestrictedRoute from "./components/RestrictedRoute";

import Profile from "./pages/Profile/Profile";

import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
<>

     <PageTitle />

    <Routes>

      <Route path="/" element={<MainLayout />}>
        {/* Public pages */}
        <Route index element={<Home />} />

        {/* Restricted: login/signup only accessible if NOT logged in */}
        <Route element={<RestrictedRoute />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Protected Profile Page */}
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
