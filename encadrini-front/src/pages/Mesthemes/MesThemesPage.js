import ThemeContextProvider from '../../components/ThemesManagement/ThemesContext'
import MesThemes from '../../components/ThemesManagement/MesThemes'
import AdminNavbar from '../../components/Navbar/AdminNavbar'
import './MesThemesPage.scss'
import EnseignantSidebar from '../../components/EnseignantSidebar/EnseignantSidebar.js'

const MesThemesPage = () => {
  return (
    
    <ThemeContextProvider>
     <div className='list'>
        <EnseignantSidebar/>
        <div className="listContainer">
        <AdminNavbar/>
        <MesThemes/>
    </div>
    </div>
    </ThemeContextProvider>
  )
}

export default MesThemesPage