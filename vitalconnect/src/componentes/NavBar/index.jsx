import "./style.css";
import svgVaccine from "../assets/syringe-svgrepo-com.svg";
import svgExam from "../assets/checkup-diagnosis-healthcare-svgrepo-com.svg";
import svgMap from "../assets/map-location-svgrepo-com.svg";
import downArrow from "../assets/down-arrow-5-svgrepo-com.svg";
import logoProject from "../assets/logo-color.png";
import svgSearch from "../assets/search-alt-1-svgrepo-com.svg";
function NavBar() {
  return (
    <nav>
      <div className="nav primerNavbar">
        <div className="img"></div>
      </div>
      <div className="nav segundoNavbar">
        <ul>
          <li>
            <span>Exámenes</span>
            <img src={svgVaccine} alt="" />
          </li>
          <li>
            <span>Vacunas</span>
            <img src={svgExam} alt="" />
          </li>
          <li>
            <span>Localizador</span>
            <img src={svgMap} alt="" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
