import React from "react";
import "./navBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="logo">
        <img
          src="http://gomezmorin.queretaro.gob.mx/images/logo_gm.png?crc=3863642309"
          alt="Logo"
          className="img-logo"
        />
      </div>
      <div className="menu">
        <NavLink to="/" className="nav-inicio">
          Inicio
          <div className="dropDownMenu-inicio">
            <NavLink to="/Bienvenida">Bienvenida</NavLink>
            <NavLink to="/Directorio">Directorio</NavLink>
            <NavLink to="/HorarioAtención">Horario de atención</NavLink>
            <NavLink to="/MarcoJuridico">Marco Juridico</NavLink>
            <NavLink to="/Nosotros">Nosotros</NavLink>
          </div>
        </NavLink>
        <NavLink className="nav-servicio">
          Servicios
          <div className="dropDownMenu-servicio">
            <NavLink to="/Biblioteca">Biblioteca publica</NavLink>
            <NavLink to="/CentroComputo">Centro de computo</NavLink>
            <NavLink to="/Talleres">Talleres</NavLink>
            <NavLink to="/Instalaciones">Instalaciones</NavLink>
            <NavLink to="/SitiosInterés">Sitios de interés</NavLink>
            <NavLink to="/Visitas">Visitas</NavLink>
          </div>
        </NavLink>
        <NavLink className="nav-comunicacion">
          Comunicación
          <div className="dropDownMenu-comunicacion">
            <NavLink to="/Boletines">Boletines</NavLink>
            <NavLink to="/Tríptico">Tríptico</NavLink>
            <NavLink to="/Ejeradio">Eje 5 radio</NavLink>
          </div>
        </NavLink>
        <NavLink to="/Dependencias" className="nav-dependencias">
          Dependencias
        </NavLink>
        <NavLink to="" className="nav-transparencia">
          Transparencia
        </NavLink>
      </div>
    </div>
  );
}
