import React from "react";
import "./sitiosInteres.css";
import { NavLink } from "react-router-dom";
import * as Imagenes from "../../../sources/utilities/ExportSitios/exportSitios";

export default function SitiosInteres() {
  return (
    <div className="sitiosInteres">
      <h2>Sitios de interes</h2>
      <div className="sitiosInteres-texto">
        <p>
          En el Centro Educativo y Cultural del Estado de Querétaro “Manuel
          Gómez Morin” se encuentran diversos espacios que son de interés para
          la ciudadanía, ya que en ellos se ofrecen servicios y actividades
          gratuitas que contribuyen al desarrollo de la cultura y la educación
          en la entidad. A continuación, se describen los servicios que se
          ofrecen en el CECEQ y que son de interés para la ciudadanía.
        </p>
        <p className="sitiosInteres-texto-marcado ">
          BIBLIOTECA VIRTUAL DE LA SALUD
        </p>
        <div className="sitiosInteres-tarjeta">
          <div className="sitiosInteres-tarjeta-imagen">
            <img
              src={Imagenes.BibliotecaVirtualSalud}
              alt="Biblioteca Virtual de Salud"
              width={180}
            />
          </div>
          <div className="sitiosInteres-tarjeta-texto">
            <p>
              La Biblioteca Virtual en Salud es visualizada como la base
              distribuida del conocimiento científico y técnico en salud
              registrado, organizado y almacenado en formato electrónico en los
              países de la región, accesible de forma universal en Internet de
              modo compatible con las bases internacionales. Permite el acceso a
              documentos a texto completo y referenciales.
            </p>
            <NavLink to="https://bvsalud.org/es/">
              <button type="button" className="sitiosInteres-button">
                Visitar Sitio
              </button>
            </NavLink>
          </div>
        </div>
        <hr />
        <p className="sitiosInteres-texto-marcado ">CALTECH ETD DATABASE</p>
        <div className="sitiosInteres-tarjeta">
          <div className="sitiosInteres-tarjeta-imagen">
            <img src={Imagenes.Caltech} alt="CALTECH ETD DATABASE" />
          </div>
          <div className="sitiosInteres-tarjeta-texto">
            <p>
              Es una base de Datos que contiene Tesis y Disertaciones
              electrónicas sobre las siguientes aéreas del conocimiento:
              Computación, Aeronáutica, Mecánica Aplicada, Matemáticas Aplicada,
              Ciencia de los Materiales, Ingeniería Química, Civil, Eléctrica y
              Mecánica.
            </p>
            <NavLink to="https://thesis.library.caltech.edu">
              <button type="button" className="sitiosInteres-button">
                Visitar Sitio
              </button>
            </NavLink>
          </div>
        </div>
        <hr />
        <p className="sitiosInteres-texto-marcado ">CEPAL</p>
        <div className="sitiosInteres-tarjeta">
          <div className="sitiosInteres-tarjeta-imagen">
            <img src={Imagenes.Cepal} alt="CEPAL" />
          </div>
          <div className="sitiosInteres-tarjeta-texto">
            <p>
              Repositorio digital con más de 35.000 publicaciones de acceso
              libre de la Comisión Económica para América Latina y el Caribe
              (CEPAL), desde la primera difundida en 1948 hasta la más reciente,
              con obras de más de 8.000 autores en cinco idiomas, el repositorio
              está dirigido a todos los usuarios interesados en conocer el
              trabajo de la Comisión, especialmente los formuladores de
              políticas, investigadores, académicos y estudiantes. Video sobre
              el repositorio digital de la CEPAL.
            </p>
            <NavLink to="https://repositorio.cepal.org">
              <button type="button" className="sitiosInteres-button">
                Visitar Sitio
              </button>
            </NavLink>
          </div>
        </div>
        <hr />
        <p className="sitiosInteres-texto-marcado ">COCHRANE MÉXICO</p>
        <div className="sitiosInteres-tarjeta">
          <div className="sitiosInteres-tarjeta-imagen">
            <img src={Imagenes.Cochrane} alt="COCHRANE" />
          </div>
          <div className="sitiosInteres-tarjeta-texto">
            <p>
              Es una colección de bases de datos que reúne en un solo sitio los
              estudios de investigación más actualizados y que cuentan con una
              rigurosa metodología acerca de los tratamientos y las
              intervenciones sanitarias. Ahí también se publican revisiones
              sobre metodología de la investigación y sobre pruebas
              diagnósticas.
            </p>
            <NavLink to="https://mx.cochrane.org">
              <button type="button" className="sitiosInteres-button">
                Visitar Sitio
              </button>
            </NavLink>
          </div>
        </div>
        <hr />
        <p className="sitiosInteres-texto-marcado ">DESCARGA CULTURA</p>
        <div className="sitiosInteres-tarjeta">
          <div className="sitiosInteres-tarjeta-imagen">
            <img src={Imagenes.CulturaUnam} alt="DESCARGA CULTURA" />
          </div>
          <div className="sitiosInteres-tarjeta-texto">
            <p>
              Cultura para llevar: el podcast de la Universidad Nacional
              Autónoma de México. Materiales literarios, musicales y académicos
              en formato sonoro. Gratuito y de acceso universal que te ofrece la
              Coordinación de Difusión Cultural.
            </p>
            <NavLink to="https://descargacultura.unam.mx">
              <button type="button" className="sitiosInteres-button">
                Visitar Sitio
              </button>
            </NavLink>
          </div>
        </div>
        <hr />
        <p className="sitiosInteres-texto-marcado ">ETDWEB</p>
        <div className="sitiosInteres-tarjeta">
          <div className="sitiosInteres-tarjeta-imagen">
            <img src={Imagenes.Etd} alt="ETDWEB" />
          </div>
          <div className="sitiosInteres-tarjeta-texto">
            <p>
              ETDEWEB contiene actualmente más de 4.6 millones de registros
              bibliográficos con información científica y tecnológica en
              energía, mas de 439,000 reportes a texto completo, así como más de
              1.1 millones de ligas a lugares donde se puede localizar los
              documentos referidos.
            </p>
            <NavLink to="https://www.etde.org">
              <button type="button" className="sitiosInteres-button">
                Visitar Sitio
              </button>
            </NavLink>
          </div>
        </div>
        <hr />
        <p className="sitiosInteres-texto-marcado ">FREE MEDICAL JOURNALS</p>
        <div className="sitiosInteres-tarjeta">
          <div className="sitiosInteres-tarjeta-imagen">
            <img src={Imagenes.FreeMedical} alt="FREE MEDICAL JOURNALS" />
          </div>
          <div className="sitiosInteres-tarjeta-texto">
            <p>
              Un amplio directorio de más de 1400 revistas que podemos consultar
              por título, especialidades o idiomas, incluido el español.
            </p>
            <NavLink to="http://www.freemedicaljournals.com">
              <button type="button" className="sitiosInteres-button">
                Visitar Sitio
              </button>
            </NavLink>
          </div>
        </div>

        <hr />
        <p className="sitiosInteres-texto-marcado ">
          HEMEROTECA NACIONAL DIGITAL (HNDM)
        </p>
        <div className="sitiosInteres-tarjeta">
          <div className="sitiosInteres-tarjeta-imagen">
            <img src={Imagenes.Hemeroteca} alt="HEMEROTECA" />
          </div>
          <div className="sitiosInteres-tarjeta-texto">
            <p>
              El proyecto de la HNDM representa la ascensión al espacio virtual
              del más completo patrimonio hemerográfico de México.
            </p>
            <NavLink to="https://hndm.iib.unam.mx/index.php/es/">
              <button type="button" className="sitiosInteres-button">
                Visitar Sitio
              </button>
            </NavLink>
          </div>
        </div>

        <hr />
        <p className="sitiosInteres-texto-marcado ">
          IMSLP - PETRUCCI MUSIC LIBRARY
        </p>
        <div className="sitiosInteres-tarjeta">
          <div className="sitiosInteres-tarjeta-imagen">
            <img src={Imagenes.Imslp} alt="IMSLP" />
          </div>
          <div className="sitiosInteres-tarjeta-texto">
            <p>
              Bienvenido al Proyecto Biblioteca Internacional de Partituras
              Musicales. El proyecto IMSLP-Petrucci Music Library pretende crear
              una biblioteca virtual que contenga partituras musicales bajo
              dominio público, así como partituras de compositores que deseen
              compartir su música con el mundo gratuitamente.
            </p>
            <NavLink to="https://imslp.org">
              <button type="button" className="sitiosInteres-button">
                Visitar Sitio
              </button>
            </NavLink>
          </div>
        </div>

        <hr />
        <p className="sitiosInteres-texto-marcado ">PUBMED CENTRAL</p>
        <div className="sitiosInteres-tarjeta">
          <div className="sitiosInteres-tarjeta-imagen">
            <img src={Imagenes.PubMed} alt="PUBMED" />
          </div>
          <div className="sitiosInteres-tarjeta-texto">
            <p>
              La Central de Publicaciones Médicas (PubMed Central) es un archivo
              digital de biomedicina y de revistas sobre ciencias de la vida, de
              los Institutos Nacionales de Salud de los Estados Unidos. Con
              PubMed Central, la Biblioteca Nacional de Medicina.
            </p>
            <NavLink to="https://pmc.ncbi.nlm.nih.gov">
              <button type="button" className="sitiosInteres-button">
                Visitar Sitio
              </button>
            </NavLink>
          </div>
        </div>

        <hr />
        <p className="sitiosInteres-texto-marcado ">REBIUN</p>
        <div className="sitiosInteres-tarjeta">
          <div className="sitiosInteres-tarjeta-imagen">
            <img src={Imagenes.Rebiun} alt="REBIUN" />
          </div>
          <div className="sitiosInteres-tarjeta-texto">
            <p>
              Revistas Científicas del Consejo Superior de Investigaciones
              Científicas Listado de revistas del Consejo Superior de
              Investigaciones Científicas de España, permite el acceso a texto
              completo, en algunas manejan el embargo de un año.
            </p>
            <NavLink to="https://revistas.csic.es/index.html">
              <button type="button" className="sitiosInteres-button">
                Visitar Sitio
              </button>
            </NavLink>
          </div>
        </div>

        <hr />
        <p className="sitiosInteres-texto-marcado ">WDI ONLINE Y GDF ONLINE</p>
        <div className="sitiosInteres-tarjeta">
          <div className="sitiosInteres-tarjeta-imagen">
            <img src={Imagenes.Wdi} alt="WDI" />
          </div>
          <div className="sitiosInteres-tarjeta-texto">
            <p>
              World Development Indicartor. Más de 550 indicadores de desarrollo
              de 207 países. Global Development Finance. Acceso a la información
              estadística financiera que el Banco Mundial recibe de 136 países.
              Más información.
            </p>
            <NavLink to="https://databank.worldbank.org/home.aspx">
              <button type="button" className="sitiosInteres-button">
                Visitar Sitio
              </button>
            </NavLink>
          </div>
        </div>

        <hr />
        <p className="sitiosInteres-texto-marcado ">
          DIRECTORY OF OPEN ACCESS JOURNALS
        </p>
        <div className="sitiosInteres-tarjeta">
          <div className="sitiosInteres-tarjeta-imagen">
            <img src={Imagenes.Doaj} alt="DIRECTORY OF OPEN ACCESS JOURNALS" />
          </div>
          <div className="sitiosInteres-tarjeta-texto">
            <p>
              DOAJ es un directorio en línea que indexa y proporciona acceso a
              revistas de alta calidad de libre acceso.
            </p>
            <NavLink to="https://doaj.org">
              <button type="button" className="sitiosInteres-button">
                Visitar Sitio
              </button>
            </NavLink>
          </div>
        </div>

        <hr />
        <p className="sitiosInteres-texto-marcado ">BIBLIOTECAS DE MÉXICO</p>
        <div className="sitiosInteres-tarjeta">
          <div className="sitiosInteres-tarjeta-imagen">
            <img src={Imagenes.BibliotecaMex} alt="BIBLIOTECAS DE MÉXICO" />
          </div>
          <div className="sitiosInteres-tarjeta-texto">
            <p>
              Fuentes de información de Finanzas y Contabilidad del Banco de
              México
            </p>
            <NavLink to="https://www.banxico.org.mx">
              <button type="button" className="sitiosInteres-button">
                Visitar Sitio
              </button>
            </NavLink>
          </div>
        </div>

        <hr />
        <p className="sitiosInteres-texto-marcado ">
          INSTITUTO DE INVESTIGACIONES ECONÓMICAS DE LA UNAM
        </p>
        <div className="sitiosInteres-tarjeta">
          <div className="sitiosInteres-tarjeta-imagen">
            <img src={Imagenes.InvestigacionEconomica} alt="INSTITUTO DE INVESTIGACIONES ECONÓMICAS DE LA UNAM" />
          </div>
          <div className="sitiosInteres-tarjeta-texto">
            <p>
              Fuentes de información de Economía de la Universidad Autónoma de
              México
            </p>
            <NavLink to="http://biblioteca.iiec.unam.mx">
              <button type="button" className="sitiosInteres-button">
                Visitar Sitio
              </button>
            </NavLink>
          </div>
        </div>

        <hr />
        <p className="sitiosInteres-texto-marcado ">CIIDET</p>
        <div className="sitiosInteres-tarjeta">
          <div className="sitiosInteres-tarjeta-imagen">
            <img src={Imagenes.Ciidet} alt="CIIDET" />
          </div>
          <div className="sitiosInteres-tarjeta-texto">
            <p>
              El Centro Interdisciplinario de Investigación y Docencia en
              Educación Técnica contribuye a elevar la calidad de la educación
              tecnológica que ofrecen los institutos, unidades y centros del
              Tecnológico Nacional de México (TecNM), de acuerdo con las metas
              estratégicas del país y la política que en la materia implementa
              la Secretaría de Educación Pública, a través de la Subsecretaría
              de Educación Superior.
            </p>
            <NavLink to="http://www.ciidet.edu.mx/ciidet/index.php?r=site/index">
              <button type="button" className="sitiosInteres-button">
                Visitar Sitio
              </button>
            </NavLink>
          </div>
        </div>

        <hr />
        <p className="sitiosInteres-texto-marcado ">
          REVISTA DIGITAL "TLAHUIZCALLI"
        </p>
        <div className="sitiosInteres-tarjeta">
          <div className="sitiosInteres-tarjeta-imagen">
            <img src={Imagenes.RevistaDigital} alt="REVISTA DIGITAL" />
          </div>
          <div className="sitiosInteres-tarjeta-texto">
            <p>
              La revista Tlahuizcalli es un órgano de difusión cuatrimestral de
              la Especialización en Aprendizaje y Enseñanza de las Ciencias
              Básicas (EAECB) del CIIDET, con la firme convicción de ofrecer un
              espacio académico de sincera colaboración con la comunidad
              involucrada que respeta los principios éticos de su profesión y,
              por supuesto, con el único fin de fortalecer una de las
              actividades más decorosas y gratificantes: el amor a la docencia.
            </p>
            <NavLink to="https://sites.google.com/site/eaecbpublicaciones/">
              <button type="button" className="sitiosInteres-button">
                Visitar Sitio
              </button>
            </NavLink>
          </div>
        </div>

        <hr />
        <p className="sitiosInteres-texto-marcado ">UNADM</p>
        <div className="sitiosInteres-tarjeta">
          <div className="sitiosInteres-tarjeta-imagen">
            <img src={Imagenes.Unadm} alt="UNADM" />
          </div>
          <div className="sitiosInteres-tarjeta-texto">
            <p>
              La Universidad Abierta a Distancia de México tiene como misión
              formar profesionales del más alto nivel y en diversas áreas del
              conocimiento; éticos y con un sólido compromiso social hacia su
              comunidad; competitivos nacional e internacionalmente; con
              espíritu emprendedor y los conocimientos para que respondan a los
              avances de la ciencia y la tecnología, así como a las necesidades
              de desarrollo económico, político, social y cultural del país.
            </p>
            <NavLink to="https://www.unadmexico.mx">
              <button type="button" className="sitiosInteres-button">
                Visitar Sitio
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
