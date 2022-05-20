import "./CreationDesComptes.scss";
import "bootstrap/dist/css/bootstrap.css";
import Sidebar from "../../components/Sidebar/AdminSidebar";
import Navbar from "../../components/Navbar/AdminNavbar";




export const CreationDesComptes = () => {
    return (
        <>
            <div className="new">
                <Sidebar />
                <div className="newContainer">
                    <Navbar />
                    <h1>Créer un compte pour ?</h1><br />
                    <button type="submit">Etudiant</button><br />
                    <button type="submit">Enseignant</button><br />
                    <button type="submit">Entreprise</button><br />

                </div >
            </div >
        </>


    )

}