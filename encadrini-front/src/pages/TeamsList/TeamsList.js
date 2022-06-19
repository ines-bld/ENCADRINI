import React from 'react'
import TeamContextProvider from '../../components/TeamsManagement/TeamsContext'
import AdminNavbar from '../../components/Navbar/AdminNavbar'
import AdminSidebar from '../../components/Sidebar/AdminSidebar'
import TeamsList from '../../components/TeamsManagement/TeamsList'
import './TeamsPage.css'

const TeamsPage = () => {
  return (
    
    <TeamContextProvider>
     <div className='list'>
        <AdminSidebar/>
        <div className="listContainer">
        <AdminNavbar/>
        <TeamsList/>
    </div>
    </div>
    </TeamContextProvider>
  )
}

export default TeamsPage