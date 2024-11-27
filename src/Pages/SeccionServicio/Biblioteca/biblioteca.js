import React from "react";
import "./biblioteca.css";

export default function Biblioteca() {
  return (
    <div className="biblioteca">
      <h2>Biblioteca</h2>
      <div className="biblioteca-texto">
        <h3>La Biblioteca: Memoria de la Humanidad.</h3>
        <p>
          La Biblioteca Pública Central Estatal Francisco Cervantes, tiene como
          finalidad satisfacer, no sólo las necesidades de información de los
          usuarios que acuden a ella, sino también acercar a los niños, jóvenes
          y adultos a descubrir el gusto por la lectura, encontrando en ella una
          forma de entretenimiento y enriquecimiento espiritual e intelectual.
        </p>
        <p>
          La Biblioteca organiza sus materiales (80,000 volúmenes
          aproximadamente) a través de colecciones básicas
        </p>
        <ul>
          <p>
            Colección General: En ésta puedes encontrar información específica
            relacionada con la filosofía, psicología, ciencias sociales,
            idiomas, ciencias puras, tecnología, bellas artes, literatura,
            historia y geografía.
          </p>
          <p>
            Colección de Consulta: El material de ésta colección te sirve para
            resolver dudas específicas y de consulta rápida en materiales como
            enciclopedias, diccionarios, atlas, censos, almanaques, leyes.
          </p>
          <p>
            Colección Infantil: Los diferentes materiales, dirigidos a los
            niños, están ordenados por: libros de estudio (de carácter general),
            libros de consulta (diccionarios, enciclopedias, altas, etc.) y
            libros recreativos; todos los materiales están clasificados del
            mismo modo que las colecciones generales y de consulta, pero con una
            letra I al inicio de su clasificación.
          </p>
          <p>Colección de Publicaciones Periódicas: Revistas muy variadas.</p>
        </ul>
        <p>
          Con la finalidad de que localices de manera fácil y rápida los
          materiales que conforman nuestras colecciones, los libros están
          organizados de acuerdo con la clasificación decimal de Dewey. Este
          sistema de clasificación fue creado en el año de 1875 por Melvil Dewey
          (Estados Unidos 1851-1931) y divide al conocimiento humano en 10
          clases principales:
        </p>
        <ol>
          <li>000 Generalidades</li>
          <li>100 Filosofía y disciplinas afines</li>
          <li>200 Religión</li>
          <li>300 Ciencias sociales</li>
          <li>400 Lenguas</li>
          <li>500 Ciencias puras</li>
          <li>600 Tecnología (Ciencias aplicadas)</li>
          <li>700 Bellas artes</li>
          <li>800 Literatura</li>
          <li>900 Geografía e historia</li>
        </ol>
      </div>
    </div>
  );
}
