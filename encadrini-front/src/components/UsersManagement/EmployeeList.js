import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import {EmployeeContext} from './contexts/EmployeeContext';
import Employee from './Employee';
import Pagination from './Pagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import './Employeelist.scss';
import React from 'react';


const EmployeeList = () => {

    const {sortedEmployees} = useContext(EmployeeContext);

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //const handleShowAlert = () =>setShowAlert(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage] = useState(5)

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(()=> {
            setShowAlert(false);
        }, 2000)
    }

    useEffect(() => {
        handleClose();

        return () => {
            handleShowAlert();
        }
    }, [sortedEmployees])

    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
    const totalPagesNum = Math.ceil(sortedEmployees.length / employeesPerPage);
    // search bar variable 
     const [value, SetValue] = useState("");
     const [dataSource, SetdataSource] = useState(currentEmployees);
     const [tableFilter, SettableFilter] = useState([]);
     const filterData = (e) => {
        if(e.target.value !== ""){
            SetValue(e.target.value);
            const filterTable = dataSource.filter(o=>Object.keys(o).some(k=>String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())));
            SettableFilter([...filterTable])
        }else{
            SetValue(e.target.value);
            SetdataSource([...dataSource])
        }
        }
    // end of search bar variable
     

    return (
    <div className='list-container'>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Recherche..." aria-label="Username" value={value} 
          onChange={filterData} />
        </div>
    <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2 className='text-style'>Gestion des utilisateurs</h2>
            </div>
            <div className="col-sm-6">
                <Link to="/creationDesUtilisateurs">
                <Button onClick={handleShow} className="button-modify" data-toggle="modal"><span >Ajouter un utilisateur</span></Button>					
                </Link>
            </div>
        </div>
    </div>

    <Alert show={showAlert} variant="success">
        Liste mise à jour avec succées
    </Alert>

    <Table className="table table-hover">
        <TableHead>
            <TableRow>
                <TableCell>Nom</TableCell>
                <TableCell>Prénom</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Statut</TableCell>
                <TableCell>Actions</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
                { value.length > 0 ? tableFilter.map(employee => (
                      <TableRow key={employee.id}>
                        <Employee employee={employee} />
                    </TableRow>
                  ))  
                  :
                  dataSource.map(employee => (
                    <TableRow key={employee.id}>
                      <Employee employee={employee} />
                  </TableRow>
                ))  
                }
        </TableBody>
    </Table>

    <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentEmployees ={currentEmployees}
                sortedEmployees = {sortedEmployees} />

    <Modal show={show} onHide={handleClose}>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>
    </div>
    
    )
}

export default EmployeeList;