import NavBar from "./componentes/NavBar";
import Footer from "./componentes/Footer/footer";
import CicloVital from "./pages/CicloVital/CicloVital";
import Index from "./pages/Index/Index";
import ScrollList from "./componentes/ScrollList/ScrollList";
import Popup from "./componentes/Popup/Popup";

function App() {
  return (
    <>
      <header className="header">
        <NavBar />
      </header>

      <main className="main">
        {/* <CicloVital /> */}
        <Index />
        {/* <Popup /> */}
      </main>

      <Footer />
    </>
  );
}

export default App;
