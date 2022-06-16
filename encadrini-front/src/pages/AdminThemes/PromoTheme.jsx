import React from "react";
import "./PromoTheme.css";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import { Link } from "react-router-dom";

const PromoTheme = () => {
  return (
    <>
      <div className="ipromo">
        <AdminSidebar />
        <div className="ipromoContainer">
          <AdminNavbar />
          <div className="ipromoHeader">
            <h1>Choisir une promotion</h1>
          </div>
          <Link to="promo" style={{ textDecoration: "none" }}>
            <div className="ipromoCard">
              <div className="ipromoCircle">
                <h3>2CP</h3>
              </div>
              <p>Deuxieme annee classe preparatoire</p>
            </div>
          </Link>
          <Link to="promo" style={{ textDecoration: "none" }}>
            <div className="ipromoCard">
              <div className="ipromoCircle">
                <h3>1CS</h3>
              </div>
              <p>Premiere annee classe superieure</p>
            </div>
          </Link>
          <Link to="promo" style={{ textDecoration: "none" }}>
            <div className="ipromoCard">
              <div className="ipromoCircle">
                <h3>2CS</h3>
              </div>
              <p>Deuxieme annee classe superieure</p>
            </div>
          </Link>
          <Link to="promo" style={{ textDecoration: "none" }}>
            <div className="ipromoCard">
              <div className="ipromoCircle">
                <h3>3CS</h3>
              </div>
              <p>Troisieme annee classe superieure</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PromoTheme;
