import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="main-title">Welcome to the Digital Art Gallery</h1>
        <p className="description">
          Explore a vast collection of digital art from talented artists around
          the world.
        </p>
        <NavLink to="/gallery" className="get-started-button">
          Visit the Gallery
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
