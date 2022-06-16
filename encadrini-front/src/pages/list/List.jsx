import React from 'react'
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import Datatable from '../../components/datatable/Datatable';
import EmployeeList from '../../components/UsersManagement/EmployeeList';
import EmployeeContextProvider from '../../components/UsersManagement/contexts/EmployeeContext';
import './List.scss';


const List = () => {
  return (
    <div className="list">
        <AdminSidebar/>
        <div className="listContainer">
        <AdminNavbar/>
        <EmployeeContextProvider>
        <EmployeeList/>
        </EmployeeContextProvider>
      
        </div>
    </div>
  )
}

export default List