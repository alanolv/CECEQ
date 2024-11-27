import React from "react";
import "./bienvenida.css";

export default function Bienvenida() {
  return (
    <div className="bienvenida">
      <h2>Bienvenida</h2>
      <div className="bienvenida-texto">
        <p>
          El Centro Educativo y Cultural del Estado de Querétaro (CECEQ) “Manuel
          Gómez Morin”,  les recibe con mucho gusto. Este emblemático recinto de
          la ciudad de Querétaro, cuenta con múltiples espacios abiertos al
          público donde se llevan a cabo diversos talleres, exposiciones,
          cursos, conferencias, conciertos, simposios, congresos, entre otros
          eventos; en donde bebés, niños, jóvenes, adultos y adultos mayores
          pueden no sólo conocer y disfrutar diversas manifestaciones artísticas
          y culturales, sino también elevar su nivel educativo para lograr una
          mejor calidad de vida.
        </p>
        <div className="image-1">
          <img
            src="https://www.diariodequeretaro.com.mx/incoming/uu1met-pretenden_cmyk.jpeg/ALTERNATES/LANDSCAPE_400/PRETENDEN_CMYK.jpeg"
            alt="Entrada Gomez Morin"
          />
        </div>
      </div>
    </div>
  );
}
