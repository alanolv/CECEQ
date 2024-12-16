import React, { useEffect, useState } from "react";
import "./layout.css";
import { useLocation } from "react-router-dom";
import NavBar from "../../Components/NavBar/navBar";
import Footer from "../../Components/Footer/footer";
import FacebookCard from "../../Components/FacebookCard/facebookCard";
import TwiterCard from "../../Components/TwiterCard/twiterCard";
import { banners } from "../../sources/utilities/Banners/BannerPaginas";

export default function Layout({ children }) {
  const location = useLocation();
  const [bannerImage, setBannerImage] = useState("");

  const excludedBannerRoutes = ["/", "/Murales","/Galerias","/Agenda","/SitiosInteres","/Boletines","/Triptico"];
  const excludedSidebarRoutes = ["/", "/Murales", "/Galerias","/Agenda"];

  const isExcludedRoute = (routes) => routes.includes(location.pathname);

  useEffect(() => {
    const banner = banners.find((b) => b.page === location.pathname);
    if (banner) {
      setBannerImage(banner.image);
    } else {
      setBannerImage("");
    }
  }, [location.pathname]);

  return (
    <div className="content-layout">
      <div className="navbars">
        <NavBar />
      </div>
      <div className="content">
        {!isExcludedRoute(excludedBannerRoutes) && bannerImage && (
          <div className="banner">
            <img
              src={bannerImage}
              alt="Banner"
              className="banner-image"
              class="d-block w-100 custom-image"
            />
          </div>
        )}
        <div className="blog-content">
          <div className="children-content">{children}</div>
          {!isExcludedRoute(excludedSidebarRoutes) && (
            <div className="social-sidebar">
              <FacebookCard />
              <TwiterCard />
            </div>
          )}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}