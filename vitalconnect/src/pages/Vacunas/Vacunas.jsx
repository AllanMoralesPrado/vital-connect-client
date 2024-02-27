import React, { useState, useEffect } from "react";
import Info from "../../componentes/Info/Info";

const dataUrl = "http://localhost:8080/api/vacunas";

function Vacunas() {
  return (
    <>
      <Info dataUrl={dataUrl} />
    </>
  );
}

export default Vacunas;
