import React from "react";
import "./bibliotecaDigital.css";
export default function BibliotecaDigital() {
  return (
    <div className="biblioteca-digital">
      <h2>Biblioteca Digital</h2>
      <div className="biblioteca-digital-texto">
        <p>
          El catálogo de libros es una guía que te permite conocer autores,
          títulos y temas de las obras existentes en la biblioteca; es un método
          muy ágil para la búsqueda de información bibliográfica y de manera
          específica. Asimismo, te ayuda a ubicar los libros en la estantería.
          El catálogo electrónico lo puedes encontrar instalado, para tu
          comodidad, en 4 computadoras distribuidas en los diferentes espacios
          de la biblioteca (Plantas Alta y Baja así como en el Área Infantil).
        </p>
        <a href="http://18.191.66.55" className="biblioteca-digital-vinculo">
          CATÁLOGO DIGITAL CON USUARIO Y CONTRASEÑA DE BIBLIOTECA CENTRAL
          ESTATAL FRANCISCO CERVANTES.
        </a>
        <a
          href="https://bcefcervantes.bibliotecasdigitales.com/auth/login"
          className="biblioteca-digital-vinculo"
        >
          BIBLIOTECA DIGITAL CON USUARIO Y CONTRASEÑA
        </a>
      </div>
    </div>
  );
}
