import React from "react";
import "./style.css";
import vacunaImg from "../assets/vacuna-img.jpg";
import ScrollList from "../ScrollList/ScrollList";

function Selector() {
  return (
    <>
      <div className="selector-container">
        <div className="selector-div">
          <h1 className="selector-h1">Vacunas adolecencia</h1>
          <h2 className="selector-h2">12 - 18 años</h2>
        </div>
        <div className="selector-body">
          <div className="imagen">
            <img src={vacunaImg} alt="Vacuna-img" style={{ width: "100%" }} />
          </div>
          <div className="selector-filter">
            <div className="selector-query">
              <select name="sexo" className="selector-select">
                <option value="">sexo</option>
                <option value="1">Mujer</option>
                <option value="2">Hombre</option>
              </select>
              <button type="submit" className="selector-button">
                Buscar
              </button>
            </div>
            <ScrollList />
          </div>
        </div>
      </div>
    </>
  );
}

export default Selector;
