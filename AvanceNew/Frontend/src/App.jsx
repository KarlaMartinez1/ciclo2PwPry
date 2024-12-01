import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormBuscar from "./pages/userPage/FormBuscar";
import GaleriaBuscar from "./pages/userPage/GaleriaBuscar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="/buscar-amigo" element={<FormBuscar />} />
        <Route path="/galeria-buscar" element={<GaleriaBuscar/>} />
      </Routes>
    </Router>
  );
}

export default App;
