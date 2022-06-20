import React from 'react';
import {useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from '../Navbar/AdminNavbar';
import AdminSidebar from '../Sidebar/AdminSidebar';
import Pagination from './Pagination';
import { TeamContext } from './TeamsContext';
import Team from './Team.js';
import EditTeam from './EditTeam';
import { makeStyles } from '@mui/styles';
import { Modal, Button, OverlayTrigger, Tooltip, Alert } from 'react-bootstrap';
import "./Teams.css"
import eyeIcon from '../../images/eye-icon.svg'

import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter
 } from '@mui/material';

import { fontWeight } from '@mui/system';

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
    name: {
        fontWeight: 'bold',
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    },
    title: {
        color: 'white',
        fontWeight: 'regular',
        fontSize: "15px"
    }
  }));




const TeamsList = () => {
    const {sortedTeams} = useContext(TeamContext);
    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //const handleShowAlert = () =>setShowAlert(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [TeamsPerPage] = useState(5)
    const classes = useStyles();

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
    }, [sortedTeams])

    const indexOfLastTeam = currentPage * TeamsPerPage;
    const indexOfFirstTeam = indexOfLastTeam - TeamsPerPage;
    const currentTeams = sortedTeams.slice(indexOfFirstTeam, indexOfLastTeam);
    const totalPagesNum = Math.ceil(sortedTeams.length / TeamsPerPage);



    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  


  return (

      <>
    <div className='list-container'>
    <div  className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2 className='text-style titre-liste-des-equipes'>Liste des équipes</h2>
            </div>
            <div className="col-sm-6">
                <Link to="/dashboard">
                <Button onClick={handleShow} className="button-modify button-new-team" data-toggle="modal"><span >Créer une équipe</span></Button>					
                </Link>
            </div>
        </div>  
 </div>  
    
    <Alert show={showAlert} variant="success">
        Liste mise à jour avec succées
    </Alert>
    <TableContainer component={Paper} className={classes.tableContainer}>
    <Table className={classes.table} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell className={classes.tableHeaderCell}><h1 className={classes.title}>Numéro de l'équipe</h1></TableCell>
                <TableCell className={classes.tableHeaderCell}><h1 className={classes.title}>Chef d'équipe</h1></TableCell>
                <TableCell className={classes.tableHeaderCell}><h1 className={classes.title}>Encadrant</h1></TableCell>
                <TableCell className={classes.tableHeaderCell}><h1 className={classes.title}>thème</h1></TableCell>
                <TableCell className={classes.tableHeaderCell}><h1 className={classes.title}>Actions</h1></TableCell>
            </TableRow>
        </TableHead>
        {/* <TableBody>
                {
                  currentTeams.map(team => (
                    <TableRow key={team.id}>
                    <Team/>
                    </TableRow>
                ))  
                }
        </TableBody> */}
        <TableBody>
         
            <TableRow>
              <TableCell>
                  <Grid container>
                          <Typography className={classes.name}>1</Typography>
                  </Grid>
                </TableCell>
                <TableCell>
                <Typography color="textSecondary" variant="body2">Ines Belouad</Typography>
                </TableCell>
                <TableCell>
                <Typography color="textSecondary" variant="body2">Djamel bensaber</Typography>
                </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2">Gestion des PFEs</Typography>
                </TableCell>
              <TableCell><OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Consulter
                        </Tooltip>
                    }>
                   <Link to={`/teams/:teamId`}>
                    <button  className="btn view-button" data-toggle="modal"><img className="eye-icon" src={eyeIcon}/></button></Link>
                </OverlayTrigger></TableCell>
            </TableRow>
            

            {/* {
                  currentTeams.map(team => (
                      <TableRow key={team.id}>
                        <Team team={team} />
                    </TableRow>
                  ))  
                } */}


        </TableBody>
    </Table>
    </TableContainer>

    <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentTeams ={currentTeams}
                sortedTeams = {sortedTeams} />

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

export default TeamsList