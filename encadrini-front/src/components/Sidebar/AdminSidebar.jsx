import "./AdminSidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArticleIcon from "@mui/icons-material/Article";
import logo from "../../images/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

const AdminSidebar = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  function logOut() {
    localStorage.clear();
    navigate("/login");
  }
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">GESTION DES THEMES</p>
          <Link
            to="/creationDesUtilisateurs"
            style={{ textDecoration: "none" }}
          >
            <li>
              <PersonAddIcon className="icon" />
              <span>Creation des utilisateurs</span>
            </li>
          </Link>
          <Link to="/gestionDsComptes" style={{ textDecoration: "none" }}>
            <li>
              <ManageAccountsIcon className="icon" />
              <span>Gestion des comptes</span>
            </li>
          </Link>
          <p className="title">GESTION DES DEPOTS</p>
          <Link to="/gestionDsthemes" style={{ textDecoration: "none" }}>
            <li>
              <ArticleIcon className="icon" />
              <span>Voir les themes deposes</span>
            </li>
          </Link>
          <p className="title">SERVICE</p>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Réglages</span>
          </li>
          <p className="title">UTILISATEUR</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <Link to="/Profile" style={{ textDecoration: "none" }}>
              <span>Profil</span>
            </Link>
          </li>
          <li onClick={logOut}>
            <ExitToAppIcon className="icon" />
            <span>Se déconnecter</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
