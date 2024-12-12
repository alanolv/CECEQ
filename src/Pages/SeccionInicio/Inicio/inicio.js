import React, {useState} from "react";
import "./inicio.css";
import ReactPlayer from "react-player";
import Carrusel from "../../../Components/Carousels/carousels";
import LeftArrow from "../../../sources/svg/left-arrow.svg";
import RightArrow from "../../../sources/svg/right-arrow.svg";
import { NavLink } from "react-router-dom";
import { posters } from "../../../sources/utilities/PosterTalleres/posterTalleres";
import SpotifyImage from "../../../sources/images/Galerias/spotify.png";
import Murales from "../../../sources/images/Galerias/murales.jpg";
import Agenda from "../../../sources/images/Galerias/agenda.png";
import ImgGallery from "../../../sources/images/Galerias/imgGallery.png";



export default function Inicio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? posters.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === posters.length - 1 ? 0 : prevIndex + 1));
  };

  const getPrevIndex = () => (currentIndex === 0 ? posters.length - 1 : currentIndex - 1);
  const getNextIndex = () => (currentIndex === posters.length - 1 ? 0 : currentIndex + 1);


  return (
    <div className="inicio-container">
      <div className="inicio-carrusel">
        <Carrusel />
      </div>
      <div className="inicio-talleres-recomendados">
        <h2 className="inicio-titulo">Talleres Recomendados</h2>
        <p className="inicio-talleres-parrafo">
          A continuacion encontraras algunos de nuestros talleres de los que
          puedes ser parte en esta institucion
        </p>
        <div className="inicio-talleres"></div>
        <div className="posters">
          <div className="prev">
            <img
              src={LeftArrow}
              alt="left-arrow"
              width={50}
              onClick={handlePrevImage}
              className="inicio-talleres-buttons"
            />
          </div>
          <img
            src={posters[getPrevIndex()].img}
            alt="poster"
            className="prev-poster"
          />
          <img
            src={posters[currentIndex].img}
            alt="poster"
            className="current-poster"
          />
          <img
            src={posters[getNextIndex()].img}
            alt="poster"
            className="next-poster"
          />
          <div className="next">
            <img
              src={RightArrow}
              alt="left-arrow"
              width={50}
              onClick={handleNextImage}
              className="inicio-talleres-buttons"
            />
          </div>
          <div className="inicio-galerias">
            <h2 className="inicio-galerias-titulo">Galerias y mas</h2>
            <div className="inicio-galerias-imagenes">
              <NavLink to="/Murales">
                <img src={Murales} alt="poster" />
              </NavLink>
              <NavLink to="https://open.spotify.com/show/0WQWcsCIr3ItQSGAM049Yd?si=x7olq0uQT-mgocv6ga2VHA&utm_source=copy-link&nd=1">
                <img src={SpotifyImage} alt="poster" />
              </NavLink>
              <NavLink to="/Galerias">
                <img src={ImgGallery} alt="poster" />
              </NavLink>
              <NavLink to="/Agenda">
                <img src={Agenda} alt="poster" />
              </NavLink>
            </div>
          </div>
          <div className="inicio-sobre-nosotros">
            <h2 className="inicio-sobre-nosotros-titulo">
              Centro Educativo y Cultural del Estado
            </h2>
            <div className="inicio-sobre-nosotros-video">
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=gDLNL4lS2ws"}
                playing={false}
                controls={false}
                width={"100%"}
                height={"100%"}
                loading={"lazy"}
              />
            </div>
            <p className="inicio-sobre-nosotros-parrafo">
              El Centro Educativo y Cultural del Estado de Querétaro (CECEQ)
              “Manuel Gómez Morin”, les recibe con mucho gusto. Este emblemático
              recinto de la ciudad de Querétaro, cuenta con múltiples espacios
              abiertos al público donde se llevan a cabo diversos talleres,
              exposiciones, cursos, conferencias, conciertos, simposios,
              congresos, entre otros eventos; en donde bebés, niños, jóvenes,
              adultos y adultos mayores pueden no sólo conocer y disfrutar
              diversas manifestaciones artísticas y culturales, sino también
              elevar su nivel educativo para lograr una mejor calidad de vida.
            </p>
          </div>
          <div className="inicio-ubicacion">
            <h2 className="inicio-ubicacion-titulo">¿Como llegar?</h2>
            <div className="inicio-ubicacion-mapa">
              <iframe
                title="Main youtube video"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2641.0758873966793!2d-100.38664790830697!3d20.586205968935488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d344d3acf867bd%3A0x76f4f9ea42a59fa8!2sCentro%20Educativo%20Cultural%20del%20Estado%20de%20Quer%C3%A9taro!5e0!3m2!1ses!2smx!4v1731037929064!5m2!1ses!2smx"
                width="100%"
                height="100%"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
