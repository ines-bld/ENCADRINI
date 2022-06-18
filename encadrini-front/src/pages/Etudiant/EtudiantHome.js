import React from 'react';
import AdminNavbar from '../../components/Navbar/AdminNavbar';
import EtudiantSidebar from '../../components/Sidebar/EtudiantSidebar';
import HomeUser from '../dashboard/dashboardUser';

const EtudiantHome = () => {
  return (
    <>
    <div className='new'>
      <EtudiantSidebar />
      <div className='newContainer'>
        <AdminNavbar />  
        <HomeUser />
      </div>
    </div>
    </>
  )
}

export default EtudiantHome