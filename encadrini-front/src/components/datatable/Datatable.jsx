import React, {useState,useEffect} from 'react'
import './Datatable.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

function createData(
  id: Number,
  Nom: string,
  Prénom: number,
  Email: string,
  Role: number,
  Statut: string,
) {
  return {id,Nom, Prénom, Email, Role, Statut };
}

const rows = [
  createData(1,'Frozen yoghurt', 159, 'm.baha@esi-sba.dz',24, 'active'),
  createData(2,'Ice cream sandwich', 237, 'i.belouad@esi-sba.dz',37 , 'inactive'),
  createData(3,'Gingerbread', 356, 'mr.selimani@€si-sba.dz', 49, 'active'),
  createData(4,'Eclair', 262, 'i.hattabi@esi-sba.dz', 24, 'active'),
  createData(5,'Cupcake', 305, 'a.lalaa@esi-sba.dz', 67, 'inactive'),
  createData(6,'Gingerbread', 356, 's;oukrif@€si-sba.dz',49, 'active'),
];



const Datatable = () => {
  const [data, setData] = useState();
  return (
    <div className="Datatable">
        <div className='manageUsers-head'>
        <span className='text-style'>Gestion des utilisateurs</span>
        <Link to="/creationDesComptes">
        <button className='button-modify'>Ajouter un utilisateur</button>
        </Link>
        <button className='button-modify'>Ajouter un utilisateur</button>
        </div>
         <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Nom</TableCell>
            <TableCell align="left">Prénom</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Role</TableCell>
            <TableCell align="left">Statut</TableCell>
            <TableCell align="left" >
              action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.Nom}</TableCell>
              <TableCell align="left">{row.Prénom}</TableCell>
              <TableCell align="left">{row.Email}</TableCell>
              <TableCell align="left">{row.Role}</TableCell>
              <TableCell align="left" className={`CellWithStatus ${row.Statut}`}>{row.Statut}</TableCell>
              <TableCell align="left" className='CellAction'>
              <Link to=':compteId'>
                <button className='ViewButton'>View</button>
                </Link>
                <button className='EditButton'>Edit</button>
                <button className='DeleteButton'>Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Datatable


     

   
