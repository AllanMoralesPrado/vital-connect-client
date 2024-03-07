import axios from "axios";
import React, { useState, useEffect } from "react";
import "./style.css";

const Info = ({ dataUrl }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(dataUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {/* {data.map((content) => (
        <div key={content.vacunaId}>
          <h3>{content.vacunaNombre}</h3>
          <p>{content.vacunaDescripcion}</p>
        </div>
      ))} */}
      <div
        className="info-shape"
        key={data.vacunaId ? data.vacunaId : data.examenId}
      >
        <h2 className="info-daily">
          {data.vacunaId ? "Vacuna" : "Examen"} del día
        </h2>
        <div className="info-details">
          <h3>
            {data.vacunaNombre ? data.vacunaNombre : data.testDePesquisaNombre}
          </h3>
          <p>
            {data.vacunaDescripcion
              ? data.vacunaDescripcion
              : data.examenDescripcion}
          </p>
        </div>

        <div className="info-button">
          <button type="button">
            ¿Me corresponde esta {data.vacunaId ? "Vacuna" : "Examen"}?
          </button>
        </div>
      </div>
    </>
  );
};

export default Info;
