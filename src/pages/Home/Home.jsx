


// src/pages/Home/Home.jsx
import "./Home.css";
import { Link } from "react-router-dom";

import routerImg from "../../assets/router.jpg";

function Home() {
  return (
    <section className="home">
      <div className="home-container">
        {/* Left Content */}
        <div className="home-text">
          <h1><span>React Routes</span></h1>
          <p>
            Build modern web apps with smooth authentication and protected
            routes. This demo shows you a clean way to handle login, signup, and
            private pages in React 
          </p>

          <div className="home-buttons">
            <Link to="/signup" className="btn btn-primary">Get Started</Link>
            <Link to="/login" className="btn btn-secondary">Login</Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="home-image">
          <img src= {routerImg} alt="hero" />
        </div>
      </div>
    </section>
  );
}

export default Home;
