
// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="layout">
      {/* Navbar on top */}
      <Navbar />

      {/* Main content */}
      <main className="content">
        <Outlet />
      </main>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
}

export default MainLayout;
