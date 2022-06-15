import "./form_utilisateur.css";
import Sidebar from "../../components/Sidebar/AdminSidebar";
import Navbar from "../../components/Navbar/AdminNavbar";
import UploadExcel from "../../components/uploadExcel/uploadExcel";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Form_enseignant = () => {
  axios.defaults.withCredentials = true;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [date, setDate] = useState("");
  const [wilaya, setWilaya] = useState("");
  const [poste, setPoste] = useState("");

  const [sexe, setSexe] = useState("");
  const [idUser, setIduser] = useState("");

  const [situation, setSituation] = useState("");

  const [numTelph, setNumTelph] = useState("");

  let navigate = useNavigate();
  const create = () => {
    axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:5000/create", {
        idUser: idUser,
        nom: nom,
        prenom: prenom,

        email: email,
        date: date,
        password: password,
        wilaya: wilaya,
        situation: situation,
        numTelph: numTelph,
        sexe: sexe,

        poste: poste,
      })
      .then((response) => {
        //localStorage.setItem("user", JSON.stringify(response.data.user));
        // setPoste(response.data.poste);`
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
                <label>idUser</label>
                <input
                  required
                  type="text"
                  placeholder="belouad"
                  onChange={setIduser}
                />
              </div>
              <div className="formInput">
                <label>Nom</label>
                <input
                  required
                  type="text"
                  placeholder="belouad"
                  onChange={setNom}
                />
              </div>
              <div className="formInput">
                <label>Prenom</label>
                <input
                  required
                  type="text"
                  placeholder="Ines"
                  onChange={setPrenom}
                />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input
                  required
                  type="mail"
                  placeholder="i.belouad@esi-sba.com"
                  onChange={setEmail}
                />
              </div>
              <div className="formInput">
                <label>Date de naissance</label>
                <input
                  required
                  type="date"
                  placeholder="24-12-2001"
                  onChange={setDate}
                />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input required type="password" onChange={setPassword} />
              </div>
              <div className="formInput">
                <label>wilaya</label>
                <input
                  required
                  type="text"
                  placeholder="Tiaret"
                  onChange={setWilaya}
                />
              </div>
              <div className="formInput">
                <label>Situation</label>
                <input
                  required
                  type="text"
                  placeholder="celibataire"
                  onChange={setSituation}
                />
              </div>
              <div className="formInput">
                <label>telephone</label>
                <input
                  required
                  type="text"
                  placeholder="0557945678"
                  onChange={setNumTelph}
                />
              </div>
              <div className="formInput">
                <label>Sexe</label>
                <input
                  required
                  type="text"
                  placeholder="Femme"
                  onChange={setSexe}
                />
              </div>
              <div className="formInput">
                <label>Poste</label>
                <input
                  required
                  type="text"
                  placeholder="etudiante"
                  onChange={setPoste}
                />
              </div>
              <button type="button" onClick={create}>
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
