import React from "react";
import "./style.css";
import mapa from "./map.jpg";
import ScrollList from "../../componentes/ScrollList/ScrollList";

function Localizacion() {
  return (
    <>
      <div className="body">
        <div className="select-button">
          <h1>Centros médicos</h1>
          <div className="selectores">
            <select name="Regiones" className="select-1">
              <option value="">Región</option>
              <option value="1">Aysén</option>
              <option value="2">Antofagasta</option>
              <option value="3">Arica y Parinacota</option>
              <option value="4">Atacama</option>
              <option value="5">Biobío</option>
              <option value="6">Coquimbo</option>
              <option value="7">La Araucanía</option>
              <option value="8">O'Higgins</option>
              <option value="9">Los Lagos</option>
              <option value="10">Los Ríos</option>
              <option value="11">Magallanes</option>
              <option value="12">Maule</option>
              <option value="13">Región Metropolitana de Santiago</option>
              <option value="14">Tarapacá</option>
              <option value="15">Valparaíso</option>
              <option value="16">Ñuble</option>
            </select>
            <select name="Comunas" className="select-2">
              <option value="">Comuna</option>
              <option value="1">Cerro Navia</option>
              <option value="2">Quinta Normal</option>
            </select>
            <select name="Tipos-de-establecimientos" className="select-3">
              <option value="">Tipo de centro</option>
              <option value="1">CESFAM</option>
              <option value="2">SUR</option>
            </select>
          </div>
          <button type="button" className="button">
            Buscar
          </button>
          <ScrollList />
        </div>
        <div className="imagen">
          <img src={mapa} alt="Niñez" style={{ width: "380px" }} />
        </div>
      </div>
    </>
  );
}

export default Localizacion;
