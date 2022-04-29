import {useContext, useState, useEffect} from 'react';
import {EmployeeContext} from './contexts/EmployeeContext';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditForm from './EditForm';
import AddForm from './AddForm';
import Pagination from './Pagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const Employee = ({employee}) => {

    const {deleteEmployee} = useContext(EmployeeContext)

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [employee])

    return (
        <>
            <TableCell align="left">{employee.name}</TableCell>
            <TableCell align="left">{employee.email}</TableCell >
            <TableCell align="left">{employee.address}</TableCell>
            <TableCell align="left">{employee.phone}</TableCell>
            <TableCell align="left">
            <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Consulter
                        </Tooltip>
                    }>
                    <a href={`/gestionDsComptes/${employee.id}`}>
                    <button className="view-button">Consulter</button>
                    </a>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Modifier
                        </Tooltip>
                    }>
                    <button onClick={handleShow}  className="btn text-warning btn-act" data-toggle="modal">Modifier</button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Supprimer
                        </Tooltip>
                    }>
                    <button onClick={() => deleteEmployee(employee.id)}  className="btn text-danger btn-act" data-toggle="modal">Supprimer</button>
                </OverlayTrigger>
                
                
            </TableCell>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Modifier l'utilisateur 
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditForm theEmployee={employee} />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fermer
                </Button>
        </Modal.Footer>
    </Modal>
        </>
    )
}

export default Employee;