import React from "react";
import NavBar from "../Components/NavBar/navBar";
import Footer from "../Components/Footer/footer";
import "./layout.css";

export default function Layout({children}){{
    return(
        <>
        <div className="navbar">
        <NavBar/>
        </div>
        <div className="content">
        {children}
        </div>
        <div className="footer">
        <Footer/>
        </div>
        </>
    )
}}