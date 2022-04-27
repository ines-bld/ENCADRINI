import React from 'react'
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import "./SingleUser.scss";

const SingleUser = () => {
  return (
    <div className='SingleUser'>
       <AdminSidebar/>
       <div className="SingleUserContainer">
         <AdminNavbar/>
       </div>
    </div>
  )
}

export default SingleUser