import React from 'react';
import AdminNavbar from '../../components/Navbar/AdminNavbar';
import EtudiantSidebar from '../../components/Sidebar/EtudiantSidebar';

const EtudiantHome = () => {
  return (
    <>
    <div className='new'>
      <EtudiantSidebar />
      <div className='newContainer'>
        <AdminNavbar />      
      </div>
    </div>
    </>
  )
}

export default EtudiantHome