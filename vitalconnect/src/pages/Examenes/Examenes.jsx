import React from "react";
import "./style.css";
import imgNinez from "./ninez.webp";

function Examenes() {
  return (
    <>
      <div className="text">
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
          <img src={imgNinez} alt="Niñez" style={{ width: "380px" }} />
        </div>
      </div>
    </>
  );
}

export default Examenes;
