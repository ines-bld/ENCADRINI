import "./form_utilisateur.css";
import Sidebar from "../../components/Sidebar/AdminSidebar";
import Navbar from "../../components/Navbar/AdminNavbar";
import UploadExcel from "../../components/uploadExcel/uploadExcel";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import axios from "axios";

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
        idUser: idUser,
        nom: nom,
        prenom: prenom,
        adresse: adresse,
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
        localStorage.setItem("user", response.config.data);
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
            <Form action="/create" methode="get">
              {/*<img className=" aligh-left logo" src={encadrini_logo} />*/}
              <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                <Form.Label>IDUSER</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setIduser(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>NOM</Form.Label>
                <Form.Control
                  type="texte"
                  placeholder="Mot de passe"
                  onChange={(e) => {
                    setNom(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>PRENOM</Form.Label>
                <Form.Control
                  type="texte"
                  placeholder="Mot de passe"
                  onChange={(e) => {
                    setPrenom(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="texte"
                  placeholder="Mot de passe"
                  onChange={(e) => {
                    setAdresse(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>datenaiss</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Mot de passe"
                  onChange={(e) => {
                    setDatenaiss(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>lieunaiss</Form.Label>
                <Form.Control
                  type="texte"
                  placeholder="Mot de passe"
                  onChange={(e) => {
                    setLieunaiss(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>wilaya</Form.Label>
                <Form.Control
                  type="texte"
                  placeholder="Mot de passe"
                  onChange={(e) => {
                    setWilaya(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>situation</Form.Label>
                <Form.Control
                  type="texte"
                  placeholder="Mot de passe"
                  onChange={(e) => {
                    setSituation(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>numtelph</Form.Label>
                <Form.Control
                  placeholder="Mot de passe"
                  onChange={(e) => {
                    setNumTelph(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>sexe</Form.Label>
                <Form.Control
                  type="texte"
                  placeholder="Mot de passe"
                  onChange={(e) => {
                    setSexe(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>email</Form.Label>
                <Form.Control
                  type="texte"
                  placeholder="Mot de passe"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>password</Form.Label>
                <Form.Control
                  type="texte"
                  placeholder="Mot de passe"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>post</Form.Label>
                <Form.Control
                  type="texte"
                  placeholder="Mot de passe"
                  onChange={(e) => {
                    setPoste(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Se rappeler de moi" />
              </Form.Group>
              <center>
                <button className="loginButton" onClick={create} type="button">
                  Se connecter
                </button>
              </center>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form_enseignant;
