import "./style.css";
import { useState } from "react";
import svgIndex from "../assets/home-svgrepo-com.svg";
import svgVaccine from "../assets/syringe-svgrepo-com.svg";
import svgExam from "../assets/checkup-diagnosis-healthcare-svgrepo-com.svg";
import svgMap from "../assets/map-location-svgrepo-com.svg";
import downArrow from "../assets/down-arrow-5-svgrepo-com.svg";
import logoProject from "../assets/logo-color.png";
import svgSearch from "../assets/search-alt-1-svgrepo-com.svg";
import { Link } from "react-router-dom";
function NavBar() {
  const [menu, setMenu] = useState(null);

  return (
    <nav>
      <div className="nav primerNavbar">
        <div className="img"></div>
      </div>
      <div className="nav segundoNavbar">
        <ul>
          <li onClick={() => setMenu("index")}>
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              <span>Inicio</span>
              <img src={svgIndex} alt="Inicio" />
              {menu === "index" ? <hr /> : <></>}
            </Link>
          </li>
          <li onClick={() => setMenu("examenes")}>
            <Link
              to="/examenes"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <span>Exámenes</span>
              <img src={svgExam} alt="Exámenes" />
              {menu === "examenes" ? <hr /> : <></>}
            </Link>
          </li>
          <li onClick={() => setMenu("vacunas")}>
            <Link
              to="/vacunas"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <span>Vacunas</span>
              <img src={svgVaccine} alt="Vacunas" />
              {menu === "vacunas" ? <hr /> : <></>}
            </Link>
          </li>
          <li onClick={() => setMenu("localizador")}>
            <Link
              to="/localizador"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <span>Localizador</span>
              <img src={svgMap} alt="" />
              {menu === "localizador" ? <hr /> : <></>}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
