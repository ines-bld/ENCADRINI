import React from 'react'
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import Datatable from '../../components/datatable/Datatable';
import './List.scss';

const List = () => {
  return (
    <div className="list">
        <AdminSidebar/>
        <div className="listContainer">
        <AdminNavbar/>
        <Datatable/>
        </div>
    </div>
  )
}

export default List