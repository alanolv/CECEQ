import React from "react";
import "./murales.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import * as Mural from "../../../sources/utilities/ExportMurales/exportMurales";

export default function Murales() {
  const images = [
    {
      original: Mural.Mural1,
      thumbnail: Mural.Mural1,
      originalHeight: 500,
      originalWidth: 150,
    },
    {
      original: Mural.Mural2,
      thumbnail: Mural.Mural2,
      originalHeight: 500,
      originalWidth: 150,
    },
    {
      original: Mural.Mural3,
      thumbnail: Mural.Mural3,
      originalHeight: 500,
      originalWidth: 150,
    },
    {
      original: Mural.Mural4,
      thumbnail: Mural.Mural4,
      originalHeight: 500,
      originalWidth: 150,
    },
    {
      original: Mural.Mural5,
      thumbnail: Mural.Mural5,
      originalHeight: 500,
      originalWidth: 150,
    },
    {
      original: Mural.Mural6,
      thumbnail: Mural.Mural6,
      originalHeight: 500,
      originalWidth: 150,
    },
    {
      original: Mural.Mural7,
      thumbnail: Mural.Mural7,
      originalHeight: 500,
      originalWidth: 150,
    },
    {
      original: Mural.Mural8,
      thumbnail: Mural.Mural8,
      originalHeight: 500,
      originalWidth: 150,
    },
    {
      original: Mural.Mural9,
      thumbnail: Mural.Mural9,
      originalHeight: 500,
      originalWidth: 150,
    },
    {
      original: Mural.Mural10,
      thumbnail: Mural.Mural10,
      originalHeight: 500,
      originalWidth: 150,
    },
    {
      original: Mural.Mural11,
      thumbnail: Mural.Mural11,

      originalHeight: 500,
      originalWidth: 150,
    },
    {
      original: Mural.Mural12,
      thumbnail: Mural.Mural12,
      originalHeight: 500,
      originalWidth: 150,
    },
    {
      original: Mural.Mural13,
      thumbnail: Mural.Mural13,
      originalHeight: 500,
      originalWidth: 150,
    },
    {
      original: Mural.Mural14,
      thumbnail: Mural.Mural14,
      originalHeight: 500,
      originalWidth: 150,
    },
    {
      original: Mural.Mural15,
      thumbnail: Mural.Mural15,
      originalHeight: 500,
      originalWidth: 150,
    },
  ];
  return (
    <div className="murales">
      <h2>Murales</h2>
      <div className="murales-images">
        <ImageGallery items={images} />
        </div>
    </div>
  );
}
