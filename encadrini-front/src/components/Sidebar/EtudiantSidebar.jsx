import "./EnseignantSidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import logo from "../../images/LogoWhite.svg";
import React from "react";
import { FaBars } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const EtudiantSidebar = ({ children }) => {
  const navigate = useNavigate();
  function logOut() {
    localStorage.clear();
    navigate("/login");
  }
  //isopen est une variablepour savoir si sidebar est ouverte ou pas initialisée à false (fermée)
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  //menuItem pour définir les différentes parties du sidebar
  const menuItem = [
    {
      path: "/etudiantDashboard",
      name: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      path: "/etudiantThemeValide",
      name: "Thèmes valides",
      icon: <FactCheckIcon />,
    },
    {
      path: "/fichedevoeux",
      name: "Fiche de voeux",
      icon: <AddIcon />,
    },
    {
      path: "/affichervoeux",
      name: "Mes voeux",
      icon: <FormatListNumberedIcon />,
    },
    {
      path: "/MesThemes/:iduser",
      name: "Mes thèmes",
      icon: <SubjectIcon />,
    },
    {
      path: "/etudiantProfile",
      name: "Profile",
      icon: <AccountCircleOutlinedIcon />,
    },
  ];
  return (
    <div className="main-container-enseignant">
      <div
        style={{ width: isOpen ? "200px" : "50px" }}
        className="sidebar-enseignant"
      >
        <div className="top_section">
          <img
            src={logo}
            style={{ display: isOpen ? "block" : "none" }}
            className="logo"
          />
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <NavLink
          to="/login"
          className="link"
          activeclassName="active"
          onClick={logOut}
        >
          <div className="icon">
            <LogoutIcon />
          </div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            Se deconnecter
          </div>
        </NavLink>
      </div>
      <main>{children}</main>
    </div>
  );
};
export default EtudiantSidebar;
