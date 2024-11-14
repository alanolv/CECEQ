    import React from "react";
import "./bienvenida.css";

export default function Bienvenida() {
  return (
    <div className="bienvenida">
      <h2>Bienvenida</h2>
      <p>
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y
        archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
        las industrias desde el año 1500, cuando un impresor (N. del T. persona
        que se dedica a la imprenta) desconocido usó una galería de textos y los
        mezcló de tal manera que logró hacer un libro de textos especimen. No
        sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno
        en documentos electrónicos, quedando esencialmente igual al original.
        Fue popularizado en los 60s con la creación de las hojas "Letraset", las
        cuales contenian pasajes de Lorem Ipsum, y más recientemente con
        software de autoedición, como por ejemplo Aldus PageMaker, el cual
        incluye versiones de Lorem Ipsum.
      </p>
      <div className="image-1">
        <img
          src="https://www.diariodequeretaro.com.mx/incoming/uu1met-pretenden_cmyk.jpeg/ALTERNATES/LANDSCAPE_400/PRETENDEN_CMYK.jpeg"
          alt="Entrada Gomez Morin"
        />
      </div>
    </div>
  );
}
