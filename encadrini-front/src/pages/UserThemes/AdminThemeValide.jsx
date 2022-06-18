import React from "react";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import { Link } from "react-router-dom";

const AdminThemeValide = () => {
  const themes = [
    { titre: "theme1" },
    { titre: "theme2" },
    { titre: "theme3" },
  ];
  return (
    <>
      <div className="new">
        <AdminSidebar />
        <div className="newContainer">
          <AdminNavbar />
          <h1>Thèmes validés</h1>
          <div className="themes">
            {themes.map((theme) => (
              <li>
                <div className="text">
                  <h4>{theme.titre}</h4>
                </div>
                <Link to={`/`}>
                  <button>consulter</button>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminThemeValide;
