
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  // Example: get user info from localStorage 
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="profile-container">
        <div className="profile-card">
          <h2>You are not logged in </h2>
          <button className="btn-primary" onClick={() => navigate("/login")}>
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src={`https://ui-avatars.com/api/?name=${user.name}`}
          alt="Profile"
          className="profile-avatar"
        />
        <h2>Hello, {user.name} </h2>
        <p>Email: {user.email}</p>
        <button className="btn-primary" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
