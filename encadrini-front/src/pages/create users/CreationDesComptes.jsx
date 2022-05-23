import "./CreationDesComptes.scss";
import "bootstrap/dist/css/bootstrap.css";
import Sidebar from "../../components/Sidebar/AdminSidebar";
import Navbar from "../../components/Navbar/AdminNavbar";
import { Link } from "react-router-dom";

export const CreationDesComptes = () => {
  return (
    <>
      <div className="new">
        <Sidebar />
        <div className="newContainer">
          <Navbar />
          <h1>Créer un compte pour ?</h1>
          <br />
          <Link to="/creationDesUtilisateurs/etudiant">
            <button type="submit">Etudiant</button>
          </Link>
          <br />
          <Link to="/creationDesUtilisateurs/enseignant">
            <button type="submit">Enseignant</button>
          </Link>
          <br />
          <Link to="/creationDesUtilisateurs/enseignant">
            <button type="submit">Entreprise</button>
          </Link>
          <br />
        </div>
      </div>
    </>
  );
};
