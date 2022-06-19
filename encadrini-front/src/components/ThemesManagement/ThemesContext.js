import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ThemeContext = createContext()

const ThemeContextProvider  = (props) => {
    const [Themes, setThemes] = useState([
        {id:uuidv4(), Titre: 'Gestion des enseignements',Promotion: '2CP', statut:'validé'},
        {id:uuidv4(), Titre: 'Gestion des PFEs',Promotion:'1CS', statut:'validé'},
        {id:uuidv4(), Titre: 'Recrutement' ,Promotion:'2CS',statut:'nonvalidé'},
        {id:uuidv4(), Titre: 'E-health',Promotion:'2CP', statut:'nonvalidé'},
        {id:uuidv4(), Titre: 'Madrasa-TIC' ,Promotion:'1CS' ,statut:'validé'},
        {id:uuidv4(), Titre: 'Madinati-C',Promotion:'1CS', statut:'validé'},
        {id:uuidv4(), Titre: 'Gestion des Conferences',Promotion:'1CS', statut:'nonvalidé'},
        {id:uuidv4(), Titre: 'Gestion des Rebndez vous',Promotion:'2CS', statut:'validé'},
        {id:uuidv4(), Titre: 'Gestion des logements',Promotion:'2CS', statut: 'nonvalidé'},
        {id:uuidv4(), Titre: 'Gestion des étudtiants',Promotion:'2CS', statut: 'nonvalidé'},
        {id:uuidv4(), Titre: 'ESI-Commerce',Promotion:'2CS', statut: 'validé'},
        {id:uuidv4(), Titre: 'E-learn',Promotion:'2CS', statut: 'validé'},
        {id:uuidv4(), Titre: 'Martin Blank',Promotion:'1CS', statut: 'validé'},
        {id:uuidv4(), Titre: 'Martin Blank',Promotion:'1CS', statut: 'validé'},
        {id:uuidv4(), Titre: 'Martin Blank',Promotion:'2CP', statut: 'validé'},
        {id:uuidv4(), Titre: 'Martin Blank',Promotion:'2CP', statut: 'nonvalidé'},
        {id:uuidv4(), Titre: 'Martin Blank',Promotion:'3CZ', statut: 'validé'},
        {id:uuidv4(), Titre: 'Martin Blank',Promotion:'3CS', statut: 'validé'},
        {id:uuidv4(), Titre: 'Martin Blank',Promotion:'3CS', statut: 'nonvalidé'},
        {id:uuidv4(), Titre: 'Martin Blank',Promotion:'3CS', statut: 'validé'},
        {id:uuidv4(), Titre: 'Martin Blank',Promotion:'3CS', statut: 'nonvalidé'}
])

console.log(ThemeContext)

useEffect(()=> {
    setThemes(JSON.parse(localStorage.getItem('Themes')))
},[])

useEffect(() => {
    localStorage.setItem('Themes', JSON.stringify(Themes));
})



const sortedThemes = Themes.sort((a,b)=>(a.Titre < b.Titre ? -1 : 1));



const addTheme = (Titre, Promotion, statut) => {
    setThemes([...Themes , {id:uuidv4(), Titre, Promotion, statut}])
}

const deleteTheme = (id) => {
    setThemes(Themes.filter(Theme => Theme.id !== id))
}

const updateTheme = (id, updatedTheme) => {
    setThemes(Themes.map((Theme) => Theme.id === id ? updatedTheme : Theme))
}

    return (
        <ThemeContext.Provider value={{sortedThemes, addTheme, deleteTheme, updateTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;