import NavBar from "./componentes/NavBar";
import Footer from "./componentes/Footer/footer";
import CicloVital from "./pages/CicloVital/CicloVital";
import Index from "./pages/Index/Index";
import Popup from "./componentes/Popup/Popup";
import Examenes from "./pages/Examenes/Examenes";
import Localizacion from "./pages/Localizacion/Localizacion";
import ScrollList from "./componentes/ScrollList/ScrollList";
import Vacunas from "./pages/Vacunas/Vacunas";
import Selector from "./componentes/Selector/Selector";
import Modal from "./componentes/Modal/Modal";
import Popupvacunas from "./componentes/Popupvacunas/Popupvacunas";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <header className="header">
        <NavBar />
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route
            path="/vacunas"
            element={<CicloVital serviceName={"vacunas"} />}
          ></Route>
          <Route path="/vacunas/:ciclovital" element={<Vacunas />}></Route>
          <Route
            path="/examenes"
            element={<CicloVital serviceName={"exámenes"} />}
          ></Route>
          <Route path="/examenes/:ciclovital" element={<Examenes />}></Route>
          <Route path="/localizador" element={<Localizacion />}></Route>
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
