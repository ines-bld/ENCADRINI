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
    console.log(theme.valide)

    function getPromo(e) {
        let result;
       switch (e.idPromo) {
        case 1:
        result = "1CP";
        break;
        case 2:     
            result = "2CP";
          break;
        case 3:
            result = "1CS";
        break;
        case 4:
            result = "2CS";
        break;
        case 5:
            result = "3CS";
        break;
      default:
        result = "";
    }
        return result;
      }
    
      function getStatut(e) {
        let result;
        switch (e.valide) {
          case 'refuse':
            result = "Refusé";
            break;
          case 'attente':
            result = "En attente";
            break;
          case 'valide':
            result = "Validé";
            break;
          default:
            console.log(`Sorry, we are out of ${e.valide}.`);
        }
        return result;
      }

    return (
        <>
            <td>{theme.titre}</td>
            <td>{getPromo(theme)}</td>
            <td  className={`CellWithStatus ${theme.valide}`}>{getStatut(theme)}</td>
            <td>
            <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Consulter
                        </Tooltip>
                    }>
                   <Link to={`/mesthemes/8004/${theme.idTheme}`}>   {/* bedliii 8004 b iduser */}
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
                    <button onClick={() => {deleteTheme(theme.idTheme); window.location.reload(false);}}  className="btn text-danger btn-act" data-toggle="modal">Supp</button>
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
                <Button variant="secondary"  onClick={() =>{ handleClose(); window.location.reload(false);}}>
                    Fermer
                </Button>
        </Modal.Footer>
    </Modal>
        </>
    )
}

export default Theme;