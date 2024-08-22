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
      <div className="features-section">
        <div className="feature-item">
          <h3>Discover Art</h3>
          <p>
            Browse through diverse categories and find art that speaks to you.
          </p>
        </div>
        <div className="feature-item">
          <h3>Meet Artists</h3>
          <p>Connect with artists and explore their creative journey.</p>
        </div>
        <div className="feature-item">
          <h3>Contribute</h3>
          <p>Upload your own digital art and share it with the world.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
