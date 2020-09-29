import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const cookies = new Cookies();

  const handleLogout = async () => {
    const res = await axios.get("/api/logout");
    cookies.remove("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        Home
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/profile" className="nav-link">
              Profile <span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
        {isLoggedIn ? (
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
