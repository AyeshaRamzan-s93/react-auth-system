
// src/components/Navbar.jsx


import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      
      <div className="nav-container">
     
        <Link to="/" className="logo">React Routes Demo</Link>

        {/* Links */}
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
