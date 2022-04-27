import React, {useState,useEffect} from 'react'
import './Datatable.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function createData(
  Nom: string,
  Prénom: number,
  Email: string,
  Role: number,
  Statut: string,
) {
  return { Nom, Prénom, Email, Role, Statut };
}

const rows = [
  createData('Frozen yoghurt', 159, 'm.baha@esi-sba.dz',24, 'active'),
  createData('Ice cream sandwich', 237, 'i.belouad@esi-sba.dz',37 , 'inactive'),
  createData('Gingerbread', 356, 'mr.selimani@€si-sba.dz', 49, 'active'),
  createData('Eclair', 262, 'i.hattabi@esi-sba.dz', 24, 'active'),
  createData('Cupcake', 305, 'a.lalaa@esi-sba.dz', 67, 'inactive'),
  createData('Gingerbread', 356, 's;oukrif@€si-sba.dz',49, 'active'),
];

const Datatable = () => {
  const [data, setData] = useState();
  return (
    <div className="Datatable">
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
                <button className='ViewButton'>View</button>
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


     

   
