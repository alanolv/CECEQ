import React from "react";
import "./horarioAtencion.css";

export default function HorarioAtencion() {
  return (
    <div className="atencion">
      <h2>Horarios de Atencion</h2>
      <div className="atencion-tabla">
        {/* Horarios de atencion */}
        <div className="directorio-tabla">
          <div className="atencion-tabla-titulo">
            <p>HORARIO</p>
          </div>
          <div className="directorio-tabla-contenido">
            <div className="directorio-tabla-contenido-uno">
              <p>Horario Administrativo</p>
              <p>Lunes a viernes:</p>
              <p>08:30 a 16:00 hrs.</p>
              <p>Teléfono:</p>
              <p>Conmutador (442) 251 9600</p>
              <p>Extensión: 9613</p>
            </div>
            <div className="directorio-tabla-contenido-dos">
              <p>
                Horario de la Biblioteca Pública Central Estatal Francisco
                Cervantes
              </p>
              <p>Martes a sábado:</p>
              <p>09:00 a 17:00 hrs.</p>
              <p>Teléfono:</p>
              <p>Conmutador (442) 251 9600</p>
              <p>Extensión: 9708</p>
            </div>
          </div>

          <div className="directorio-tabla-contenido">
            <div className="directorio-tabla-contenido-uno">
              <p>
                Horario del Área Infantil de la Biblioteca Pública Central
                Estatal
              </p>
              <p>Martes a sábado:</p>
              <p>09:00 a 17:00 hrs.</p>
              <p>Teléfono:</p>
              <p>Conmutador (442) 251 9600</p>
              <p>Extensión: 9727</p>
            </div>
            <div className="directorio-tabla-contenido-dos">
              <p>Horario del Centro de Cómputo</p>
              <p>Martes a viernes:</p>
              <p>09:00 a 17:30 hrs.</p>
              <p>Sábado:</p>
              <p>09:00 a 15:00 hrs.</p>
              <p>Teléfono:</p>
              <p>Conmutador (442) 251 9600</p>
              <p>Extensión: 9722</p>
            </div>
          </div>

          <div className="directorio-tabla-contenido">
            <div className="directorio-tabla-contenido-uno">
              <p>Horario de la Librería “EDUCAL”</p>
              <p>Lunes a viernes:</p>
              <p>08:30 a 16:00 hrs.</p>
              <p>Teléfono:</p>
              <p>Conmutador -</p>
              <p>Extensión: 9720</p>
            </div>
            <div className="directorio-tabla-contenido-dos">
              <p>Horario del INEGI</p>
              <p>Lunes a Viernes:</p>
              <p>08:30 a 16:00 hrs.</p>
              <p>Teléfono:</p>
              <p>Conmutador -</p>
              <p>Extensión: 9718</p>
            </div>
          </div>
          <div className="directorio-tabla-contenido-principal">
            <p>Horario de PREPA SI</p>
            <p>Lunes a Viernes:</p>
            <p>08:30 a 16:00 hrs.</p>
            <p>Teléfono:</p>
            <p>Conmutador -</p>
            <p>Extensión: 9729</p>
          </div>
        </div>
      </div>
    </div>
  );
}
