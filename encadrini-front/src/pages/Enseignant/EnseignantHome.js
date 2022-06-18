import React from 'react'
import AdminNavbar from '../../components/Navbar/AdminNavbar';
import EnseignantSidebar from '../../components/Sidebar/EnseignantSidebar';
import HomeUser from '../dashboard/dashboardUser';

const EnseignantHome = () => {
  return (
    <>
    <div className='new'>
      <EnseignantSidebar />
      <div className='newContainer'>
        <AdminNavbar />      
        <HomeUser />
      </div>
    </div>
    </>
  )
}

export default EnseignantHome;