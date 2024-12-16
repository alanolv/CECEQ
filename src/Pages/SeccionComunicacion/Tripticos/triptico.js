import React from "react";
import "./tripticos.css";

export default function Triptico() {
  return (
    <div className="triptico">
      <h2>Triptico</h2>
      <div className="triptico-tabla">
        {/* Direccion general */}
        <div className="triptico-tabla-titulo">
          <p>2024</p>
        </div>
        <div className="triptico-tabla-contenido">
          <div className="triptico-tabla-contenido-uno">
            <p>Mes</p>
          </div>
          <div className="triptico-tabla-contenido-dos">
            <p>Evento</p>
          </div>
          <div className="triptico-tabla-contenido-tres">
            <p className="triptico-texto-marcado">Ruta de acceso</p>
          </div>
        </div>

        
        <div className="triptico-tabla-contenido">
          <div className="triptico-tabla-contenido-uno">
            <p>Mayo</p>
          </div>
          <div className="triptico-tabla-contenido-dos">
            <p>
            Talleres y cursos del Centro Educativo y Cultural "Gómez Morin"
            </p>
          </div>
          <div className="triptico-tabla-contenido-tres">
            <a
              href="http://gomezmorin.queretaro.gob.mx/assets/triptico.pdf"
              className="triptico-vinculo"
            >
              Triptico mayo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}