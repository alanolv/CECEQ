import React from "react";
import ImageGallery from "react-image-gallery";
import "./imgGallery.css";
import "react-image-gallery/styles/css/image-gallery.css";
import * as Galeria from "../../../sources/utilities/ExportGalerias/exportGalerias";

export default function ImgGallery() {
  const principalImages = [
    {
      original: Galeria.Galeria1,
      thumbnail: Galeria.Galeria1,
      originalHeight: 500,
      originalWidth: 150,
    },
    {
      original: Galeria.Galeria2,
      thumbnail: Galeria.Galeria2,
      originalHeight: 500,
      originalWidth: 150,
    },
    {
      original: Galeria.Galeria3,
      thumbnail: Galeria.Galeria3,
      originalHeight: 500,
      originalWidth: 150,
    },
    {
      original: Galeria.Galeria4,
      thumbnail: Galeria.Galeria4,
      originalHeight: 500,
      originalWidth: 150,
    },
    {
      original: Galeria.Galeria5,
      thumbnail: Galeria.Galeria5,
      originalHeight: 500,
      originalWidth: 150,
    },
    {
      original: Galeria.Galeria6,
      thumbnail: Galeria.Galeria6,
      originalHeight: 500,
      originalWidth: 150,
    },
    {
      original: Galeria.Galeria7,
      thumbnail: Galeria.Galeria7,
      originalHeight: 500,
    },
  ];
  const [images, setImages] = React.useState(principalImages);

  const handleLinkClick = (newImages) => {
    setImages(newImages);
  };

  const titularCeceq = [
    {
      original: Galeria.Galeria13,
      thumbnail: Galeria.Galeria13,
      originalHeight: 500,
      originalWidth: 150,
    },
  ];
  const womenPower = [
    {
        original: Galeria.Galeria8,
        thumbnail: Galeria.Galeria8,
        originalHeight: 500,
        originalWidth: 150,
      },
    {
      original: Galeria.Galeria9,
      thumbnail: Galeria.Galeria9,
      originalHeight: 500,
      originalWidth: 150,
    },
    {
      original: Galeria.Galeria10,
      thumbnail: Galeria.Galeria10,
      originalHeight: 500,
      originalWidth: 150,
    },
    {
      original: Galeria.Galeria11,
      thumbnail: Galeria.Galeria11,
      originalHeight: 500,
      originalWidth: 150,
    },
    {
      original: Galeria.Galeria12,
      thumbnail: Galeria.Galeria12,
      originalHeight: 500,
      originalWidth: 150,
    },
  ];
  return (
    <div className="imgGallery">
      <h2>Galerias</h2>
      <p
        className="gallery-vinculo"
        onClick={() => handleLinkClick(principalImages)}
      >
        PRESENTAN LIBRO “2030: NUEVOS PARADIGMAS EN LAS RELACIONES”.
      </p>
      <p
        className="gallery-vinculo"
        onClick={() => handleLinkClick(womenPower)}
      >
        EXPOSICIÓN WOMENPOPWER.
      </p>
      <p
        className="gallery-vinculo"
        onClick={() => handleLinkClick(titularCeceq)}
      >
        DESIGNAN AL TITULAR DEL CENTRO EDUCATIVO Y CULTURAL “MANUEL GÓMEZ
        MORÍN”.
      </p>
      <div className="gallery">
        <ImageGallery items={images} />
      </div>
    </div>
  );
}
