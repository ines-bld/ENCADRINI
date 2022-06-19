import React from 'react'
import './ViewTheme.css'
import {useParams} from 'react-router';
import {useState, useEffect} from 'react';
import axios from "axios";

const ViewMyTheme = () => {
  const {themeId} = useParams();
  const [theme, setTheme] = useState([]);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState([]);


  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:5000/api/ih/${themeId}`);
    setTheme(res.data[0]);
    console.log(res.data[0]);
  };

  const Loading = () => {
    return(
      <>
          Loading....
      </>
    )
  }
 
  function getPromo(e) {
    let result;
   switch (e.promotion) {
    case 1:
    result = "1CP";
    break;
    case 2:     
        result = "2CP";
      break;
    case 3:
        result = "1CS";
    break;
    case 4:
        result = "2CS";
    break;
    case 5:
        result = "3CS";
    break;
  default:
    result = "";
}
    return result;
  }

  function getStatut(e) {
    let result;
    switch (e.state) {
      case 'refuse':
        result = "Refusé";
        break;
      case 'attente':
        result = "En attente";
        break;
      case 'valide':
        result = "Validé";
        break;
      default:
        console.log(`Sorry, we are out of ${e.state}.`);
    }
    return result;
  }


  const ShowTheme = () => {
    return(
      <>
    <div className='mainContainer'>
    <div className='title'>Titre</div>
    <div className="elementContainer Regular">{theme.titre}</div>
    <div className='title'>Promotion</div>
    <div className="elementContainer Regular">{getPromo(theme)}</div>
    <div className='title'>Etat du thème</div>
    <div className="elementContainer Regular">{getStatut(theme)}</div>
    <div className='title'>Responsable</div>
    <div className="elementContainer Regular">{theme.responsableNom} {theme.responsablePrenom} {theme.company}</div>
    <div className='title'>Résumé</div>
    <div className="elementContainer Light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.{theme.resume}</div>
    </div>
      </>
    )
  }
  return (
    <div className='row'>
    {<ShowTheme/>}
    </div>
  )
}

export default ViewMyTheme