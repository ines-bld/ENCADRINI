import "./EnseignantSidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import SubjectIcon from '@mui/icons-material/Subject';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AddIcon from '@mui/icons-material/Add';
import logo from "../../images/LogoWhite.svg";
import logoIcon from "../../images/LogoIcon.svg";
import React from 'react'
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';



const EnseignantSidebar = ({children}) => {
  //isopen est une variablepour savoir si sidebar est uverte ou pas initialisée à false (fermée)
  const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    //menuItem pour définir les différentes parties du sidebar 
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<DashboardIcon/>
        },
        {
            path:"/mesthemes",
            name:"Mes thèmes",
            icon:<SubjectIcon/>
        },
        {
            path:"/themesvalides",
            name:"Thèmes valides",
            icon:<FactCheckIcon/>
        },
        {
            path:"/deposeruntheme",
            name:"Déposer un thème",
            icon:<AddIcon/>
        },
        {
          path:"/profile",
          name:"Profil",
          icon:<AccountCircleOutlinedIcon />
      },
        {
            path:"/",
            name:"Se déconnecter",
            icon:<ExitToAppIcon/>
        }
    ]
  return (
    <div className="main-container-enseignant">
      <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar-enseignant">
        <div className="top_section">
          <img src={logo} style={{display: isOpen ? "block" : "none"}} className='logo'/>
          <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
            <FaBars onClick={toggle}/>
        </div>
      </div>
      {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
    </div>
   <main>{children}</main>
    </div>
      
        
  );
};
export default EnseignantSidebar;