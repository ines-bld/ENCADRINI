import { useState } from 'react'
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import PERSON from '../../images/PERSON.jpg';
import "./SingleUser.scss";

function SingleUser() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
    console.log("meriem")
  };
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
              <div className="col-md-6">
                <div className="profile-head">
                  <h5>Meriem Baha</h5>
                  <h6>m.baha@esi-sba.dz</h6>
                  <h6>Etudiant</h6>
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
                  <span className="ItemValue vertical-align">21 novembre 2001</span>
                </div>
                <div className="detailItem">
                  <span className="ItemKey">lieu de naissance</span>
                  <span className="ItemValue vertical-align">jijel</span>
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
                  <span className="ItemValue vertical-align">0699690726</span>
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
            </div>
         </div>
       </div>
    </div>
  )
}

export default SingleUser