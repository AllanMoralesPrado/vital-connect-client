import NavBar from "./componentes/NavBar";
import Footer from "./componentes/Footer/footer";
import CicloVital from "./pages/CicloVital/CicloVital";
import Hero from "./pages/Hero/Hero";

function App() {
  return (
    <>
      <header className="header">
        <NavBar />
      </header>

      <main className="main">
        <CicloVital />
        {/* <Hero /> */}
      </main>

      <Footer />
    </>
  );
}

export default App;
