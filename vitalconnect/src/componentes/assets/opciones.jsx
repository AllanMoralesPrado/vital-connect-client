import React from "react";
import "./style.css";
import imgNinez from "./ninez.webp";
import imgAdolescencia from "./adolescencia.webp";
import imgAdultez from "./adultez.webp";
import imgAdultoMayor from "./adulto_mayor.webp";

const optionsCicloVital = [
  {
    id: 1,
    title: "Niñez",
    urlTitle: "ninez",
    age: "0 a 11 años",
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
    title: "Adolescencia",
    urlTitle: "adolescencia",
    age: "12 a 18 años",
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
    title: "Adultez",
    urlTitle: "adultez",
    age: "18 a 59 años",
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
    title: "Adulto Mayor",
    urlTitle: "adultomayor",
    age: "más de 60 años (mujeres) o 65 años (hombres)",
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

export { optionsCicloVital };
