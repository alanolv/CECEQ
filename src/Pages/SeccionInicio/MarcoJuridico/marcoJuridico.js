import React from "react";
import "./marcoJuridico.css";
import { NavLink } from "react-router-dom";

export default function MarcoJuridico() {
  return (
    <div className="marco">
      <h2>MARCO JURÍDICO</h2>
      <div className="atencion-tabla">
        {/* Horarios de atencion */}
        <div className="directorio-tabla">
          <div className="atencion-tabla-titulo">
            <p>Leyes y Decretos</p>
          </div>
          <div className="directorio-tabla-contenido">
            <div className="directorio-tabla-contenido-uno">
              <NavLink to="http://gomezmorin.queretaro.gob.mx/assets/lgb.pdf"className="marco-link">
              <p>Ley General de Bibliotecas.</p>
              </NavLink>
            </div>
            <div className="directorio-tabla-contenido-dos">
            <NavLink to="http://gomezmorin.queretaro.gob.mx/assets/primerdecretocreacion.pdf"className="marco-link">
              <p>
                Decreto por el que se crea el Centro Educativo y Cultural del
                Estado de Querétaro
              </p>
              </NavLink>
            </div>
          </div>
          <div className="directorio-tabla-contenido">
            <div className="directorio-tabla-contenido-uno">
            <NavLink to="http://gomezmorin.queretaro.gob.mx/assets/segundodecretocreacion.pdf"className="marco-link">
              <p>
                Decreto que reforma y deroga diversas disposiciones del Decreto
                por el que se crea el Centro Educativo y Cultural del Estado de
                Querétaro (CECEQ) “Manuel Gómez Morín”
              </p>
              </NavLink>
            </div>
            <div className="directorio-tabla-contenido-dos">
            <NavLink to="http://gomezmorin.queretaro.gob.mx/assets/reglamento-interior.pdf" className="marco-link">
              <p>
                Reglamento interior del Centro Educativo y Cultural del Estado
                de Querétaro (CECEQ) “Manuel Gómez Morín”
              </p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
