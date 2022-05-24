import "./creationDesComptes.css";
import "bootstrap/dist/css/bootstrap.css";
import Sidebar from "../../components/Sidebar/AdminSidebar";
import Navbar from "../../components/Navbar/AdminNavbar";
import { Link } from "react-router-dom";

const CreationDesComptes = () => {
  return (
    <>
      <div className="big">
        <Sidebar />
        <div className="small">
          <Navbar />
          <div className="global">
            <h1>Créer un compte pour ?</h1>
            <div className="local">
              <Link
                to="/creationDesUtilisateurs/etudiant"
                style={{ textDecoration: "none" }}
              >
                <button>Etudiant</button>
              </Link>
              <br />
              <Link
                to="/creationDesUtilisateurs/enseignant"
                style={{ textDecoration: "none" }}
              >
                <button>Enseignant</button>
              </Link>
              <br />
              <Link
                to="/creationDesUtilisateurs/entreprise"
                style={{ textDecoration: "none" }}
              >
                <button>Entreprise</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreationDesComptes;
