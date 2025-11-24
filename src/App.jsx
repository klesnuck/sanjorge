import { Routes, Route, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-center">
      <nav className="bg-red-900 text-white px-4 py-2 flex gap-4 text-lg ">
        <Link to="/">Inicio</Link>
        <Link to="/servicios">Cotizar</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </div>
  );
}

export default App;
