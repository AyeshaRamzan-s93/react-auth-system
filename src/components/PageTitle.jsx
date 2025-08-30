
// src/components/PageTitle.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "React Route Demo";
        break;
      case "/login":
        document.title = "Login ";
        break;
      case "/signup":
        document.title = "Signup";
        break;
      case "/profile":
        document.title = "Profile ";
        break;
      default:
        document.title = "React Route Demo";
    }
  }, [location]);

  return null;
}

export default PageTitle;
