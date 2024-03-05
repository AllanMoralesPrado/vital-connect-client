import NavBar from "./componentes/NavBar";
import Body from "./componentes/Body";
import Footer from "./componentes/Footer/footer";
import { Routes, Route } from "react-router-dom";
import Examenes from "./pages/Examenes/Examenes";
import Localizacion from "./pages/Localizacion/Localizacion";
import Vacunas from "./pages/Vacunas/Vacunas";

function App() {
  return (
    <>
      <header className="header">
        <NavBar />
      </header>

      <main className="main">
        {/*   <Routes>
          <Route path="/examenes" element={<Examenes />}></Route>
          <Route path="/vacunas" element={<Vacunas />}></Route>
          <Route path="/localizacion" element={<Localizacion />}></Route>
        </Routes> */}
        <Body />
      </main>

      <Footer />
    </>
  );
}

export default App;
