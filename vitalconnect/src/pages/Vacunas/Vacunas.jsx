import React, { useState, useEffect } from "react";
import "./style.css";
import vacunaImg from "./vacuna-img.jpg";

function Vacunas() {
  return (
    <>
      <div>
        <h1>Vacunas adolecencia</h1>
        <h2>12 - 18 años</h2>
      </div>
      <div className="body">
        <div className="imagen">
          <img src={vacunaImg} alt="Vacuna-img" style={{ width: "380px" }} />
        </div>
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
      </div>
    </>
  );
}

export default Vacunas;
