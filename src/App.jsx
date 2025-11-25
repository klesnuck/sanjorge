import { Routes, Route, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import logo from "./assets/logg.png";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-center">

      <nav className="bg-blue-950 text-white px-4 py-2 flex gap-4 items-center text-lg justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo San Jorge" className="h-12" />
        </Link>
        <div className="flex gap-4">
          <Link to="/">Inicio</Link>  
          <Link to="/servicios">Cotizar</Link>
          <Link to="/nosotoros">Nosotros</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </div>
  );
}

export default App;
