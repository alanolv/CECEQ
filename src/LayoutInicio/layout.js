import React from "react";
import NavBar from "../Components/NavBar/navBar";
import Footer from "../Components/Footer/footer";
import "./layout.css";
import { useLocation } from "react-router-dom";

export default function Layout({ children }) {
  {
    const location = useLocation();

    return (
      <div className="content-layout">
        <div className="navbars">
          <NavBar />
        </div>
        <div className="content">
          {location.pathname !== "/" && (
            <>
              <div clasname="banner"></div>
              <div className="social-sidebar"></div>
              {children}
            </>
          )}
          {children}
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
