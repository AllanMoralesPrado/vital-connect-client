import "./style.css";
import { Link } from "react-router-dom";

function ButtonGroup({ options, serviceName }) {
  const urlService = serviceName === "vacunas" ? "vacunas" : "examenes";
  return (
    <>
      <div className="container-button-group">
        <h2>¿Qué {serviceName} me corresponden?</h2>
        <nav>
          <ul>
            {options.map((option) => (
              <Link
                to={`/${urlService}/${option.urlTitle}`}
                style={{ textDecoration: "none", color: "#fff" }}
                key={option.id}
              >
                <li key={option.id}>{option.content}</li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default ButtonGroup;
