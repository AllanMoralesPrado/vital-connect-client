import NavBar from "./componentes/NavBar";
import Footer from "./componentes/Footer/footer";
import CicloVital from "./pages/CicloVital/CicloVital";

function App() {
  return (
    <>
      <header className="header">
        <NavBar />
      </header>

      <main className="main">
        <CicloVital />
      </main>

      <Footer />
    </>
  );
}

export default App;
