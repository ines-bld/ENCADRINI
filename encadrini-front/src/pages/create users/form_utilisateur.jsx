import "./form_utilisateur.css";
import Sidebar from "../../components/Sidebar/AdminSidebar";
import Navbar from "../../components/Navbar/AdminNavbar";
import UploadExcel from "../../components/uploadExcel/uploadExcel";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form } from "formik";

const Form_enseignant = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [dateNaiss, setDatenaiss] = useState("");
  const [lieuNaiss, setLieunaiss] = useState("");
  const [adresse, setAdresse] = useState("");

  const [wilaya, setWilaya] = useState("");
  const [poste, setPoste] = useState("");

  const [sexe, setSexe] = useState("");
  const [idUser, setIduser] = useState("");

  const [situation, setSituation] = useState("");

  const [numTelph, setNumTelph] = useState("");

  //  let navigate = useNavigate();
  const create = () => {
    axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:3000/create", {
        //  idUser: idUser,
        nom: nom,
        prenom: prenom,
        //  adresse: adresse,
        dateNaiss: dateNaiss,
        lieuNaiss: lieuNaiss,
        wilaya: wilaya,
        numTelph: numTelph,
        // situation: situation,
        sexe: sexe,
        email: email,

        password: password,

        poste: poste,
      })
      .then((response) => {
        //   localStorage.setItem("user", JSON.stringify(response.data.user));
        //  setPoste(response.data.poste);`
        console.log(response);
      });
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="excel">
          <UploadExcel />
        </div>
        <div className="bottom">
          <div className="right">
            <form action="/create" method="POST">
              <div className="formInput">
                <label>nom</label>
                <input
                  required
                  type="text"
                  placeholder="belouad"
                  onChange={(e) => {
                    setNom(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Prenom</label>
                <input
                  required
                  type="text"
                  placeholder="Ines"
                  onChange={(e) => {
                    setPrenom(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>lieunaiss</label>
                <input
                  required
                  type="text"
                  placeholder="Ines"
                  onChange={(e) => {
                    setLieunaiss(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>wilaya</label>
                <input
                  required
                  type="text"
                  placeholder="Ines"
                  onChange={setWilaya}
                />
              </div>

              <div className="formInput">
                <label>num</label>
                <input
                  required
                  type="text"
                  placeholder="Ines"
                  onChange={(e) => {
                    setNumTelph(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Sexe</label>
                <input
                  required
                  type="text"
                  placeholder="Femme"
                  onChange={(e) => {
                    setSexe(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input
                  required
                  type="mail"
                  placeholder="i.belouad@esi-sba.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>password</label>
                <input
                  required
                  type="text"
                  placeholder="etudiante"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Poste</label>
                <input
                  required
                  type="text"
                  placeholder="etudiante"
                  onChange={(e) => {
                    setPoste(e.target.value);
                  }}
                />
              </div>
              <button type="submit" onClick={create}>
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form_enseignant;
