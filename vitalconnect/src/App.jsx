import NavBar from "./componentes/NavBar";
import Footer from "./componentes/Footer/footer";
import CicloVital from "./pages/CicloVital/CicloVital";
import Index from "./pages/Index/Index";

function App() {
  return (
    <>
      <header className="header">
        <NavBar />
      </header>

      <main className="main">
        <CicloVital />
        {/* <Index /> */}
      </main>

      <Footer />
    </>
  );
}

export default App;
