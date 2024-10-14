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
        </NavLink>
        <NavLink to="/Servicios" className="nav-link">
          Servicios
        </NavLink>
        <NavLink to="/Comunicación" className="nav-link">
          Comunicación
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
