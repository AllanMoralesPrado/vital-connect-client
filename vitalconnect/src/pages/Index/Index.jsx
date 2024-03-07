import React from "react";
import "./style.css";
import Hero from "../../componentes/Hero/Hero";
import Info from "../../componentes/Info/Info";

const vacunaUrl = `http://localhost:8080/api/vacunas/${
  Math.floor(Math.random() * 17) + 1
}`;
const examenUrl = `http://localhost:8080/api/examenes/${
  Math.floor(Math.random() * 26) + 1
}`;

function Index() {
  return (
    <>
      <Hero />
      <div className="index-container">
        <Info dataUrl={vacunaUrl} />
        <Info dataUrl={examenUrl} />
      </div>
    </>
  );
}

export default Index;
