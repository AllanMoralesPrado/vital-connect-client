import NavBar from "./componentes/NavBar";
import Vacunas from "./pages/Vacunas/Vacunas";
import Body from "./componentes/Body";
import Footer from "./componentes/Footer/footer";
function App() {
  return (
    <>
      <header className="header">
        <NavBar />
      </header>

      <main className="main">
        <Body />
      </main>

      <Footer />
    </>
  );
}

export default App;
