import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import PERSON from '../../images/PERSON.jpg';
import "./SingleUser.scss";
import React from 'react';


function SingleUser() {
  const { compteId } = useParams();
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
    console.log("meriem")
  };

  const [user, setUser] = useState([]);


  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:5000/gestionDsComptes/viewuser/${compteId}`);
    setUser(res.data[0]);
    console.log(res.data[0].nom);
  };

  //   Meriem BAHA
  // 22:51 (il y a 5 minutes)
  // À moi
  function getDate(e) {
    let result;
    var mydate = new Date(e.dateNaiss);
     result = mydate.toDateString();
    return result;
  }

  function getSex(e) {
    let result;
    if (e.sexe === 'M') {
      result = "Homme";
    } else {
      if (e.sexe === 'F') {
        result = "Femme";
      }
    }
    return result;
  }

  function getSituation(e) {
    let result;
   switch (e.situation) {
    case 'c':
    result = "Célibataire";
    break;
    case 'm':     
      if (e.sexe === 'M') {
        result = "Marié";
      } else {
        if (e.sexe === 'F') {
          result = "Mariée";
        }
      }
      break;
    case 'd':
      if (e.sexe === 'M') {
        result = "Divorcé";
      } else {
        if (e.sexe === 'F') {
          result = "Divorcée";
        }
      }
    break;
    case 'v':
      if (e.sexe === 'M') {
        result = "Veuf";
      } else {
        if (e.sexe === 'F') {
          result = "Veuve";
        }
      }
    break;
  default:
    result = "";
}
    return result;
  }


  const ShowUser = () => {
    if (user.poste === "Entreprise") {
      return (
        <>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>{user.nom} </h5>
              <h6>{user.poste}</h6>
            </div>
            <div className="container-tabs">
              <div className="bloc-tabs">
                <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
                  Informations générales
                </button>
                <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
                  Contact
                </button>
              </div>
            </div>
          </div>
          <div className='row-info content-tabs'>
            <div className={toggleState === 1 ? "content  active-content" : "content"}>
              <div className="detailItem">
                <span className="ItemKey">Adresse</span>
                <span className="ItemValue vertical-align">{user.adresse}</span>
              </div>
              <div className="detailItem">
                <span className="ItemKey">Description</span>
                <span className="ItemValue vertical-align">{user.descrip}</span>
              </div>
            </div>

            <div className={toggleState === 2 ? "content  active-content" : "content"}>
              <div className="detailItem">
                <span className="ItemKey">Email</span>
                <span className="ItemValue vertical-align">{user.email}</span>
              </div>
              <div className="detailItem">
                <span className="ItemKey">Numéro de téléphone</span>
                <span className="ItemValue vertical-align">{user.numTelph}</span>
              </div>
            </div>
          </div>
        </>
      )
    }
    else {
      return (
        <>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>Id : {compteId}</h5>
              <h5>{user.nom} {user.prenom}</h5>
              <h6>{user.poste}</h6>
            </div>
            <div className="container-tabs">
              <div className="bloc-tabs">
                <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
                  Informations générales
                </button>
                <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
                  Contact
                </button>
              </div>
            </div>
          </div>
          <div className='row-info content-tabs'>
            <div className={toggleState === 1 ? "content  active-content" : "content"}>
              <div className="detailItem">
                <span className="ItemKey">Date de naissance</span>
                <span className="ItemValue vertical-align">{getDate(user)}</span>
              </div>
              <div className="detailItem">
                <span className="ItemKey">lieu de naissance</span>
                <span className="ItemValue vertical-align">{user.lieuNaiss}</span>
              </div>
              <div className="detailItem">
                <span className="ItemKey">wilaya</span>
                <span className="ItemValue vertical-align">{user.wilaya}</span>
              </div>
              <div className="detailItem">
                <span className="ItemKey">Adresse</span>
                <span className="ItemValue vertical-align">{user.adresse}</span>
              </div>
              <div className="detailItem">
                <span className="ItemKey">situation</span>
                <span className="ItemValue vertical-align">{getSituation(user)}</span>
              </div>
              <div className="detailItem">
                <span className="ItemKey">Sexe</span>
                <span className="ItemValue vertical-align">{getSex(user)}</span>
              </div>
            </div>
            <div className={toggleState === 2 ? "content  active-content" : "content"}>
              <div className="detailItem">
                <span className="ItemKey">Email</span>
                <span className="ItemValue vertical-align">{user.email}</span>
              </div>
              <div className="detailItem">
                <span className="ItemKey">Numéro de téléphone</span>
                <span className="ItemValue vertical-align">{user.numTelph}</span>
              </div>
            </div>
          </div>
        </>
      )
    }
  }


  return (
    <div className='SingleUser'>
      <AdminSidebar />
      <div className="SingleUserContainer">
        <AdminNavbar />
        <div>
          <div className="row">
            <div className="col-md-3">
              <img className="profilepic" src={PERSON} alt="person" />
            </div>
            {<ShowUser />}

          </div>
        </div>
      </div>
    </div>

  )
}

export default SingleUser