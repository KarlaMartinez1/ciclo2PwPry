import React from "react";
import "../../styles/userStyles/Header.css";
import logo from '../../assets/logoPawtner.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Pawtner Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/quienes-somos">¿Quiénes somos?</a></li>
          <li><a href="/contacto">Contacto</a></li>
          <li><a href="/galeria">Galería</a></li>
        </ul>
      </nav>
      <div className="user-icon">
        <img src="/icon-user.png" alt="usr" />
      </div>
    </header>
  );
};

export default Header;
