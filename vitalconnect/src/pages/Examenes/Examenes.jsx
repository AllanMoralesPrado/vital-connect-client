import React from "react";
import "./style.css";
import imgExamen from "./imgExamenes.png";

function Examenes() {
  return (
    <>
      <div>
        <h1>Examenes Niñez</h1>
        <h2>0-11 años</h2>
      </div>
      <div className="body">
        <div className="select-button">
          <select name="sexo" className="select">
            <option value="">sexo</option>
            <option value="1">Mujer</option>
            <option value="2">Hombre</option>
          </select>
          <button type="submit" className="button">
            Buscar
          </button>
        </div>
        <div className="imagen">
          <img src={imgExamen} alt="Niñez" style={{ width: "380px" }} />
        </div>
      </div>
    </>
  );
}

export default Examenes;
