import React from "react";
import "./directorio.css";

export default function Directorio() {
  return (
    <div className="directorio">
      <h2>Directorio</h2>
      <div className="directorio-tabla">
        {/* Direccion general */}
        <div className="directorio-tabla-titulo">
          <p>Dirección General</p>
        </div>
        <div className="directorio-tabla-contenido-principal">
          <p>Ana Eugenia Patiño Correa</p>
          <p>Directora General</p>
          <p>Ext 9613</p>
          <p>apatino@queretaro.gob.mx</p>
        </div>
      </div>

      {/* Direccion administracion y planeacion */}
      <div className="directorio-tabla">
        <div className="directorio-tabla-titulo">
          <p>Dirección de Administración y Planeación</p>
        </div>
        <div className="directorio-tabla-contenido-principal">
          <p>Alejandra Guadalupe Ferrer Trigos</p>
          <p>Directora de Administración y Planeación.</p>
          <p>Ext 9608</p>
          <p>aferrer@queretaro.gob.mx</p>
        </div>
        <div className="directorio-tabla-contenido">
          <div className="directorio-tabla-contenido-uno">
            <p>Paola Gricel Pozos García</p>
            <p>Líder de Proyectos</p>
            <p>Ext 9712</p>
            <p>ppozos@queretaro.gob.mx</p>
          </div>
          <div className="directorio-tabla-contenido-dos">
            <p>Sandra Aurelia Soto Arredondo</p>
            <p>Líder de Proyectos</p>
            <p>Ext 9609</p>
            <p>ssotoa@queretaro.gob.mx</p>
          </div>
        </div>
        <div className="directorio-tabla-contenido">
          <div className="directorio-tabla-contenido-uno">
            <p>Olivia Vaca Patiño</p>
            <p>Líder de Proyectos</p>
            <p>Ext 9616</p>
            <p>ovaca@queretaro.gob.mx</p>
          </div>
          <div className="directorio-tabla-contenido-dos">
            <p>Andrea Castillo Vargas</p>
            <p>Líder de Proyectos Logística y Eventos</p>
            <p>Ext 9716</p>
            <p>acastillo@queretaro.gob.mx</p>
          </div>
        </div>

        <div className="directorio-tabla-contenido">
          <div className="directorio-tabla-contenido-uno">
            <p>Laura Liliana Mota Huitrón</p>
            <p>Líder de Proyectos Comunicación Social</p>
            <p>Ext 9603</p>
            <p>lmotah@queretaro.gob.mx</p>
          </div>
          <div className="directorio-tabla-contenido-dos">
            <p>Daniel Medina Oviedo</p>
            <p>Líder de Proyectos de Diseño e Imagen</p>
            <p>Ext 9707</p>
            <p>dmedinao@queretaro.gob.mx</p>
          </div>
        </div>

        <div className="directorio-tabla-contenido">
          <div className="directorio-tabla-contenido-uno">
            <p>Elizabeth Loyola Camacho</p>
            <p>Líder de Proyectos</p>
            <p>Ext 9616</p>
            <p>eloyola@queretaro.gob.mx</p>
          </div>
          <div className="directorio-tabla-contenido-dos">
            <p>Juan Vázquez Trejo</p>
            <p>Líder de Proyectos Logística y Eventos</p>
            <p>Ext -</p>
            <p>jvazquezt@queretaro.gob.mx</p>
          </div>
        </div>

        <div className="directorio-tabla-contenido">
          <div className="directorio-tabla-contenido-uno">
            <p>Kassandra Manuela Martínez Otamendi</p>
            <p>Medico general</p>
            <p>Ext 9613</p>
            <p>-</p>
          </div>
          <div className="directorio-tabla-contenido-dos">
            <p>Víctor Hugo Yáñez Montero</p>
            <p>Encargado del servicio social y practicas profesionales</p>
            <p>Ext 9710</p>
            <p>-</p>
          </div>
        </div>

        {/* Direccion biblioteca */}
        <div className="directorio-tabla">
          <div className="directorio-tabla-titulo">
            <p>Dirección de Biblioteca Pública Central Estatal</p>
          </div>
          <div className="directorio-tabla-contenido-principal">
            <p>Laura Espinosa de los Monteros Alzaga</p>
            <p>Directora de Biblioteca Francisco Cervantes</p>
            <p>Ext 9606</p>
            <p>ldelosmonteros@queretaro.gob.mx</p>
          </div>
          <div className="directorio-tabla-contenido">
            <div className="directorio-tabla-contenido-uno">
              <p>Daniel Alejandro López Rosas</p>
              <p>Líder de Proyectos</p>
              <p>Ext 9712</p>
              <p>dlopezr@queretaro.gob.mx</p>
            </div>
            <div className="directorio-tabla-contenido-dos">
              <p>Ma. Auxilio De La Torre Rodríguez</p>
              <p>Líder de Proyectos</p>
              <p>Ext 9708</p>
              <p>mdelatorrer@queretaro.gob.mx</p>
            </div>
          </div>
          <div className="directorio-tabla-titulo">
            <p>Biblioteca Pública Central Estatal Adultos</p>
          </div>
          <div className="directorio-tabla-contenido">
            <div className="directorio-tabla-contenido-uno">
              <p>Abel Tohil Piña Noguez</p>
              <p>Líder de Proyectos</p>
              <p>Ext 9708</p>
              <p>apina@queretaro.gob.mx</p>
            </div>
            <div className="directorio-tabla-contenido-dos">
              <p>Ulises Murillo Hernández</p>
              <p>Auxiliar de Biblioteca</p>
              <p>Ext 9708</p>
              <p>umurillo@queretaro.gob.mx</p>
            </div>
          </div>
          <div className="directorio-tabla-titulo">
            <p>Biblioteca Pública Central Estatal Niños</p>
            <p>ahernandezp@queretaro.gob.mx</p>
          </div>
          <div className="directorio-tabla-contenido">
            <div className="directorio-tabla-contenido-uno">
              <p>María Dolores Vega Pérez</p>
              <p>Auxiliar de Biblioteca</p>
              <p>Ext 9704</p>
              <p>mvegap@queretaro.gob.mx</p>
            </div>
            <div className="directorio-tabla-contenido-dos">
              <p>Alejandra Hernández Peña</p>
              <p>Auxiliar de Biblioteca</p>
              <p>Ext 9704</p>
              <p>ahernandezp@queretaro.gob.mx</p>
            </div>
          </div>
        </div>
        {/* Direccion informatica */}
        <div className="directorio-tabla">
          <div className="directorio-tabla-titulo">
            <p>Dirección de Informática</p>
          </div>
          <div className="directorio-tabla-contenido-principal">
            <p>Antonio Rosales Ledesma</p>
            <p>Director de la Red Central de Informática</p>
            <p>Ext 9605</p>
            <p>arosales@queretaro.gob.mx</p>
          </div>
          <div className="directorio-tabla-contenido">
            <div className="directorio-tabla-contenido-uno">
              <p>María Claudia Amado Cabello</p>
              <p>Líder de Proyectos</p>
              <p>Ext 9715</p>
              <p>mcabello@queretaro.gob.mx</p>
            </div>
            <div className="directorio-tabla-contenido-dos">
              <p>José Ascensión Galván López</p>
              <p>Líder de Proyectos</p>
              <p>Ext. 9722</p>
              <p>jgalvan@queretaro.gob.mx</p>
            </div>
          </div>
          <div className="directorio-tabla-contenido">
            <div className="directorio-tabla-contenido-uno">
              <p>Emmanuel Balderas Morales</p>
              <p>Líder de Proyectos</p>
              <p>Ext. 9703</p>
              <p>ebalderas@queretaro.gob.mx</p>
            </div>
            <div className="directorio-tabla-contenido-dos">
              <p>Rubén Alejandro Aguilar Correa</p>
              <p>Líder de Proyectos</p>
              <p>Ext. 9715</p>
              <p>raguilarc@queretaro.gob.mx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
