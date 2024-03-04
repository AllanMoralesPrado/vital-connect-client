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
        <img src={logoProject} alt="Vital Connect" />
        <div className="searchBar">
          <form>
            <input type="text" name="search" id="search" size="15" />
            <button>
              <img src={svgSearch} alt="" />
            </button>
          </form>
        </div>
      </div>
      <div className="nav segundoNavbar">
        <ul>
          <li>
            <a>
              <span>Exámenes</span>
              <img src={svgVaccine} alt="" /> <img src={downArrow} alt="" />
            </a>
          </li>
          <li>
            <a>
              <span>Vacunas</span>
              <img src={svgExam} alt="" /> <img src={downArrow} alt="" />
            </a>
          </li>
          <li>
            <a>
              <span>Localizador</span>
              <img src={svgMap} alt="" /> <img src={downArrow} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
