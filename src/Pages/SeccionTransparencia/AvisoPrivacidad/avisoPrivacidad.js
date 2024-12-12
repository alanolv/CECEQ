import React from "react";
import "./avisoPrivacidad.css";
import { NavLink } from "react-router-dom";

export default function AvisoPrivacidad() {
  return (
    <div className="aviso-privacidad">
      <div className="aviso-privacidad-tabla">
        {/* Direccion general */}
        <div className="aviso-privacidad-tabla-titulo">
          <p>Avisos de Privacidad</p>
        </div>
        <div className="aviso-privacidad-tabla-contenido-principal">
          <NavLink
            to="http://gomezmorin.queretaro.gob.mx/assets/aviso-de-privacidad-simplificado-del-ceceq.-solicitud-de-espacios3.pdf"
            className="marco-link"
          >
            <p>Aviso de privacidad simplificado del CECEQ. Solicitud de espacios.</p>
          </NavLink>
        </div>
        <div className="aviso-privacidad-tabla-contenido-principal">
          <NavLink
            to="http://gomezmorin.queretaro.gob.mx/assets/aviso-de-privacidad-simplificado-del-ceceq.-solicitud-de-folio-para-acceso-a-instalaciones-de-rci3.pdf"
            className="marco-link"
          >
            <p>Aviso de privacidad simplificado del CECEQ. Solicitud de folio para acceso a instalaciones de RCI.</p>
          </NavLink>
        </div>
        <div className="aviso-privacidad-tabla-contenido-principal">
          <NavLink
            to="http://gomezmorin.queretaro.gob.mx/assets/aviso-de-privacidad-simplificado-del-ceceq.-solicitud-de-acceso-a-biblioteca3.pdf"
            className="marco-link"
          >
            <p>Aviso de privacidad simplificado del CECEQ. Solicitud de acceso a biblioteca.</p>
          </NavLink>
        </div>
        <div className="aviso-privacidad-tabla-contenido-principal">
          <NavLink
            to="http://gomezmorin.queretaro.gob.mx/assets/aviso-de-privacidad-simplificado-del-ceceq.-solicitud-de-credencial-de-biblioteca3.pdf"
            className="marco-link"
          >
            <p>Aviso de privacidad simplificado del CECEQ. Solicitud de credencial de Biblioteca.</p>
          </NavLink>
        </div>
        <div className="aviso-privacidad-tabla-contenido-principal">
          <NavLink
            to="http://gomezmorin.queretaro.gob.mx/assets/aviso-de-privacidad-simplificado-del-ceceq.-solicitud-de-inscripción-a-los-viernes-últimos-de-mes3.pdf"
            className="marco-link"
          >
            <p>Aviso de privacidad simplificado del CECEQ. Solicitud de inscripción a los viernes últimos de mes.</p>
          </NavLink>
        </div>
        <div className="aviso-privacidad-tabla-contenido-principal">
          <NavLink
            to="http://gomezmorin.queretaro.gob.mx/assets/aviso-de-privacidad-simplificado-del-ceceq.-solicitud-de-inscripción-al-curso-de-verano3.pdf"
            className="marco-link"
          >
            <p>Aviso de privacidad simplificado del CECEQ. Solicitud de inscripción al curso de verano.</p>
          </NavLink>
        </div>
        <div className="aviso-privacidad-tabla-contenido-principal">
          <NavLink
            to="http://gomezmorin.queretaro.gob.mx/assets/aviso-de-privacidad-integral-del-ceceq.-solicitud-de-espacios2.pdf"
            className="marco-link"
          >
            <p>Aviso de privacidad integral del CECEQ. Solicitud de espacios.</p>
          </NavLink>
        </div>
        <div className="aviso-privacidad-tabla-contenido-principal">
          <NavLink
            to="http://gomezmorin.queretaro.gob.mx/assets/aviso-de-privacidad-integral-del-ceceq.-solicitud-de-folio-para-acceso-a-instalaciones-de-rci2.pdf"
            className="marco-link"
          >
            <p>Aviso de privacidad integral del CECEQ. Solicitud de folio para acceso a instalaciones de RCI.</p>
          </NavLink>
        </div>
        <div className="aviso-privacidad-tabla-contenido-principal">
          <NavLink
            to="http://gomezmorin.queretaro.gob.mx/assets/aviso-de-privacidad-integral-del-ceceq.-solicitud-de-acceso-a-biblioteca2.pdf"
            className="marco-link"
          >
            <p>Aviso de privacidad integral del CECEQ. Solicitud de acceso a biblioteca.</p>
          </NavLink>
        </div>
        <div className="aviso-privacidad-tabla-contenido-principal">
          <NavLink
            to="http://gomezmorin.queretaro.gob.mx/assets/aviso-de-privacidad-integral-del-ceceq.-solicitud-de-credencial-de-biblioteca2.pdf"
            className="marco-link"
          >
            <p>Aviso de privacidad integral del CECEQ. Solicitud de credencial de Biblioteca.</p>
          </NavLink>
        </div>
        <div className="aviso-privacidad-tabla-contenido-principal">
          <NavLink
            to="http://gomezmorin.queretaro.gob.mx/assets/aviso-de-privacidad-integral-del-ceceq.-solicitud-de-inscripción-a-los-viernes-útimos-de-mes.pdf"
            className="marco-link"
          >
            <p>Aviso de privacidad integral del CECEQ. Solicitud de inscripción a los viernes últimos de mes.</p>
          </NavLink>
        </div>
        <div className="aviso-privacidad-tabla-contenido-principal">
          <NavLink
            to="http://gomezmorin.queretaro.gob.mx/assets/aviso-de-privacidad-integral-del-ceceq.-solicitud-de-inscripción-al-curso-de-verano2.pdf"
            className="marco-link"
          >
            <p>Aviso de privacidad integral del CECEQ. Solicitud de inscripción al curso de verano.</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
