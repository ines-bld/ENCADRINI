import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

export const ThemeContext = createContext()

const ThemeContextProvider  = (props) => {
    const [Themes, setThemes] = useState([])

                 const [iduser, setiduser] = useState(8004)

console.log(ThemeContext)

useEffect(() => {
    axios
      .get(`http://localhost:5000/mesthemes/${iduser}`)
      .then(({ data }) => {
        setThemes(data);
        //   setEmployees(JSON.parse(localStorage.getItem('employees')))
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

// useEffect(()=> {
//     setThemes(JSON.parse(localStorage.getItem('Themes')))
// },[])

// useEffect(() => {
//     localStorage.setItem('Themes', JSON.stringify(Themes));
// })



const sortedThemes = Themes.sort((a,b)=>(a.Titre < b.Titre ? -1 : 1));



const addTheme = (Titre, Promotion, statut) => {
    setThemes([...Themes , {id:uuidv4(), Titre, Promotion, statut}])
}

const deleteTheme = async (id) => {
    if(window.confirm("voulez vous vraiment supprimer ce Thème")) 
    { 
        const response = await axios.get(`http://localhost:5000/api/ih/dmesthemes/${id}`); 
        if(response.status === 200) 
        { 
            console.log("Thème supprimé") 
            //we add here the function used to bring the users from the backend 
        } 
    }
    //setThemes(Themes.filter(Theme => Theme.id !== id))
}

// const updateTheme = (id, updatedTheme) => {
//     setThemes(Themes.map((Theme) => Theme.id === id ? updatedTheme : Theme))
// }  , updateTheme

    return (
        <ThemeContext.Provider value={{sortedThemes, addTheme, deleteTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;