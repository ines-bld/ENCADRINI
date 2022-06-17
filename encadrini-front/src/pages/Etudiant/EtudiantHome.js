import React from 'react';
import AdminNavbar from '../../components/Navbar/AdminNavbar';
import EtudiantSidebar from '../../components/Sidebar/EtudiantSidebar';
import RemplirFiche from '../../components/fiche-de-voeux/remplir-fiche'

const EtudiantHome = () => {
  return (
    <>
    <div className='new'>
      <EtudiantSidebar />
      <div className='newContainer'>
        <AdminNavbar />  
        <RemplirFiche />    
      </div>
    </div>
    </>
  )
}

export default EtudiantHome