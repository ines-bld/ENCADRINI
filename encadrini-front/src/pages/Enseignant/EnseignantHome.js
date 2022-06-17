import React from 'react'
import AdminNavbar from '../../components/Navbar/AdminNavbar';
import UserSidebar from '../../components/Sidebar/EnseignantSidebar';

const EnseignantHome = () => {
  return (
    <>
    <div className='new'>
      <UserSidebar />
      <div className='newContainer'>
        <AdminNavbar />      
      </div>
    </div>
    </>
  )
}

export default EnseignantHome;