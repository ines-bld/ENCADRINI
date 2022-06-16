import React from 'react'
import EnseignantSidebar from '../../components/EnseignantSidebar/EnseignantSidebar'
import AdminNavbar from '../../components/Navbar/AdminNavbar'
import ViewMyTheme from '../../components/ThemesManagement/ViewMyTheme'
import './ViewMyThemePage.css'

const ViewMyThemePage = () => {
  return (
    
    <div className='list'>
    <EnseignantSidebar/>
    <div className="listContainer">
    <AdminNavbar/>
    <ViewMyTheme/>
    </div>
    </div>
  )
}

export default ViewMyThemePage