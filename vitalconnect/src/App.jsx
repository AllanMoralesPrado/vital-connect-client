import NavBar from "./componentes/NavBar";
import Footer from "./componentes/Footer/footer";
import CicloVital from "./pages/CicloVital/CicloVital";
import Index from "./pages/Index/Index";
import Popup from "./componentes/Popup/Popup";
import Examenes from "./pages/Examenes/Examenes";
import Localizacion from "./pages/Localizacion/Localizacion";
import Info from "./componentes/Info/Info";

function App() {
  return (
    <>
      <header className="header">
        <NavBar />
      </header>

      <main className="main">
        <Index />
        <Popup />
      </main>

      <Footer />
    </>
  );
}

export default App;
