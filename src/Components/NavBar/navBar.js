import React  from "react";
import "./navBar.css";
import { NavLink } from "react-router-dom";
import logoM from "../../sources/images/logo_gm.png";
import heraldica from "../../sources/images/heraldica.png";
import arrowLineUp from "../../sources/svg/arrowLineUp.svg";
import arrowLineDown from "../../sources/svg/arrowLineDown.svg";
import { useState } from "react";

export default function NavBar() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };
  return (
    <div className="navbar-content">
      <div className="navbar-logos">
        <img src={logoM} alt="logo"/>
        <img src={heraldica} alt="logo"/>
      </div>
      <div className="navbar-links" >
        <NavLink to="/" className="nav-link" onMouseEnter={() => handleMouseEnter("inicio")} onMouseLeave={handleMouseLeave}>
          Inicio <img src={ hoveredLink === "inicio" ? arrowLineDown : arrowLineUp} alt="arrow" width={10}/>
          <div className="navbar-dropdown" style={{left:"-82%"}}>
            <NavLink to="/Bienvenida">Bienvenida</NavLink>
            <NavLink to="/Directorio">Directorio</NavLink>
            <NavLink to="/HorarioAtención">Horario de atención</NavLink>
            <NavLink to="/MarcoJuridico">Marco Juridico</NavLink>
            <NavLink to="/Nosotros">Nosotros</NavLink>
          </div>
        </NavLink>
        <NavLink to="/Servicios" className="nav-link" onMouseEnter={() => handleMouseEnter("servicio")} onMouseLeave={handleMouseLeave}>
          Servicios <img src={ hoveredLink === "servicio" ? arrowLineDown : arrowLineUp} alt="arrow" width={10}/>
          <div className="navbar-dropdown" style={{left:"-40%"}}>
            <NavLink to="/Biblioteca">Biblioteca publica</NavLink>
            <NavLink to="/CentroComputo">Centro de computo</NavLink>
            <NavLink to="/Talleres">Talleres</NavLink>
            <NavLink to="/Instalaciones">Instalaciones</NavLink>
            <NavLink to="/SitiosInterés">Sitios de interés</NavLink>
            <NavLink to="/Visitas">Visitas</NavLink>
          </div>
        </NavLink>
        <NavLink to="/Comunicación" className="nav-link" onMouseEnter={() => handleMouseEnter("comunicacion")} onMouseLeave={handleMouseLeave}>
          Comunicación <img src={ hoveredLink === "comunicacion" ? arrowLineDown : arrowLineUp} alt="arrow" width={10}/>
          <div className="navbar-dropdown" style={{left:"-5%"}}>
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
