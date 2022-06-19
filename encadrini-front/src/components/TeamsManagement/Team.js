import {useContext, useState, useEffect} from 'react';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditTeam from './EditTeam';
import { Link, useParams } from 'react-router-dom';
import {TeamContext}  from './TeamsContext';
import { makeStyles } from '@mui/styles';
import eyeIcon from '../../images/eye-icon.svg'
import { 
    TableCell,
    TableRow,
    Grid,
    Typography,
 } from '@mui/material';



const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
      
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px',
        color: 'white',
        maxWidth: 950
    },
    tableHeaderCell: {
        fontWeight: 'regular',
        backgroundColor: "#7B2CBF",
        color: 'white'
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }
  }));
  



const Team = ({team}) => {
    const teamId = useParams();
    const classes = useStyles();
    const {deleteTeam} = useContext(TeamContext);
    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [team])
    console.log(team.statut)
    return (
        <>
            {/* <td>1</td>
            <td>Ines belouad</td>
            <td>Djamel Bensaber</td>
            <td>Gestion des PFEs</td>
            <td>
            <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Consulter
                        </Tooltip>
                    }>
                   <Link to={`/dashboard`}>
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
                    <button onClick={() => deleteTeam(team.id)}  className="btn text-danger btn-act" data-toggle="modal">Supp</button>
                </OverlayTrigger>
            </td> */}
             

             <TableRow>
              <TableCell>
                  <Grid container>
                          <Typography className={classes.name}>{team.numéro}</Typography>
                  </Grid>
                </TableCell>
                <TableCell>
                <Typography color="textSecondary" variant="body2">{team.chef}</Typography>
                </TableCell>
                <TableCell>
                <Typography color="textSecondary" variant="body2">{team.encadrant}</Typography>
                </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2">{team.theme}</Typography>
                </TableCell>
              <TableCell><OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Consulter
                        </Tooltip>
                    }>
                   <Link to={`/teams/${team.id}`}>
                    <button  className="btn view-button" data-toggle="modal"><img src={eyeIcon}/></button></Link>
                </OverlayTrigger></TableCell>
            </TableRow>
          

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Modifier Team
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditTeam team={team} />
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

export default Team;