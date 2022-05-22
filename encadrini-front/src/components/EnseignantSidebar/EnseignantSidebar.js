import "EnseignantSidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import logo from "../../images/Logo.svg"
import { Link } from "react-router-dom";
import React from 'react';



const EnseignantSidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
        <img
              src={logo}
              alt="logo"
              className="logo"
            />
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Link to="/dashboard" style={{textDecoration: "none"}}>
          <li>
            <DashboardIcon className="icon" />
          </li>
          </Link>          
          <Link to="/creationDesUtilisateurs" style={{ textDecoration: "none" }}>
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
          <p className="title">SERVICE</p>        
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Réglages</span>
          </li>
          <p className="title">UTILISATEUR</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <Link to='/Profile' style={{ textDecoration: "none" }}><span>Profil</span></Link>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Se déconnecter</span>
          </li>
        </ul>
      </div>    
    </div>
  );
};

export default EnseignantSidebar;