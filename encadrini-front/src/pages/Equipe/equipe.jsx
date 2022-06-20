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
              <Form.Group className="mb-3 mt-4">
                <Form.Label>NUMERO EQUIPE</Form.Label>
                <Form.Control
                  className="input"
                  type="text"
                  placeholder="001"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 mt-4">
                <Form.Label>NOMBRE MEMBRES</Form.Label>
                <Form.Control
                  className="input"
                  type="text"
                  placeholder="6"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 mt-4">
                <Form.Label>CHEF D'EQUIPE</Form.Label>
                <Form.Control
                  className="input"
                  type="text"
                  placeholder="Ines BELOUAD"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>MEMBRE 2</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ibtihel HATTABI"
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                required
              >
                <Form.Label>MEMBRE 3</Form.Label>
                <Form.Control type="text" placeholder="Rihab Medjda slimani" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                required
              >
                <Form.Label>MEMBRE 4</Form.Label>
                <Form.Control type="texte" placeholder="Asma LAALA" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                required
              >
                <Form.Label>MEMBRE 5</Form.Label>
                <Form.Control type="text" placeholder="Sabrina OUKRIF" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>MEMBRE 6</Form.Label>
                <Form.Control type="text" placeholder="Meriem BAHA" />
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
