import {useContext, useState, useEffect} from 'react';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './MesThemes.scss';
import EditTheme from './EditTheme';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import {ThemeContext}  from './ThemesContext';
import './MesThemes.scss';
const Theme = ({theme}) => {

    const {deleteTheme} = useContext(ThemeContext);
    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [theme])
    console.log(theme.statut)
    return (
        <>
            <td>{theme.Titre}</td>
            <td>{theme.Promotion}</td>
            <td  className={`CellWithStatus ${theme.statut}`}>{theme.statut}</td>
            <td>
            <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Consulter
                        </Tooltip>
                    }>
                   <Link to={`/mesthemes/${theme.id}`}>
                    <button  className="btn view-button" data-toggle="modal">Consult</button></Link>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Modifier
                        </Tooltip>
                    }>
                    <button onClick={handleShow}  className="btn text-warning btn-act" data-toggle="modal">Modif</button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Supprimer
                        </Tooltip>
                    }>
                    <button onClick={() => deleteTheme(theme.id)}  className="btn text-danger btn-act" data-toggle="modal">Supp</button>
                </OverlayTrigger>
            </td>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Modifier Theme
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditTheme theme={theme} />
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

export default Theme;