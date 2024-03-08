import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import imgExamen from "./imgExamenes.png";
import ScrollList from "../../componentes/ScrollList/ScrollList";
import { optionsCicloVital } from "../../componentes/assets/opciones";

function Examenes() {
  const [cicloVital, setCicloVital] = useState(null);

  const { ciclovital } = useParams();

  useEffect(() => {
    const datos = optionsCicloVital.find(
      (option) => option.urlTitle === ciclovital
    );
    setCicloVital(datos);
  }, []);

  // Verificar si cicloVital es null antes de acceder a sus propiedades
  if (cicloVital === null) {
    return <div>Loading...</div>; // Otra opción es mostrar un spinner de carga
  }

  return (
    <>
      <div>
        <h1 className="examenes-page-h1">Examenes {cicloVital.title}</h1>
        <h2 className="examenes-page-h2">{cicloVital.age}</h2>
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
