import NavBar from "./componentes/NavBar";
import Footer from "./componentes/Footer/footer";
import CicloVital from "./pages/CicloVital/CicloVital";
import Index from "./pages/Index/Index";
import Popup from "./componentes/Popup/Popup";
import Examenes from "./pages/Examenes/Examenes";
import Localizacion from "./pages/Localizacion/Localizacion";
<<<<<<< HEAD
import ScrollList from "./componentes/ScrollList/ScrollList";
=======
import Info from "./componentes/Info/Info";
>>>>>>> 21cf5862428e955274330c66b433ba118481cb18

function App() {
  return (
    <>
      <header className="header">
        <NavBar />
      </header>

      <main className="main">
<<<<<<< HEAD
        {/* <CicloVital /> */}
        {/* {/* <CicloVital /> */}
        {/* <Index /> */}
        {/* <Popup /> */}
        <ScrollList />
        {/* <Popup /> */}
        {/* <Examenes /> */}
        {/* <Localizacion /> */}
=======
        <Index />
        <Popup />
>>>>>>> 21cf5862428e955274330c66b433ba118481cb18
      </main>

      <Footer />
    </>
  );
}

export default App;
