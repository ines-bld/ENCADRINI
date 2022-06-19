import React from "react";
import "./mes-voeux.css";
import AdminNavbar from "../../../components/Navbar/AdminNavbar";
import EtudiantSidebar from "../../../components/Sidebar/EtudiantSidebar";

const Voeux = () => {
  const data = [
    { id: 1, title: "titre de theme 1" },
    { id: 2, title: "titre de theme 2" },
    { id: 3, title: "titre de theme 3" },
  ];
  return (
    <>
      <div className="new">
        <EtudiantSidebar />
        <div className="newContainer">
          <AdminNavbar />
          <div>
            <h2 className="text2">Mes voeux : </h2>
            {data.map((theme) => (
              <div className="themeCard">
                <div className="themeCircle">
                  <h3>{theme.id}</h3>
                </div>
                <p>{theme.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Voeux;
