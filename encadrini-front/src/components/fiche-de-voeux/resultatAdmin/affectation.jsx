import React from "react";
import AdminSidebar from "../../../components/Sidebar/AdminSidebar";
import AdminNavbar from "../../../components/Navbar/AdminNavbar";
import "./affectation.css";

const Affectation = () => {
  const data = [
    { id: 2020, equipe: "1", def: "équipe 01" },
    { id: 2019, equipe: "2", def: "équipe 02" },
    { id: 2018, equipe: "3", def: "équipe 03" },
    { id: 2017, equipe: "4", def: "équipe 04" },
  ];
  return (
    <>
      <div className="home">
        <AdminSidebar />
        <div className="homeContainer">
          <AdminNavbar />
          <h1 className="titreAff">Affecter des équipes</h1>
          {data.map((equipe) => (
            <div className="equipeCard">
              <p>{equipe.def}</p>
              <button className="affecterbtn">Affecter</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Affectation;
