import React from "react";
import "./depotTheme.css";
import FormDepot from "../../components/déposerThéme/form-dépot";
import UserSidebar from "../../components/Sidebar/EnseignantSidebar";
import AdminNavbar from "../../components/Navbar/AdminNavbar";

const Depot = () => {
  return (
    <>
      <div className="depot">
        <UserSidebar />
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
