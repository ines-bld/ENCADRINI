import React from "react";
import "./ThemeDepose.css";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import Card from "../../components/ThemeAdmin/card";

const ThemeDepose = () => {
  return (
    <>
      <div className="theme">
        <AdminSidebar />
        <div className="themeContainer">
          <AdminNavbar />
          <Card />
        </div>
      </div>
    </>
  );
};

export default ThemeDepose;
