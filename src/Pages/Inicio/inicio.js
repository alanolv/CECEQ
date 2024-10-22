import React from "react";
import "./inicio.css";
import Carrusel from "../../Components/Carousels/carousels";

export default function Inicio() {
  return (
    <div className="inicio-container">
      <div className="inicio-carrusel">
        <Carrusel />
      </div>
      <div className="inicio-talleres-recomendados">
        <h2 className="inicio-titulo">Talleres Recomendados</h2>
        <p className="inicio-parrafo">
          A continuacion encontraras algunos de muchos talleres que puedes en
          esta institucion
        </p>
        <div className="inicio-talleres">
          <figure class="tarjetas">
            <div class="tarjetas__contenido">
              <div class="tarjetas__elemento">
              <img src="http://gomezmorin.queretaro.gob.mx/images/domingo235x377.jpg?crc=4270845572" alt="taller 1"/>
              </div>
              <div class="tarjetas__elemento">
              <img src="http://gomezmorin.queretaro.gob.mx/images/solidwork232x373.jpg?crc=4117728260"  alt="taller 2"/>
              </div>
              <div class="tarjetas__elemento">
              <img src="http://gomezmorin.queretaro.gob.mx/images/ciclo%20de%20cine235x377.jpg?crc=3894128011"  alt="taller 3"/>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
}
