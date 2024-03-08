import React, { useState } from "react";
import "./style.css";
import ScrollCentros from "../ScrollCentros/ScrollCentros";

function Popupvacunas() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup}>Abrir Popup</button>
      {isOpen && (
        <div className="popup-overlay" role="button" onClick={togglePopup}>
          <div
            className="popup"
            role="button"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="cerrar" onClick={togglePopup}>
              &times;
            </button>
            <div className="popup-content">
              <h2>BCG</h2>
              <p>
                <strong>¿Para quién?:</strong> Recién Nacido<br></br>
                <strong>Sexo:</strong> Mujer - Hombre<br></br>
                <strong>Protege contra:</strong> Enfermedades invasoras por M.
                tuberculosis
              </p>
              <div>
                <select name="region" id="regionId">
                  <option value="">Región</option>
                  <option value="1">R1</option>
                  <option value="2">R2</option>
                </select>
              </div>
              <div>
                <select name="comuna" id="comunaId">
                  <option value="">Comuna</option>
                  <option value="1">C1</option>
                  <option value="2">C2</option>
                </select>
              </div>
              <button type="submit">Buscar</button>
            </div>
            <div className="popup-scrolllist">
              <ScrollCentros />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popupvacunas;
