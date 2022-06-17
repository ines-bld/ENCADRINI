import React from "react";
import "./ThemeInfo.css";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import axios from "axios";

const ThemeInfo = () => {
  const { themeId } = useParams();
  const { promoId } = useParams();

  const [theme, setTheme] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/gestionDsthemes/${promoId}/viewTheme/${themeId}`)
      .then((res) => {
        console.log(res.data);
        setTheme(res.data);
        console.log(theme)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="info">
        <AdminSidebar />
        <div className="infoContainer">
          <AdminNavbar />
          <div className="infoWrapper">
            <h4>Id</h4>
            <p>{themeId}</p>
            <h4>Titre</h4>
            <p>{theme.titre}</p>
            <h4>Promotion</h4>
            <p>1CS : {theme.promotion} </p>
            <h4>Proposé par </h4>
            <p>{theme.responsableNom} {theme.responsablePrenom}</p>
            <h4>Résumé</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et doloremagna aliqua. Ut enim
              ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut.
              {theme.resume}
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
