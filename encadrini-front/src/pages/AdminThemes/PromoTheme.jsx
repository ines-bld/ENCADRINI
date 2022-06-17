import React from "react";
import "./PromoTheme.css";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import { Link } from "react-router-dom";

const PromoTheme = () => {
  const data = [
    { id: 2, promo: "2CP", def: "Deuxieme annee classe preparatoire" },
    { id: 3, promo: "1CS", def: "Premiere annee classe superieure" },
    { id: 4, promo: "2CS", def: "Deuxieme annee classe superieure" },
    { id: 5, promo: "3CS", def: "Troisieme annee classe superieure" },
  ];

  
  return (
    <>
      <div className="ipromo">
        <AdminSidebar />
        <div className="ipromoContainer">
          <AdminNavbar />
          <div className="ipromoHeader">
            <h1>Choisir une promotion</h1>
          </div>
          {data.map((promo) => (
            <Link
              to={`/gestionDsthemes/${promo.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="ipromoCard">
                <div className="ipromoCircle">
                  <h3>{promo.promo}</h3>
                </div>
                <p>{promo.def}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default PromoTheme;
