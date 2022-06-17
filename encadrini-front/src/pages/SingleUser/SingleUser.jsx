import { useState,  useEffect  } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import PERSON from '../../images/PERSON.jpg';
import "./SingleUser.scss";
import React from 'react';


function SingleUser() {
  const {compteId} = useParams();
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




  const ShowEntreprise = () => { 
    return( 
      <> 
          <div className="col-md-6">
                <div className="profile-head">
                <h5>Id : {compteId}</h5>
                  <h5>{user.nom}</h5>
                  <h6>{user.email}</h6>
                  <h6>{user.poste}</h6>
                  </div>
                  <div className="container">
                    <div className="bloc-tabs">
                    <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
                       Informations personelles
                   </button>
                   <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
                       Informations projet
                   </button>
                    </div>
                    </div>
          </div>
          <div className='row-info content-tabs'> 
              <div className={toggleState === 1 ? "content  active-content" : "content"}>
                <div className="detailItem">
                  <span className="ItemKey">Date de naissance</span>
                  <span className="ItemValue vertical-align">{user.dateNaiss}</span>
                </div>
                <div className="detailItem">
                  <span className="ItemKey">lieu de naissance</span>
                  <span className="ItemValue vertical-align">{user.lieuNaiss}</span>
                </div>
                <div className="detailItem">
                  <span className="ItemKey">wilaya</span>
                  <span className="ItemValue vertical-align">jijel</span>
                </div>
                <div className="detailItem">
                  <span className="ItemKey">Adresse</span>
                  <span className="ItemValue vertical-align">ben Achour</span>
                </div>
                <div className="detailItem">
                  <span className="ItemKey">situation</span>
                  <span className="ItemValue vertical-align">Celibataire</span>
                </div>
                <div className="detailItem">
                  <span className="ItemKey">Numero de telephone</span>
                  <span className="ItemValue vertical-align">{user.numTelph}</span>
                </div>
                <div className="detailItem">
                  <span className="ItemKey">Sexe</span>
                  <span className="ItemValue vertical-align">Female</span>
                </div>
            </div>
           
            <div className={toggleState === 2 ? "content  active-content" : "content"}>
                <div className="detailItem">
                  <span className="ItemKey">Promotion</span>
                  <span className="ItemValue vertical-align">1cs</span>
                </div>
                <div className="detailItem">
                  <span className="ItemKey">encadreur</span>
                  <span className="ItemValue vertical-align">bensaber</span>
                </div>
                <div className="detailItem">
                  <span className="ItemKey">Numéro de l'équipe</span>
                  <span className="ItemValue vertical-align">2</span>
                </div>
            </div>
            </div>
      </> 
    ) 
  }
  
  return (
    <div className='SingleUser'>
       <AdminSidebar/>
       <div className="SingleUserContainer">
         <AdminNavbar/>
         <div>
            <div className="row">
              <div className="col-md-3">
                <img className="profilepic" src={PERSON} alt="person" />
              </div>
              {<ShowEntreprise/>}
           
            </div>
            </div>
         </div>
       </div>
  
  )
}

export default SingleUser