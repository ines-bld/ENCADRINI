import { useContext, useState, useEffect } from "react";
import { EmployeeContext } from "./contexts/EmployeeContext";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditForm from "./EditForm";
import "./Employeelist.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";

const Employee = ({ employee }) => {
  const { deleteEmployee } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [employee]);



  function sortPosteid (e) {
    let result;
    if (e.poste === "Entreprise") {
      result = e.idCompany;
    } else {
      result = e.idUser;
    }
    return result;
  }
  

  
  function getStatut (e) {
    let result;
    if (e.activate) {
      result = "active";
    } else {
      result = "inactive";
    }
    return result;
  }



  function activation(e) {
    axios
      .get(`http://localhost:5000/gestionDsComptes/desactivate/${sortPosteid(e)}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

   function setStatut(e) {
    let result;
    if (e.activate) {
      result = "checked";
    } else {
      result = "";
    }
    return result;
   }

  return (
    <>
      <td>{employee.nom}</td>
      <td>{employee.prenom}</td>
      <td>{employee.email}</td>
      <td>{employee.adresse}</td>
      <td className={`CellWithStatus ${getStatut(employee)}`}>{getStatut(employee)}</td>
      <td>
        <OverlayTrigger
          overlay={<Tooltip id={`tooltip-top`}>Consulter</Tooltip>}
        >
          <Link to={`/gestionDsComptes/viewuser/${sortPosteid(employee)}`}>
            <button className="btn view-button" data-toggle="modal" >
              Consult
            </button>
          </Link>
        </OverlayTrigger>
        <OverlayTrigger
          overlay={<Tooltip id={`tooltip-top`}>Modifier</Tooltip>}
        >
          <button
            onClick={handleShow}
            className="btn text-warning btn-act"
            data-toggle="modal"
          >
            Modif
          </button>
        </OverlayTrigger>
        <OverlayTrigger
          overlay={<Tooltip id={`tooltip-top`}>Supprimer</Tooltip>}
        >
          <button
            onClick={() => { deleteEmployee(sortPosteid(employee)); window.location.reload(false);} }
            className="btn text-danger btn-act"
            data-toggle="modal"
          >
            Supp
          </button>
        </OverlayTrigger>
        <div class="form-check form-switch">
        <input class="form-check-input"  value="on" type="checkbox" id="flexSwitchCheckChecked" onClick={() =>{ activation(employee) ; window.location.reload(false);}} />
        </div>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm theEmployee={employee} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() =>{ handleClose(); window.location.reload(false);}}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Employee;