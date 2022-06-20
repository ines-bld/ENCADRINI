import React from 'react'
import AdminNavbar from '../../components/Navbar/AdminNavbar'
import AdminSidebar from '../../components/Sidebar/AdminSidebar'
import AfficherTeam from '../../components/TeamsManagement/AfficherTeam'
import './AfficherTeam.css'

const AfficherTeamPage = () => {
  return (
    <div className='list'>
    <AdminSidebar/>
    <div className="listContainer">
    <AdminNavbar/>
    <AfficherTeam/>
    </div>
    </div>
  )
}

export default AfficherTeamPage