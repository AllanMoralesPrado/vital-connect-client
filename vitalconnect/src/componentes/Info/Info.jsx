import axios from "axios";
import React, { useState, useEffect } from "react";

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
      {data.map((vacuna) => (
        <div key={vacuna.vacunaId}>
          <h3>{vacuna.vacunaNombre}</h3>
          <p>{vacuna.vacunaDescripcion}</p>
        </div>
      ))}
    </>
  );
};

export default Info;
