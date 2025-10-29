import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const handleHomeClick = () => {
    window.location.href = "/"; // refresh the page
  };

  return (
    <nav className="navbar">
      <h1 onClick={handleHomeClick}>📚 Book Finder</h1>

      <div className="nav-links">
        <button className="nav-btn" onClick={handleHomeClick}>
          Home
        </button>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default NavBar;
