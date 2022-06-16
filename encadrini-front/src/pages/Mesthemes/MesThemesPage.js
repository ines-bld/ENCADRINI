import React from 'react'
import ThemeContextProvider from '../../components/ThemesManagement/ThemesContext'
import MesThemes from '../../components/ThemesManagement/MesThemes'
import AdminNavbar from '../../components/Navbar/AdminNavbar'
import AdminSidebar from '../../components/Sidebar/AdminSidebar'
import './MesThemesPage.scss'

const MesThemesPage = () => {
  return (
    
    <ThemeContextProvider>
     <div className='list'>
        <AdminSidebar/>
        <div className="listContainer">
        <AdminNavbar/>
        <MesThemes/>
    </div>
    </div>
    </ThemeContextProvider>
  )
}

export default MesThemesPage