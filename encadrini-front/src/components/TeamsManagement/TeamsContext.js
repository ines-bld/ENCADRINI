
import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const TeamContext = createContext();

const TeamContextProvider = (props) => {
  console.log(TeamContext);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/gestionDsEquipes")
      .then(({ data }) => {
        setTeams(data);
        //   setTeams(JSON.parse(localStorage.getItem('Teams')))
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // setTeams(JSON.parse(localStorage.getItem('Teams')))

  const sortedTeams = teams.sort((a, b) => (a.nom < b.nom ? -1 : 1));

  const addTeam = (nom, prenom, email, adresse, phone, statut) => {
    setTeams([
      ...teams,
      { id: uuidv4(), nom, prenom, email, adresse, phone, statut },
    ]);
  };

  const deleteTeam = async(id) => { 
    if(window.confirm("voulez vous vraiment supprimer cette équipe")) 
    { 
        const response = await axios.get(`http://localhost:5000/gestionDsComptes/${id}`); 
        if(response.status === 200) 
        { 
            console.log("équipe supprimé") 
            //we add here the function used to bring the users from the backend 
        } 
    } 
}

 

  return (
    <TeamContext.Provider
      value={{ sortedTeams, addTeam, deleteTeam}}
    >
      {props.children}
    </TeamContext.Provider>
  );
};
export default TeamContextProvider;


