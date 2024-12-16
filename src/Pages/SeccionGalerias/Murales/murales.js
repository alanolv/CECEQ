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
    },
    {
      original: Mural.Mural2,
      thumbnail: Mural.Mural2,
    },
    {
      original: Mural.Mural3,
      thumbnail: Mural.Mural3,
    },
    {
      original: Mural.Mural4,
      thumbnail: Mural.Mural4,
    },
    {
      original: Mural.Mural5,
      thumbnail: Mural.Mural5,
    },
    {
      original: Mural.Mural6,
      thumbnail: Mural.Mural6,
    },
    {
      original: Mural.Mural7,
      thumbnail: Mural.Mural7,
    },
    {
      original: Mural.Mural8,
      thumbnail: Mural.Mural8,
    },
    {
      original: Mural.Mural9,
      thumbnail: Mural.Mural9,
    },
    {
      original: Mural.Mural10,
      thumbnail: Mural.Mural10,
    },
    {
      original: Mural.Mural11,
      thumbnail: Mural.Mural11,
    },
    {
      original: Mural.Mural12,
      thumbnail: Mural.Mural12,
    },
    {
      original: Mural.Mural13,
      thumbnail: Mural.Mural13,
    },
    {
      original: Mural.Mural14,
      thumbnail: Mural.Mural14,
    },
    {
      original: Mural.Mural15,
      thumbnail: Mural.Mural15,
    },
  ];
  return (
    <div className="murales">
      <h2>Murales</h2>
      <ImageGallery items={images} />
    </div>
  );
}
