
import React from "react";

import AdminNavbar from "../../components/Navbar/AdminNavbar";
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import "./déposerThéme.scss";
import FormDepot from "../../components/déposerThéme/form-dépot";



const Depot = () => {
    return (
        <>
            <div className="theme">
                <AdminSidebar />
                <div className="themeContainer">
                    <AdminNavbar />
                    <FormDepot />
                </div>

            </div>
        </>
    );
};

export default Depot;
