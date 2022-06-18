import "./form_utilisateur.css";
import Sidebar from "../../components/Sidebar/AdminSidebar";
import Navbar from "../../components/Navbar/AdminNavbar";
import UploadExcel from "../../components/uploadExcel/uploadExcel";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
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

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

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
        situation: situation,
        sexe: sexe,
        email: email,

        password: password,

        poste: poste,
      })
      .then((response) => {
        console.log(response.config.data);
        localStorage.setItem("user", JSON.stringify(response.config.data));
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
            <Form
              methode="get"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Row>
                <Col>
                  <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                    <Form.Label>IDUSER</Form.Label>
                    <Form.Control
                      className="input"
                      type="text"
                      placeholder="Id User"
                      required
                      onChange={(e) => {
                        setIduser(e.target.value);
                      }}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please type an ID.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>NOM</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Belouad"
                      required
                      onChange={(e) => {
                        setNom(e.target.value);
                      }}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>PRENOM</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ines"
                      required
                      onChange={(e) => {
                        setPrenom(e.target.value);
                      }}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>ADRESSE</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Rue meziani ferhat"
                      onChange={(e) => {
                        setAdresse(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>DATE DE NAISSANCE</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="24 dec 2001"
                      onChange={(e) => {
                        setDatenaiss(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>LIEU DE NAISSANCE</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Tiaret"
                      onChange={(e) => {
                        setLieunaiss(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>WILAYA</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Tiaret"
                      onChange={(e) => {
                        setWilaya(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>SITUATION</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Celibataire"
                      onChange={(e) => {
                        setSituation(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>NUM DE TELEPHONE</Form.Label>
                    <Form.Control
                      placeholder="0584937028"
                      onChange={(e) => {
                        setNumTelph(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>SEXE</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Femme"
                      onChange={(e) => {
                        setSexe(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>EMAIL</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="i.belouad@esi-sba.dz"
                      required
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>PASSWORD</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Mot de passe"
                      required
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>POSTE</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Etudiante"
                      required
                      onChange={(e) => {
                        setPoste(e.target.value);
                      }}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Se rappeler de moi" />
                  </Form.Group>
                </Col>
              </Row>
              <Button type="submit" className="createButton" onClick={create}>
                Confirmer
              </Button>
              {/*
              <center>
                <button className="createButton" onClick={create} type="submit">
                  Confirmer
                </button>
                    </center>*/}
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form_enseignant;
