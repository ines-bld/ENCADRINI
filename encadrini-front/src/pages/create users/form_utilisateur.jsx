import "./form_utilisateur.css";
import Sidebar from "../../components/Sidebar/AdminSidebar";
import Navbar from "../../components/Navbar/AdminNavbar";
import UploadExcel from "../../components/uploadExcel/uploadExcel";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


const Form_enseignant = () => {
  const { role } = useParams();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [nom, setNom] = useState(null);
  const [prenom, setPrenom] = useState(null);
  const [dateNaiss, setDatenaiss] = useState(null);
  const [lieuNaiss, setLieunaiss] = useState(null);
  const [adresse, setAdresse] = useState(null);
  const [wilaya, setWilaya] = useState(null);
  const [sexe, setSexe] = useState(null);
  const [idUser, setIduser] = useState(null);
  const [situation, setSituation] = useState("c");
  const [numTelph, setNumTelph] = useState(null);
  const [promo, setPromo] = useState(null);
  const [moy, setMoy] = useState(null);
  const [grade, setGrade] = useState(null);


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

  const Champs = () => {
    if (role === "etudiant") {
      return (
        <>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>PROMOTION</Form.Label>
            <Form.Control
              type="text"
              placeholder="3cs"
              onChange={(e) => {
                setPromo(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>MOYENNE</Form.Label>
            <Form.Control
              placeholder="15"
              onChange={(e) => {
                setMoy(e.target.value);
              }}
            />
          </Form.Group>
        </>
      )
    }
    else {
      if (role === "enseignant") {
        return (
          <>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>GRADE</Form.Label>
              <Form.Control
                placeholder="MAA, MAB , PR , MCA ,MCB"
                onChange={(e) => {
                  setGrade(e.target.value);
                }}
              />
            </Form.Group>
          </>
        )
      }
    }
  }

  const create = async (e) => {
    console.log("inside axios", role)
    e.preventDefault();
    await axios.post(`http://localhost:5000/creationDesUtilisateurs/single`, {
      idUser: idUser,
      nom: nom,
      prenom: prenom,
      adresse: adresse,
      dateNaiss: dateNaiss,
      lieuNaiss: lieuNaiss,
      wilaya: wilaya,
      numTelph: numTelph,
      situation: setSituat(situation),
      sexe: setSex(sexe),
      email: email,
      password: password,
      promo: setPromoo(promo),
      moy: moy,
      grade : grade
    })
      ;
  }

  function setPromoo(e) {
    let result;
    switch (e) {
      case "1CP":
      case "1cp":
        result = "1";
        break;
      case "2CP":
      case "2cp":
        result = "2";
        break;
      case "1CS":
      case "1cs":
        result = "3";
        break;
      case "2CS":
      case "2cs":
        result = "4";
        break;
      case "3CS":
      case "3cs":
        result = "5";
        break;
      default:
        result = null;
    }
    return result;
  }

  function setSex(e) {
    let result;
    if (e === 'Homme' || e === 'homme') {
      result = "M";
    } else {
      if (e === 'Femme' || e === 'femme') {
        result = "F";
      }else{result = null}
    }
    return result;
  }

  function setSituat(e) {
    return e.substring(0, 1).toLowerCase();
  }

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
                    <Form.Label>N° WILAYA</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="14"
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
                      placeholder="Célibataire"
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
                      placeholder="Femme | Homme"
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
                      type="text"
                      placeholder="Mot de passe"
                      required
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  {<Champs />}

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
