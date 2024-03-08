import "./style.css";
import React, { useState } from "react";
import ScrollList from "../ScrollList/ScrollList";

function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button onClick={togglePopup}>Abrir Pop-up</button>
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
              <h2>Centro de salud familiar La Florida</h2>
              <p>
                Cesfam<br></br>Av. La Florida 6015 81728361, La Florida<br></br>
                Region Metropolitana<br></br>Teléfono: (2)24362527
              </p>
              <select name="servicio" id="servicioId">
                <option value="">Servicio</option>
                <option value="1">Vacuna</option>
                <option value="2">Examen</option>
              </select>
              <button type="submit">Buscar</button>
            </div>
            <div className="popup-scrolllist">
              <ScrollList />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
