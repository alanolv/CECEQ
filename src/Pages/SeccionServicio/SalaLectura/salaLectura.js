import React from "react";
import "./salaLectura.css";

export default function SalaLectura() {
  return (
    <div className="sala-lectura">
      <h2>SALA DE LECTURA Y LUDOTECA</h2>
      <div className="sala-lectura-texto">
        <p className="sala-lectura-texto-marcado">SALA DE LECTURA</p>
        <p>
          La intención es acercar a los niños de manera afectiva a la imagen, la
          palabra y las artes; es donde los lazos emotivos se fortalecen para
          dar pie a la lectura e investigación permanentes. Quienes acompañan a
          los niños descubren en esta biblioteca un acervo adecuado para ellos,
          disfrutan descubrir la magia de la literatura infantil en el espacio
          del asombro, la risa y la emoción para generar aprendizajes.
        </p>
        <p>
          Lo antes mencionado, favorece su desarrollo como lectores y les
          permitirá aprender a decodificar el mundo que les rodea y además a
          desarrollar el gusto estético que les acompañará de por vida. La
          literatura proporciona nutrientes afectivos para la psiquis y así,
          enriquecer las posibilidades de comunicación verbal y no verbal.
        </p>
        <hr />
        <p className="sala-lectura-texto-marcado">LUDOTECA</p>
        <p>
          Pensada para que los niños disfruten de los juegos en donde se
          pretende promover y estimular su desarrollo físico, socio afectivo y
          cognoscitivo. Se contribuye a fortalecer actitudes como: autonomía,
          confianza, convivencia con sus iguales, respeto, escucha, tolerancia
          para aprender a solucionar problemas, así como, experimentar con
          diversos elementos y recursos de su entorno.
        </p>
        <p>La Ludoteca ofrece:</p>
        <ol>
          <li>
            Los padres de familia pueden tomar juegos de los estantes para
            interactuar con sus hijos.
          </li>
          <li>
            Padres y niños pueden integrarse en los horarios de las actividades
            programadas por los talleristas.
          </li>
          <li>Actividades especiales a visitas guiadas.</li>
        </ol>
      </div>
    </div>
  );
}
