import "./creationDesComptes.css";
import "bootstrap/dist/css/bootstrap.css";
import Sidebar from "../../components/Sidebar/AdminSidebar";
import Navbar from "../../components/Navbar/AdminNavbar";
import { Link } from "react-router-dom";
import axios from "axios";


const CreationDesComptes = () => {
 
  function createUser(rolee) {
    console.log(rolee);
    axios
      .get(`http://localhost:5000/creationDesUtilisateurs/${rolee}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
                <button
                  onClick={() => {
                    let role1 = 'etudiant';
                    createUser(role1);
                  }}
                >
                  Etudiant
                </button>
              </Link>
              <br />
              <Link
                to="/creationDesUtilisateurs/enseignant"
                style={{ textDecoration: "none" }}
              >
                <button
                  onClick={() => {
                    let role2 = 'enseignant';
                    createUser(role2);
                  }}
                >
                  Enseignant
                </button>
              </Link>
              <br />
              <Link
                to="/creationDesUtilisateurs/entreprise"
                style={{ textDecoration: "none" }}
              >
                <button
                  onClick={() => {
                    let role3 = 'entreprise';
                    createUser(role3);
                  }}
                >
                  Entreprise
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreationDesComptes;
