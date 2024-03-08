import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import vacunaImg from "./vacuna-img.jpg";
import ScrollList from "../../componentes/ScrollList/ScrollList";
import { optionsCicloVital } from "../../componentes/assets/opciones";

function Vacunas() {
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
        <h1 className="vacunas-page-h1">Vacunas {cicloVital.title}</h1>
        <h2 className="vacunas-page-h2">{cicloVital.age}</h2>
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
