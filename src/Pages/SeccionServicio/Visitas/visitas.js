import React from "react";
import "./visitas.css";

export default function Visitas() {
  return (
    <div className="visitas">
      <h2>Visitas</h2>
      <div className="visitas-texto">
        <p className="visitas-texto-marcado">Visitas Escolares.</p>
        <p>
          A través de nuestra Biblioteca “Francisco Cervantes” ofrecemos el
          servicio de visitas escolares para niños y niñas de 0 a 12 años en el
          área infantil. Adicionalmente, contamos con recorridos para nivel
          Secundaria.
        </p>
        <p>Atendemos Visitas Escolares en 4 Niveles:</p>
        <ol>
          <li>Educación Especial</li>
          <li>Preescolar</li>
          <li>Primaria</li>
          <li>Secundaria</li>
        </ol>
        <p className="visitas-texto-marcado">
          Para las Visitas Escolares contamos con los siguientes espacios de
          interacción:
        </p>
        <ul>
          <li>• Biblioteca “Francisco Cervantes”</li>
          <li>• Red Central de Informática</li>
          <li>• Instituto Nacional de Estadística y Geografía, INEGI</li>
        </ul>
        <p className="visitas-texto-marcado">
          Procedimiento para agendar Visita Escolar:
        </p>
        <ol>
          <li>Realizar oficio de solicitud. Deberá contener:</li>
          <ul>
            <li>
              • El oficio o correo deberá dirigirse a la Mtra. Ana Eugenia
              Patiño Correa, Directora General del Centro Educativo y Cultural
              del Estado de Querétaro Manuel Gómez Morin.
            </li>
            <li>Correo electrónico: apatino@queretaro.gob.mx</li>
            <li>Es importante destacar en el oficio escrito:</li>
            <li>• No. De alumnos</li>
            <li>• Edades y grado de estudios</li>
            <li>• Fecha y horario del o los días que realizarán la visita.</li>
            <li>• No. De horas de visita (que son de 3 a 4 horas)</li>
            <li>
              • Datos de la escuela y persona responsable que acudirá con los
              alumnos.
            </li>
          </ul>
          <li>
            El CECEQ enviará una carta de confirmación con los datos de su
            Visita Escolar, anexando itinerario del recorrido de acuerdo al
            número de horas solicitadas.
          </li>
          <li>
            Señalar en el escrito la persona responsable del grupo,
            especificando domicilio, teléfonos y correo electrónico.
          </li>
          <li>
            La solicitud deberá presentarse con 5 días de anticipación a su
            visita.
          </li>
        </ol>
        <p className="visitas-texto-marcado">
          Teléfono: (442) 251 9600 Ext.: 9708 ó 9704
        </p>
      </div>
    </div>
  );
}
