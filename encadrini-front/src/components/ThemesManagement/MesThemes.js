import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import AdminNavbar from '../Navbar/AdminNavbar';
import AdminSidebar from '../Sidebar/AdminSidebar';
import Pagination from './Pagination';
import { ThemeContext } from './ThemesContext';
import Theme from './Theme.js';
import EditTheme from './EditTheme';
import './MesThemes.scss';


import './MesThemes.scss';
const MesThemes = () => {
    const {sortedThemes} = useContext(ThemeContext);
    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //const handleShowAlert = () =>setShowAlert(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [ThemesPerPage] = useState(5)

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
    }, [sortedThemes])

    const indexOfLastTheme = currentPage * ThemesPerPage;
    const indexOfFirstTheme = indexOfLastTheme - ThemesPerPage;
    const currentThemes = sortedThemes.slice(indexOfFirstTheme, indexOfLastTheme);
    const totalPagesNum = Math.ceil(sortedThemes.length / ThemesPerPage);
  return (
      <>
    <div className='list-container'>
    <div  className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2 className='text-style'>Mes thèmes</h2>
            </div>
            <div className="col-sm-6">
                <Link to="/dashboard">
                <Button onClick={handleShow} className="button-modify" data-toggle="modal"><span >Déposer un thème</span></Button>					
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
                <TableCell>Titre</TableCell>
                <TableCell>Promotion</TableCell>
                <TableCell>Statut</TableCell>
                <TableCell>Actions</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
                {
                  currentThemes.map(theme => (
                    <TableRow key={theme.id}>
                    <Theme theme={theme} />
                    </TableRow>
                ))  
                }
        </TableBody>
    </Table>

    <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentThemes ={currentThemes}
                sortedThemes = {sortedThemes} />

    <Modal show={show} onHide={handleClose}>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>
    </div>
    </>
  )
}

export default MesThemes