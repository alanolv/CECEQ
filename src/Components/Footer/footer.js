import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import FacebookLogo from "../../sources/svg/facebook.svg";
import TwitterLogo from "../../sources/svg/xSocial.svg";
import InstagramLogo from "../../sources/svg/instagram.svg";
import TiktokLogo from "../../sources/svg/tiktok.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-description">
          <p>Dirección: Av. Constituyentes Esq. Luis Pasteur S/N Col. Villas del Sur, C.P.76000. Santiago de Querétaro, Qro. Teléfono: (442) 251 9600.
          “Esta obra, programa o acción es de carácter público, no es patrocinado ni promovido por partido político alguno y sus recursos provienen de los ingresos que aportan todos los contribuyentes. Está prohibido el uso de esta obra, programa o acción con fines políticos, electorales, de lucro y otros distintos a los establecidos. Quien haga uso indebido de los recursos de esta obra, programa o acción deberá ser denunciado y sancionado de acuerdo con la ley aplicable y ante la autoridad competente”.</p>
        </div>
        <div className="footer-copy">
          <p>Copyright © 2018 Centro Educativo y Cultural del Estado de Querétaro "Manuel Gómez Morin". All Rights Reserved. 
            <NavLink to="https://www.facebook.com/CentroEducativoGomezMorin?locale=es_LA">
            <img src={FacebookLogo} alt="Facebook" />
            </NavLink>
            <NavLink to="https://www.instagram.com/centroeducativogomezmorin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <img src={InstagramLogo} alt="Facebook" />
            </NavLink>
            <NavLink to="https://x.com/CECEQGomezMorin">
            <img src={TwitterLogo} alt="Facebook" />
            </NavLink>
            <NavLink to="https://www.tiktok.com/@ceceqgomezmorin">
            <img src={TiktokLogo} alt="Facebook" />
            </NavLink>
            </p>
          
        </div>
      </div>
    </div>
  );
}
