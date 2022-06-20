import React from "react";
import { VictoryPie } from "victory-pie";
import "./resultatAdmin.css";
import AdminSidebar from "../../../components/Sidebar/AdminSidebar";
import AdminNavbar from "../../../components/Navbar/AdminNavbar";

const myData1 = [
  { x: "theme 1", y: 500 },
  { x: "theme 2", y: 200 },
  { x: "theme 3", y: 300 },
  { x: "theme 4", y: 300 },
  { x: "theme 5", y: 100 },
  { x: "theme 6", y: 300 },
];
const myData2 = [
  { x: "theme 1", y: 500 },
  { x: "theme 2", y: 200 },
  { x: "theme 3", y: 300 },
  { x: "theme 4", y: 300 },
  { x: "theme 5", y: 100 },
  { x: "theme 6", y: 300 },
];
const myData3 = [
  { x: "theme 1", y: 500 },
  { x: "theme 2", y: 200 },
  { x: "theme 3", y: 300 },
  { x: "theme 4", y: 300 },
  { x: "theme 5", y: 100 },
  { x: "theme 6", y: 300 },
];

const ResultatAdmin = () => {
  return (
    <>
      <div className="home">
        <AdminSidebar />
        <div className="homeContainer">
          <AdminNavbar />
          <h1 className="titreA">Premier choix:</h1>
          <div className="circleD">
            <div className="circleA">
              <VictoryPie data={myData1} radius={100} />
            </div>
            <div className="themesA">
              {myData1.map((theme) => (
                <>
                  <li className="themeA">
                    <a href="/affectation">{theme.x}</a>
                  </li>
                  <br />
                </>
              ))}
            </div>
          </div>
          <h1 className="titreA">Deuxième choix:</h1>
          <div className="circleD">
            <div className="circleA">
              <VictoryPie data={myData2} radius={100} />
            </div>
            <div className="themesA">
              {myData2.map((theme) => (
                <>
                  <li className="themeA">
                    <a href="/affectation">{theme.x}</a>
                  </li>
                  <br />
                </>
              ))}
            </div>
          </div>
          <h1 className="titreA">Troisième choix:</h1>
          <div className="circleD">
            <div className="circleA">
              <VictoryPie data={myData3} radius={100} />
            </div>
            <div className="themesA">
              {myData3.map((theme) => (
                <>
                  <li className="themeA">
                    <a href="/affectation">{theme.x}</a>
                  </li>
                  <br />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultatAdmin;
