import React from "react";
import "./style.css";
import vacunaImg from "./vacuna-img.jpg";
import ScrollList from "../../componentes/ScrollList/ScrollList";

function Vacunas() {
  return (
    <>
      <div>
        <h1 className="vacunas-page-h1">Vacunas adolecencia</h1>
        <h2 className="vacunas-page-h2">12 - 18 años</h2>
      </div>
      <div className="vacunas-page-body">
        <div className="vacunas-page-img">
          <img src={vacunaImg} alt="Vacuna-img" style={{ width: "100%" }} />
        </div>
        <div className="vacunas-page-filter">
          <select name="sexo" className="vacunas-page-select">
            <option value="">sexo</option>
            <option value="1">Mujer</option>
            <option value="2">Hombre</option>
          </select>
          <button type="submit" className="vacunas-page-button">
            Buscar
          </button>
          <ScrollList />
        </div>
      </div>
    </>
  );
}

export default Vacunas;
