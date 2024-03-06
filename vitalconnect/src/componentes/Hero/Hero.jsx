import React from "react";
import "./style.css";

function Hero() {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1 sx={{ fontSize: "50px" }}>I am John Doe</h1>
        <p>And I'm a Photographer</p>
        <button>Hire me</button>
      </div>
    </div>
  );
}

export default Hero;
