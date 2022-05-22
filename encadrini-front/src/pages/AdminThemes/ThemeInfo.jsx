import React from "react";
import "./ThemeInfo.scss";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import { useParams } from "react-router-dom";

const ThemeInfo = () => {
  const { themeId } = useParams();
  return (
    <>
      <div className="info">
        <AdminSidebar />
        <div className="infoContainer">
          <AdminNavbar />
          <div className="infoWrapper">
            <p>id: {themeId}</p>
            <h4>Titre</h4>
            <p>Gestion des PFES</p>
            <h4>Promotion</h4>
            <p>1CS</p>
            <h4>Résumé</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et doloremagna aliqua. Ut enim
              ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut.
            </p>
            <button>valider</button>
            <button>refuser</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeInfo;
