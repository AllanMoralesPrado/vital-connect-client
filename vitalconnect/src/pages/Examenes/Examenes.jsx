import React from "react";
import "./style.css";
import imgExamen from "./imgExamenes.png";
import ScrollList from "../../componentes/ScrollList/ScrollList";

function Examenes() {
  return (
    <>
      <div>
        <h1 className="examenes-page-h1">Examenes Niñez</h1>
        <h2 className="examenes-page-h2">0-11 años</h2>
      </div>
      <div className="examenes-page-body">
        <div className="examenes-page-filter">
          <select name="sexo" className="examenes-page-select">
            <option value="">sexo</option>
            <option value="1">Mujer</option>
            <option value="2">Hombre</option>
          </select>
          <button type="submit" className="examenes-page-button">
            Buscar
          </button>
          <ScrollList />
        </div>
        <div className="examenes-page-img">
          <img src={imgExamen} alt="Niñez" style={{ width: "100%" }} />
        </div>
      </div>
    </>
  );
}

export default Examenes;
