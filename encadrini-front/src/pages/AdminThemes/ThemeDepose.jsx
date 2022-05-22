import React from "react";
import "./ThemeDepose.scss";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import Table from "../../components/ThemeAdmin/TableAdmin";

const ThemeDepose = () => {
  return (
    <>
      <div className="theme">
        <AdminSidebar />
        <div className="themeContainer">
          <AdminNavbar />
          <Table />
        </div>
      </div>
    </>
  );
};

export default ThemeDepose;
