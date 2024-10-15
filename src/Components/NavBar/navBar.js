import React from "react";
import "./navBar.css";
import { NavLink } from "react-router-dom";
import logoM from "../../sources/images/logo_gm.png";
import heraldica from "../../sources/images/heraldica.png";

export default function NavBar() {
  return (
    <div className="navbar-content">
      <div className="navbar-logos">
        <img src={logoM} alt="logo"/>
        <img src={heraldica} alt="logo"/>
      </div>
      <div className="navbar-links">
        <NavLink to="/" className="nav-link">
          Inicio
          <div className="navbar-dropdown" style={{left:"-110%"}}>
            <NavLink to="/Bienvenida">Bienvenida</NavLink>
            <NavLink to="/Directorio">Directorio</NavLink>
            <NavLink to="/HorarioAtención">Horario de atención</NavLink>
            <NavLink to="/MarcoJuridico">Marco Juridico</NavLink>
            <NavLink to="/Nosotros">Nosotros</NavLink>
          </div>
        </NavLink>
        <NavLink to="/Servicios" className="nav-link" >
          Servicios
          <div className="navbar-dropdown" style={{left:"-55%"}}>
            <NavLink to="/Biblioteca">Biblioteca publica</NavLink>
            <NavLink to="/CentroComputo">Centro de computo</NavLink>
            <NavLink to="/Talleres">Talleres</NavLink>
            <NavLink to="/Instalaciones">Instalaciones</NavLink>
            <NavLink to="/SitiosInterés">Sitios de interés</NavLink>
            <NavLink to="/Visitas">Visitas</NavLink>
          </div>
        </NavLink>
        <NavLink to="/Comunicación" className="nav-link">
          Comunicación
          <div className="navbar-dropdown" style={{left:"-10%"}}>
            <NavLink to="/Boletines">Boletines</NavLink>
            <NavLink to="/Tríptico">Tríptico</NavLink>
            <NavLink to="/Ejeradio">Eje 5 radio</NavLink>
          </div>
        </NavLink>
        <NavLink to="/Dependencias" className="nav-link">
          Dependencias
        </NavLink>
        <NavLink to="/Transparencia" className="nav-link">
          Transparencia
        </NavLink>
      </div>
      <div className="navbar-searchbar">

      </div>
    </div>
  );
}
