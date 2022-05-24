import "./CreationDesComptes.css";
import "bootstrap/dist/css/bootstrap.css";
import Sidebar from "../../components/Sidebar/AdminSidebar";
import Navbar from "../../components/Navbar/AdminNavbar";
import { Link } from "react-router-dom";

export const CreationDesComptes = () => {
    return (
        <>
            <div className="big">
                <Sidebar />
                <div className="small">
                    <Navbar />
                    <div className="global">
                        <h1>Créer un compte pour ?</h1>
                        <br />
                        <div className="local">
                            <Link to="/creationDesUtilisateurs/etudiant" style={{ textDecoration: 'none' }}>
                                <button className="creation">Etudiant</button>
                            </Link>
                            <br />
                            <Link to="/creationDesUtilisateurs/enseignant" style={{ textDecoration: 'none' }}>
                                <button className="creation">Enseignant</button>
                            </Link>
                            <br />
                            <Link to="/creationDesUtilisateurs/enseignant" style={{ textDecoration: 'none' }}>
                                <button className="creation">Entreprise</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
