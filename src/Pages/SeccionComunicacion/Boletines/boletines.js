import React from "react";
import "./boletines.css";

export default function Boletines() {
  return (
    <div className="boletines">
      <h2>Boletines</h2>
      <div className="boletines-tabla">
        {/* Direccion general */}
        <div className="boletines-tabla-titulo">
          <p>2024</p>
        </div>
        <div className="boletines-tabla-contenido">
          <div className="boletines-tabla-contenido-uno">
            <p>Mes</p>
          </div>
          <div className="boletines-tabla-contenido-dos">
            <p>Evento</p>
          </div>
          <div className="boletines-tabla-contenido-tres">
            <p className="boletines-texto-marcado">Ruta de acceso</p>
          </div>
        </div>

        <div className="boletines-tabla-contenido">
          <div className="boletines-tabla-contenido-uno">
            <p>Febrero</p>
          </div>
          <div className="boletines-tabla-contenido-dos">
            <p>
              Celebran jóvenes la 3era edición de la Feria Vocacional 2024 en el
              Gómez Morin.
            </p>
          </div>
          <div className="boletines-tabla-contenido-tres">
            <a
              href="https://portal.queretaro.gob.mx/prensa/contenido.aspx?q=vUYGbsxLnljgVT9UZU5Uu4acympR6j0ISLUiMkGejeiyRfiTuNK09g=="
              className="boletines-vinculo"
            >
              Contenido Febrero
            </a>
          </div>
        </div>
        <div className="boletines-tabla-contenido">
          <div className="boletines-tabla-contenido-uno">
            <p>Mayo</p>
          </div>
          <div className="boletines-tabla-contenido-dos">
            <p>
              Tendrá el Gómez Morin actividades por el May the 4th be with you
            </p>
          </div>
          <div className="boletines-tabla-contenido-tres">
            <a
              href="https://portal.queretaro.gob.mx/prensa/contenido.aspx?q=vUYGbsxLnliUiSMt0jz929wBRV2n3fqK7xA+Hux5ww1xtjxdStpcLQ=="
              className="boletines-vinculo"
            >
              Contenido Mayo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
