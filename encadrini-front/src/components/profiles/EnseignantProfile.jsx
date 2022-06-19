import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EnseignantSidebar from "../Sidebar/EnseignantSidebar";
import AdminNavbar from "../Navbar/AdminNavbar";
import PERSON from "../../images/PERSON.jpg";
import PicChange from "../PicChanger/PicChange";

const EnseignantProfile = () => {
  const [toggleState, setToggleState] = useState(1);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("user"));
    if (info) {
      setInfo(info);
    }
  }, []);

  const toggleTab = (index) => {
    setToggleState(index);
    console.log("meriem");
  };
  return (
    <>
      <div className="SingleUser">
        <EnseignantSidebar />
        <div className="SingleUserContainer">
          <AdminNavbar />
          <div>
            <div className="row">
              <div className="col-md-3">
                <PicChange />
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <h5>{info.nom}</h5>
                  <h6>{info.email}</h6>
                  <h6>{info.poste}</h6>
                </div>
                <div className="container">
                  <div className="bloc-tabs">
                    <button
                      className={
                        toggleState === 1 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(1)}
                    >
                      Informations personelles
                    </button>
                  </div>
                </div>
              </div>

              <div className="row-info content-tabs">
                <div
                  className={
                    toggleState === 1 ? "content  active-content" : "content"
                  }
                >
                  <div className="detailItem">
                    <span className="ItemKey">Date de naissance</span>
                    <span className="ItemValue vertical-align">
                      {info.dateNaiss}
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="ItemKey">lieu de naissance</span>
                    <span className="ItemValue vertical-align">
                      {info.lieuNaiss}
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="ItemKey">wilaya</span>
                    <span className="ItemValue vertical-align">
                      {info.wilaya}
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="ItemKey">Adresse</span>
                    <span className="ItemValue vertical-align">
                      {info.adresse}
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="ItemKey">situation</span>
                    <span className="ItemValue vertical-align">
                      {info.situation}
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="ItemKey">Numero de telephone</span>
                    <span className="ItemValue vertical-align">
                      {info.numTelph}
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="ItemKey">Sexe</span>
                    <span className="ItemValue vertical-align">
                      {info.sexe}
                    </span>
                  </div>
                </div>
              </div>
              <Link className="linktoResetPw" to="/ResetPassword">
                <button className="EditpwBtn">Modifier le mot de passe</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnseignantProfile;