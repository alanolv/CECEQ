import React from "react";
import "./layout.css";
import { useLocation } from "react-router-dom";
import NavBar from "../../Components/NavBar/navBar";
import Footer from "../../Components/Footer/footer";
import FacebookCard from "../../Components/FacebookCard/facebookCard";

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="content-layout">
      <div className="navbars">
        <NavBar />
      </div>
      <div className="content">
        {location.pathname !== "/" && (
          <>
            <div className="banner"></div>
            <div className="social-sidebar">
              <FacebookCard />
            </div>
          </>
        )}
        <div className="children-content">
          {children}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}