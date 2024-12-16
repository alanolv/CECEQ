import React from "react";
import "./pendulo.css";

export default function Pendulo() {
  return (
    <div className="pendulo">
      <h2>PLANETARIO Y SALA DE INMERSIÓN "El PÉNDULO"</h2>
      <div className="pendulo-texto">
        <p>
          El péndulo más importante e interesante en el mundo por su significado
          en la historia de la ciencia se encuentran en el Panteón de París,
          Francia, pues ahí fue donde León Foucault instaló el primer péndulo a
          gran escala.
        </p>
        <p>En nuestro país existen seis péndulos:</p>
        <ul className="pendulo-lista">
          <li>
            En la <strong>Catedral Metropolitana</strong> en la Ciudad de
            México.
          </li>
          <li>
            En la
            <strong>
              Coordinación para la Innovación y Aplicación de la Ciencia y la
              Tecnología
            </strong>
            (CIACYT) en San Luis Potosí.
          </li>
          <li>
            En el <strong>Museo Explora </strong>en León, Guanajuato.
          </li>
          <li>
            En el <strong>Centro de Ciencias</strong> de Sinaloa.
          </li>
          <li>
            En la
            <strong>Biblioteca de la Universidad Autónoma Metropolitana</strong>
            , Campus Azcapotzalco de la Ciudad de México.
          </li>
        </ul>
        <p>
          Y por supuesto el Péndulo del
          <strong>Centro Educativo y Cultural “Manuel Gómez Morin”</strong>, te
          invitamos a visitarlo y conocer su interesante mecanismo, el cual
          demuestra el movimiento de rotación de la Tierra.
        </p>
        <p>
          En el año 2002 se concibe la idea de diseñar, construir e instalar un
          Péndulo de Foucault en la capital de nuestro estado. El Centro de
          Física Aplicada y Tecnología Avanzada (CFATA) de la Universidad
          Nacional Autónoma de México, bajo la tutoría del Dr. Miguel de Icaza
          Herrera y el Dr. Víctor Manuel Castaño Meneses fueron los responsables
          de diseñar y dirigir la construcción del péndulo, la cual quedó a
          cargo del Centro de Ingeniería Avanzada A.C. (CIATEQ) con el apoyo del
          Consejo de Ciencia y tecnología de Querétaro. (CONCYTEQ).
        </p>
        <p>
          Para alojar el péndulo se construyó ex profeso, un edificio con una
          cúpula de 36 metros de diámetro y una altura de 28 metros.
        </p>
        <p>
          El péndulo de Foucault de Querétaro es soportado por un cable de acero
          trenzado que tiene una longitud de 28 metros si se toma en cuenta el
          émbolo. Éste es de bronce, pesa 280 kilogramos y tiene un diámetro de
          64 centímetros. Cabe resaltar que la esfera es la más grande de los
          péndulos de México. Gira en el sentido de las manecillas del reloj, un
          giro completo dura 67 horas, es decir, en una hora avanza 5.3 grados.
        </p>
        <p>
          Los movimientos del péndulo, la tensión del cable, la cantidad de
          oscilaciones, la fricción del aire y las fuerza de Coriolis, además de
          los pequeños movimiento sísmicos, naturales o de origen humano
          provocan que su movimiento se vaya deteniendo, por lo cual tiene un
          sistema hidráulico de control lógico que envía las órdenes de
          energizar o inyectar un nuevo impulso, para que su movimiento no se
          frene y así pueda seguir moviéndose hasta completar su vuelta.
        </p>
        <p>
          Finalmente, en febrero del año 2005, el péndulo comenzó a funcionar en
          Querétaro y a la fecha sigue vigente su majestuosa presencia.
        </p>
        <a href="https://www.facebook.com/museopendulo">Visita la pagina oficial</a>
      </div>
    </div>
  );
}
