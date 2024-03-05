import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <>
      <div className="hero-image">
        <div className="hero-text">
          <h1 sx={{ fontSize: "50px" }}>I am John Doe</h1>
          <p>And I'm a Photographer</p>
          <button>Hire me</button>
        </div>
      </div>

      <p>Page Content..</p>
    </>
  );
}

export default Hero;
