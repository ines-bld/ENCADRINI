import React from 'react'
import ThemeContextProvider from '../../components/ThemesManagement/ThemesContext'
import MesThemes from '../../components/ThemesManagement/MesThemes'
import UserSidebar from "../../components/Sidebar/EnseignantSidebar";
import './MesThemesPage.scss'
import AdminNavbar from '../../components/Navbar/AdminNavbar';

const MesThemesPage = () => {
  return (
    
    <ThemeContextProvider>
     <div className='list'>
     <UserSidebar />
        <div className="listContainer">
          <AdminNavbar />
        <MesThemes/>
    </div>
    </div>
    </ThemeContextProvider>
  )
}

export default MesThemesPage