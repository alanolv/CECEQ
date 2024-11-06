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
        
        
      </div>
    </div>
  );
}
