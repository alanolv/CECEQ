import React from "react";
import './sitiosInteresCard.css';
import { NavLink } from "react-router-dom";

export default function SitiosInteresCard({ sitio }) {
    return(
        <>
        <p className="sitiosInteres-texto-marcado ">
            {sitio.nombre}
        </p>
        <div className="sitiosInteres-tarjeta">
          <div className="sitiosInteres-tarjeta-imagen">
            <img src={sitio.img}  />
          </div>
          <div className="sitiosInteres-tarjeta-texto">
            <p>
                {sitio.descripcion}
            </p>
            <NavLink to={sitio.url}>
              <button type="button" className="sitiosInteres-button">
                Visitar Sitio
              </button>
            </NavLink>
          </div>
        </div>
        </>
    )}
