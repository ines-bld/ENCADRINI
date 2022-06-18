import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import "./equipe.css";
import React, { useState } from "react";
import UploadExcel from "../../components/uploadExcel/uploadExcel";
import { Form, Button } from "react-bootstrap";

const Equipe = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="equipe">
      <AdminSidebar />
      <div className="equipeContainer">
        <AdminNavbar />
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
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>NOM</Form.Label>
                <Form.Control type="text" placeholder="emerald's" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>ADRESSE</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="sidi bel abbes algerie"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>TELEPHONE</Form.Label>
                <Form.Control type="texte" placeholder="046983472" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                required
              >
                <Form.Label>EMAIL</Form.Label>
                <Form.Control type="email" placeholder="emeralds22@gmail.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>PASSWORD</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Mot de passe"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>DESCRIPTION</Form.Label>
                <Form.Control type="text" placeholder="bla bla bla" />
              </Form.Group>
              <Button type="submit" className="createButton">
                Confirmer
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipe;
