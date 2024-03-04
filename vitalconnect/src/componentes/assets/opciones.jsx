import React from "react";
import "./style.css";
import imgNinez from "./ninez.webp";
import imgAdolescencia from "./adolescencia.webp";
import imgAdultez from "./adultez.webp";
import imgAdultoMayor from "./adulto_mayor.webp";

const optionsCicloVital = [
  {
    id: 1,
    content: (
      <div className="options-ciclo-vital">
        <img src={imgNinez} alt="Niñez" style={{ width: "100%" }} />
        <div className="container">
          <h4>NIÑEZ</h4>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="options-ciclo-vital">
        <img
          src={imgAdolescencia}
          alt="Adolescencia"
          style={{ width: "100%" }}
        />
        <div className="container">
          <h4>ADOLESCENCIA</h4>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="options-ciclo-vital">
        <img src={imgAdultez} alt="Adultez" style={{ width: "100%" }} />
        <div className="container">
          <h4>ADULTEZ</h4>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div className="options-ciclo-vital">
        <img
          src={imgAdultoMayor}
          alt="Adulto Mayor"
          style={{ width: "100%" }}
        />
        <div className="container">
          <h4>ADULTO MAYOR</h4>
        </div>
      </div>
    ),
  },
];

const optionsMenu = [
  { id: 1, content: <span className="options-menu">VACUNAS POR EDAD</span> },
  { id: 2, content: <span className="options-menu">EXÁMENES POR EDAD</span> },
  {
    id: 3,
    content: <span className="options-menu">MAPA DE CENTROS MÉDICOS</span>,
  },
];

export { optionsCicloVital, optionsMenu };
