import React, { useState } from "react";
import Select from "react-select";
import "./affectationG.css";
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import AdminNavbar from "../../components/Navbar/AdminNavbar";

const AffectationG = () => {
  const data = [
    { id: 1, def: "theme 01 " },
    { id: 2, def: "theme 02" },
    { id: 3, def: "theme 03" },
    { id: 4, def: "theme 04" },
  ];
  const equipes = [
    {
      value: "1",
      label: "équipe 01",
    },
    {
      value: "2",
      label: "equipe 02",
    },
    {
      value: "3",
      label: "equipe 03",
    },
    {
      value: "4",
      label: "equipe 04",
    },
    {
      value: "5",
      label: "equipe 05",
    },
  ];

  const [equipe, setEquipe] = React.useState("");

  const handleChange = (event) => {
    setEquipe(event.target.value);
  };
  return (
    <>
      <div className="equipe">
        <AdminSidebar />
        <div className="equipeContainer">
          <AdminNavbar />
          <h1 className="titreAffG">Affecter des équipes</h1>
          {data.map((theme) => (
            <div className="themeCardG">
              <p>{theme.def}</p>
              <br />
              <Select
                className="multiselectG"
                placeholder="Choisir des equipes"
                name="equipes"
                options={equipes}
                isMulti
              />
              <button className="affecterGbtn">Affecter</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AffectationG;
