import { Form, Button } from "react-bootstrap"
import { ThemeContext } from './ThemesContext';
import {useContext, useState} from 'react';
import './MesThemes.scss';


const EditTheme = ({theme}) =>{

    const id = theme.id;

    const [Titre, setTitre] = useState(theme.Titre);
    const [Promotion, setPromotion] = useState(theme.Promotion);
    const [statut, setstatut] = useState(theme.statut);
    

    const {updateTheme} = useContext(ThemeContext);

    const updatedTheme = {id, Titre, Promotion, statut}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTheme(id, updatedTheme)
    }

     return (
        <Form onSubmit={handleSubmit}>
            <b className="textHeaderForm">Informations Projet</b>
            <Form.Group className="form-field">
            <div className="textFormGroup">Titre</div>
                <Form.Control
                    type="text"
                    placeholder="Titre *"
                    name="Titre"
                    value={Titre}
                    onChange={(e)=> setTitre(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="form-field">
            <div className="textFormGroup">Promotion</div>
                <Form.Control
                    type="text"
                    placeholder="Nom *"
                    name="Promotion"
                    value={Promotion}
                    onChange={(e)=> setPromotion(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="form-field">
            <div className="textFormGroup">Statut</div>
                <Form.Control
                    type="statut"
                    placeholder="statut *"
                    name="statut"
                    value={statut}
                    onChange={(e)=> setstatut(e.target.value)}
                    required
                />
            </Form.Group>
           
            <Button variant="success" type="submit" block>
                Modifier
            </Button>
        </Form>

     )
}

export default EditTheme;