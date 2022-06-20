import React, { useState } from "react";
import Box from "@mui/material/Box";
import "./remplir-fiche.css";
import Select from "react-select";
import AdminNavbar from "../../../components/Navbar/AdminNavbar";
import EtudiantSidebar from "../../../components/Sidebar/EtudiantSidebar";
import { Link } from "react-router-dom";

const themes = [
  {
    value: "1",
    label: "theme1",
  },
  {
    value: "2",
    label: "theme2",
  },
  {
    value: "3",
    label: "theme3",
  },
  {
    value: "4",
    label: "theme4",
  },
  {
    value: "5",
    label: "theme5",
  },
  {
    value: "6",
    label: "theme6",
  },
];

const RemplirFiche = () => {
  const [theme, ddlvalue] = useState(themes.value);

  const ddlHandler = (e) => {
    ddlvalue(e.value);
  };

  return (
    <>
      <div className="new">
        <EtudiantSidebar />
        <div className="newContainer">
          <AdminNavbar />
          <div>
            <h2 className="text">Ma fiche de voeux : </h2>

            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "50ch" },
              }}
              className="fiche"
            >
              <Select
                className="select"
                options={themes}
                placeholder="Premier Choix"
                onChange={ddlHandler}
              />
              <br />
              <Select
                className="select"
                options={themes}
                placeholder="Deuxième choix"
                filterOption={(option) => option.value !== ""}
              />
              <br />
              <Select
                placeholder="Troisième choix"
                className="select"
                options={themes}
              />
              <br />
              <Link to="/affichervoeux">
                <button type="submit" className="btnfiche">
                  Confirmer
                </button>
              </Link>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};
export default RemplirFiche;
