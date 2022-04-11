import "./AdminSidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import logo from "../../images/Logo.svg"
import { Link } from "react-router-dom";


const AdminSidebar = () => {
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
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">SPRINT1</p>
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
            <span>Profil</span>
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

export default AdminSidebar;