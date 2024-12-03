import React from "react";
import "./dependencias.css";
import { NavLink } from "react-router-dom";
import Concyteq from "../../../sources/images/Dependencias/concyteq.png";
import Inegi from "../../../sources/images/Dependencias/inegi.png";
import Educal from "../../../sources/images/Dependencias/edual.png";
import PrepaSi from "../../../sources/images/Dependencias/prepaSi.png";
import VerificacionVehicular from "../../../sources/images/Dependencias/verificacionVehicular.png";

export default function Dependencias() {
  return (
    <div className="dependencias">
      <h2>Dependencias</h2>
      <div className="dependencias-texto">
        <p>
          El CECEQ es un órgano desconcentrado de la Secretaría de Educación del
          Gobierno del Estado de Querétaro, que tiene como objetivo principal
          promover y difundir la cultura y las artes en el estado.
        </p>
        <p className="dependencias-texto-marcado ">CONCYTEQ</p>
        <div className="dependencias-tarjeta">
          <div className="dependencias-tarjeta-imagen">
            <img src={Concyteq} alt="CONCYTEQ" />
          </div>
          <div className="dependencias-tarjeta-texto">
            <p>
              En el Área del Péndulo donde se puede admirar el Péndulo de
              Foucault es un espacio diseñado con el objetivo de fortalecer la
              infraestructura para la divulgación de la ciencia y la tecnología
              en la entidad. Este espacio es atendido por el Consejo de Ciencia
              y Tecnología del Estado de Querétaro (CONCYTEQ), quien tiene por
              uno de sus objetivos promover una cultura científica entre nuestra
              sociedad, para lo cual el CONCYTEQ coordina, diseña e implementa
              actividades como: talleres de ciencia para niños, diseño de
              material didáctico que facilite la educación científica en el
              nivel básico, creación de cápsulas informativas en el área de la
              innovación científica, talleres y seminarios destinados a la
              efectiva divulgación de la ciencia. Además de que desarrolla
              exposiciones de ciencia en conjunto con instituciones de educación
              superior y centros de investigación. Todas las actividades que
              realiza el CONCYTEQ son gratuitas.
            </p>
            <p>
              El horario de visita al Área del Péndulo, es de Martes a Viernes
              de 09:00 a 19:00 h, Sábados de 10:00 a 18:00 horas y Domingos de
              10:00 a 17:50 h. El Péndulo de Foucault se ubica a un costado del
              Acceso Principal.
            </p>
            <NavLink to="https://concyteq.edu.mx">
              <button type="button" className="dependencias-button">
                Visitar Sitio
              </button>
            </NavLink>
          </div>
        </div>
        <hr />
        <p className="dependencias-texto-marcado ">INEGI</p>
        <div className="dependencias-tarjeta">
          <div className="dependencias-tarjeta-imagen">
            <img src={Inegi} alt="CONCYTEQ" />
          </div>
          <div className="dependencias-tarjeta-texto">
            <p>
              El Instituto Nacional de Estadística y Geografía (INEGI) es una
              institución responsable, confiable y sólida para la generación de
              información sobre fenómenos demográficos, sociales, económicos y
              del medio ambiente y su relación con el territorio nacional. La
              información estadística y geográfica que produce y que pone a
              disposición de la sociedad, contribuye al desarrollo del país, ya
              que permite que las autoridades y representantes de los diversos
              sectores tengan un mejor conocimiento de la realidad para
              fundamentar sus decisiones; así como para evaluar los resultados
              de su desempeño. Así mismo, la información que genera es un insumo
              fundamental para las investigaciones académicas que coadyuvan a la
              comprensión del progreso del país y nuestro entorno.
            </p>
            <p>
              El Centro de Información del INEGI es un área de consulta
              gratuita, que proporciona cursos y programas de manera permanente
              a quien lo desee. Su ubicación es en el Acceso A Planta Alta y su
              horario de atención al público es de Martes a Viernes de 09:00 a
              20:00 h. y Sábados de 09:00 a 18:00 h.
            </p>
            <NavLink to="https://www.inegi.org.mx">
              <button type="button" className="dependencias-button">
                Visitar Sitio
              </button>
            </NavLink>
          </div>
        </div>
        <hr />
        <p className="dependencias-texto-marcado ">EDUCAL</p>
        <div className="dependencias-tarjeta">
          <div className="dependencias-tarjeta-imagen">
            <img src={Educal} alt="CONCYTEQ" />
          </div>
          <div className="dependencias-tarjeta-texto">
            <p>
              En el interior del Centro Educativo y Cultural del Estado de
              Querétaro (CECEQ) “Manuel Gómez Morin” encontrarás un espacio
              destinado a la librería EDUCAL, la que distribuye los fondos
              editoriales de la ahora Secretaría de Cultura, antes Consejo
              Nacional para la Cultura y las Artes (CONACULTA).
            </p>
            <p>
              La existencia de la Librería EDUCAL obedece al interés de poder
              ofrecer un valor agregado más a los usuarios y visitantes del
              recinto, quienes tienen la oportunidad de adquirir libros impresos
              y digitales, revistas, discos compactos, películas, carteles y
              artículos varios. Cuando estés en el CECEQ no olvides visitar la
              librería, ubicada en el Acceso Principal Planta Baja. Te
              sorprenderá.
            </p>
            <p>
              Los horarios de venta al público son de Martes a Viernes de 10:00
              a 20:00 h, Sábados y Domingos de 10:00 a 18:00 h.
            </p>
            <NavLink to="http://www.educal.com.mx">
              <button type="button" className="dependencias-button">
                Visitar Sitio
              </button>
            </NavLink>
          </div>
        </div>
        <hr />
        <p className="dependencias-texto-marcado ">PREPA SI</p>
        <div className="dependencias-tarjeta">
          <div className="dependencias-tarjeta-imagen">
            <img src={PrepaSi} alt="CONCYTEQ" />
          </div>
          <div className="dependencias-tarjeta-texto">
            <p>
              Es un programa de educación media superior impulsado por el
              Ejecutivo Estatal, a través de la Secretaria de Educación en el
              Estado (SEDEQ) y el Consejo Estatal para la Planeación y
              Programación de la Educación Media Superior (CEPPEMS); la
              operatividad del programa a cargo del Colegio de Bachilleres del
              Estado de Querétaro (COBAQ), a través de la opción educativa de
              Preparatoria Abierta.
            </p>
            <p>
              Centro Educativo y Cultural del Estado de Querétaro "Manuel Gómez
              Morin" (CECEQ), entrada "A" sala 8, planta baja. Av.
              Constituyentes s/n, esquina Pasteur Sur, col. Villas del Sur,
              Santiago de Querétaro, Qro., Tels. 01 (442) 248-2869, horario de
              atención: lunes a viernes de 8:30 a 17:30 hrs..
            </p>
            <NavLink to="http://www.cobaq.edu.mx/prepasi.html">
              <button type="button" className="dependencias-button">
                Visitar Sitio
              </button>
            </NavLink>
          </div>
        </div>
        <hr />
        <p className="dependencias-texto-marcado ">VERIFICACION VEHICULAR</p>
        <div className="dependencias-tarjeta">
          <div className="dependencias-tarjeta-imagen">
            <img src={VerificacionVehicular} alt="CONCYTEQ" />
          </div>
          <div className="dependencias-tarjeta-texto">
            <p>
              "Los automóviles son una de las principales fuentes de
              contaminación atmosférica, contribuyen entre un 30% y 40% en las
              principales ciudades del mundo, siendo el monóxido de carbono el
              mayor contaminante. En el estado de Querétaro, por ejemplo,
              contribuyen en un 15% aproximadamente en las emisiones
              atmosféricas. La verificación vehicular es una actividad para el
              control de la contaminación atmosférica que se realiza en diversas
              partes del mundo, principalmente en las ciudades con un gran
              número de vehículos o altos índices de contaminación atmosférica.
            </p>
            <p>
              Con la finalidad de mantener a la población informada y libre de
              riesgos mayores a la salud, la ciudadanía puede conocer de manera
              eficaz las emisiones de sus automóviles. El Gobierno del Estado de
              Querétaro a través de la SEDESU, implementa de manera semestral la
              verificación vehicular en 43 Centros distribuidos en todo el
              Estado para atender a la ciudadanía. En el Centro Educativo y
              Cultural “Manuel Gómez Morin”, se encuentra el módulo de atención
              donde se brinda información para el ciudadano y se realizan
              trámites como: constancia de verificación, línea de captura de
              multas de verificación, registro de citas para verificar, etc, los
              cuales agilizan los procesos para los usuarios. El horario del
              módulo de atención es de 08:00hrs a 15:30hrs de lunes a viernes.
            </p>
            <NavLink to="https://tramitesqueretaro.mx/ficha/verificacionvehicular">
              <button type="button" className="dependencias-button">
                Visitar Sitio
              </button>
            </NavLink>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
