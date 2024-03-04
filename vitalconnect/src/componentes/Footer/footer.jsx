import React from "react";
import footerLogo from "../assets/logo-y-nombre-blanco.png";
import "./style.css";

function footer() {
  return (
    <footer className="footer-e">
      <img className="footer-logo" src={footerLogo} alt="vital connect" />
      <p className="footer-paragraph">2024</p>
    </footer>
  );
}

export default footer;
