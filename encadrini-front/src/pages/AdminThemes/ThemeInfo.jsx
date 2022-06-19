import React from "react";
import "./ThemeInfo.css";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ThemeInfo = () => {
  const { themeId } = useParams();
  const { promoId } = useParams();

  const [theme, setTheme] = useState({ "idTheme": "" , "titre": "", "resume": "", "state": "", "responsableNom": "", "responsablePrenom": "", "promotion": "" });

  const getData = async () => {
    const { data } = await axios.get(`http://localhost:5000/gestionDsthemes/${promoId}/viewTheme/${themeId}`);
    console.log(data[0]);
    setTheme(data[0]);
    console.log(theme.titre);
  };

  useEffect(() => {
    getData();
  }, []);


  const Valider = () => { 
    if(theme.state === "attente"){
       return( 
      <> 
        <button onClick={validation}>valider</button>
        <button onClick={refus}>refuser</button>
      </> 
    ) 
    }  
  }
  
  const validation = async () => {
    const { data } = await axios.get(`http://localhost:5000/gestionDsthemes/${promoId}/viewTheme/${themeId}/validate`);
    console.log(data[0]);
  };
  
  const refus = async () => {
    const { data } = await axios.get(`http://localhost:5000/gestionDsthemes/${promoId}/viewTheme/${themeId}/refuser`);
    console.log(data[0]);
  };

  function getStatut (e) {
    let result;
    switch (e.state) {
      case 'refuse':
        result = "Thème Refusé";
        break;
        case 'attente':
        result = "Thème en cours de traitement ...";
        break;
      case 'valide':
        result = "Thème Validé";
        break;
      default:
        console.log(`Sorry, we are out of ${e.valide}.`);
    }
    return result;
  }

  return (
    <>
      <div className="info">
        <AdminSidebar />
        <div className="infoContainer">
          <AdminNavbar />
          <div className="infoWrapper">
            <h4>Id</h4>
            <p>{themeId}</p>
            <h4>Etat </h4>
            <p>{getStatut(theme)}</p>
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
            
            {<Valider/>}

          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeInfo;
