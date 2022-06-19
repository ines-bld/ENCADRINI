import React from "react";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import UserSidebar from "../../components/Sidebar/EnseignantSidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect ,useState } from "react";

const UserThemeValide = () => {

 
  const [themes, setThemes] = useState([]);
  const [iduser, setiduser] = useState("8004");
  const [role, setrole] = useState("prof");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/${role}/themesValides/${iduser}`)
      .then((res) => {
        console.log(res.data);
        setThemes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function getStatut(e) {
    let result;
    switch (e.valide) {
      case 'refuse':
        result = "Refusé";
        break;
      case 'attente':
        result = "En attente";
        break;
      case 'valide':
        result = "Validé";
        break;
      default:
        console.log(`Sorry, we are out of ${e.valide}.`);
    }
    return result;
  } 

  function getPromo(e) {
    let result;
   switch (e.idPromo) {
    case 1:
    result = "1CP";
    break;
    case 2:     
        result = "2CP";
      break;
    case 3:
        result = "1CS";
    break;
    case 4:
        result = "2CS";
    break;
    case 5:
        result = "3CS";
    break;
  default:
    result = "";
}
    return result;
  }

  return (
    <>
      <div className="new">
        <UserSidebar />
        <div className="newContainer">
          <AdminNavbar />
          <h1>Thèmes validés</h1>
          <div className="themes">
            {themes.map((theme) => (
              <li>
                <div className="text">
                  <h4>{theme.titre}</h4>
                  <h6>{getStatut(theme)}</h6>
                  <h6>{getPromo(theme)}</h6>
                </div>
                <Link to={`/mesthemes/${iduser}/${theme.idTheme}`}>   {/* bedliii 8004 b iduser */}
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

export default UserThemeValide;
