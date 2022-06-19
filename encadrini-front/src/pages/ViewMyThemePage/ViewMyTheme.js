import React from 'react'
import EnseignantSidebar from '../../components/Sidebar/EnseignantSidebar'
import AdminNavbar from '../../components/Navbar/AdminNavbar'
import ViewMyTheme from '../../components/ThemesManagement/ViewTheme'
import './ViewMyTheme.css'

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