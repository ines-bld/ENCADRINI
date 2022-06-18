import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import "./dashboard.css";
import Widget from "../../components/widgets/widget";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      setData(data);
    }
  }, []);
  return (
    <div className="home">
      <AdminSidebar />
      <div className="homeContainer">
        <AdminNavbar />
        <h1>Bienvenue {data.prenom + " " + data.nom}!</h1>
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
