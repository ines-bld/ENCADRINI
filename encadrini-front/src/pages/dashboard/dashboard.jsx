import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import "./dashboard.scss";
import Widget from "../../components/widgets/widget";
import React from 'react';


const Home = () => {
  return (
    <div className="home">
      <AdminSidebar />
      <div className="homeContainer">
        <AdminNavbar />
        <div className="widgets">
          <Widget type="enseignant" />
          <Widget type="etudiant" />
          <Widget type="projet" />
        </div>
      </div>
    </div>
  );
};

export default Home;