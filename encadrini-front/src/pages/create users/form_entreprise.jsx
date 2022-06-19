import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/AdminSidebar";
import Navbar from "../../components/Navbar/AdminNavbar";
import UploadExcel from "../../components/uploadExcel/uploadExcel";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Form_entreprise = () => {
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
  const [descrip, setDescrip] = useState(null);

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


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
      situation: situation,
      sexe: sexe,
      email: email,
      password: password,
      promo: promo,
      moy: moy,
      grade: grade,
      descrip : descrip
    })
      ;
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
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                <Form.Label>IDENTREPRISE</Form.Label>
                <Form.Control
                  className="input"
                  type="email"
                  placeholder="Id d'entreprise"
                  required
                  onChange={(e) => {
                    setIduser(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>NOM</Form.Label>
                <Form.Control type="text" placeholder="emerald's" required  onChange={(e) => {
                        setNom(e.target.value);
                      }} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>ADRESSE</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="sidi bel abbes algerie"
                  onChange={(e) => {
                    setAdresse(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>TELEPHONE</Form.Label>
                <Form.Control type="texte" placeholder="046983472"  onChange={(e) => {
                        setNumTelph(e.target.value);
                      }} />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                required
              >
                <Form.Label>EMAIL</Form.Label>
                <Form.Control type="email" placeholder="emeralds22@gmail.com" onChange={(e) => {
                  setEmail(e.target.value);
                }} />
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
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>DESCRIPTION</Form.Label>
                <Form.Control type="text" placeholder="bla bla bla"   onChange={(e) => {
                    setDescrip(e.target.value);
                  }}/>
              </Form.Group>
              <Button type="submit" className="createButton" onClick={create}>
                Confirmer
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form_entreprise;
