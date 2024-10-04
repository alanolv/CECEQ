import React, { useState } from "react";
import "./navBar.css";
import arrowLineUp from "../sources/svg/arrowLineUp.svg";
import arrowLineDown from "../sources/svg/arrowLineDown.svg";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [isInicioHovered, setIsInicioHovered] = useState(false);
  const [isServicioHovered, setIsServicioHovered] = useState(false);
  const [isComunicacionHovered, setIsComunicacionHovered] = useState(false);
  return (
    <div className="navBar">
      <div className="logo">
        <img
          src="http://gomezmorin.queretaro.gob.mx/images/logo_gm.png?crc=3863642309"
          alt="Logo"
          className="img-logo"
        />
      </div>
      <div className="menu" onMouseEnter={()=>{setIsInicioHovered(true)}} onMouseLeave={()=>{setIsInicioHovered(false)}}>
        <NavLink to="/" className="nav-inicio" onMouseEnter={()=>setIsInicioHovered(true)} onMouseLeave={()=>setIsInicioHovered(false)}>
          Inicio <img src={isInicioHovered ? arrowLineDown : arrowLineUp} alt="arrow line" width="20px" />
          <div className={`dropDownMenu-inicio ${isInicioHovered ? 'show' : ''}`}>
            <h2>Bienvenido a CECEQ</h2>
            <NavLink to="/Bienvenida">Bienvenida </NavLink>
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
