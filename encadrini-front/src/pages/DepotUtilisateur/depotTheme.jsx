import React from "react";
import "./depotTheme.css";
import FormDepot from "../../components/déposerThéme/form-dépot";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import AdminSidebar from "../../components/Sidebar/AdminSidebar";

const Depot = () => {
  return (
    <>
      <div className="depot">
        <AdminSidebar />
        <div className="depotContainer">
          <AdminNavbar />
          <div className="file">
            <FormDepot />
          </div>
        </div>
      </div>
    </>
  );
};

export default Depot;
