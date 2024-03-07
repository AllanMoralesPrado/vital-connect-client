import NavBar from "./componentes/NavBar";
import Footer from "./componentes/Footer/footer";
import CicloVital from "./pages/CicloVital/CicloVital";
import Index from "./pages/Index/Index";
import Popup from "./componentes/Popup/Popup";
import Examenes from "./pages/Examenes/Examenes";
import Localizacion from "./pages/Localizacion/Localizacion";
import Popupvacunas from "./componentes/Popupvacunas/Popupvacunas";
import ScrollCentros from "./componentes/ScrollCentros/ScrollCentros";
import Info from "./componentes/Info/Info";
import Vacunas from "./pages/Vacunas/Vacunas";

function App() {
  return (
    <>
      <header className="header">
        <NavBar />
      </header>

      <main className="main">
        {/* <Index /> */}
        {/* <Popup /> */}
        {/* <Vacunas /> */}
        <Examenes />
      </main>

      <Footer />
    </>
  );
}

export default App;
