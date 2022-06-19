import { Form, Button } from "react-bootstrap"
import {TeamContext} from './TeamsContext';
import {useContext, useState, useEffect} from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
 


const EditTeam = ({theTeam}) =>{
    const history = useNavigate();
    const id = theTeam.id;

    const [nom, setNom] = useState(theTeam.nom);
    const [prenom, setPrénom] = useState(theTeam.prenom);
    const [email, setEmail] = useState(theTeam.email);
    const [adresse, setAddress] = useState(theTeam.adresse);
    const [phone, setPhone] = useState(theTeam.phone);
    const [statut, setStatut] = useState(theTeam.statut);
  


    

    const updatedTeam = {id,nom, prenom, email, adresse, phone,statut}

    const updateTeam = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:5000/gestionDscomptes/edituser/${id}`,{
            nom: nom,
            phone: phone
        });
        history.push("/gestionDscomptes");
    }
 
    useEffect(() => {
        getTeamById();
    }, []);
 
    const getTeamById = async () => {
        const response = await axios.get(`http://localhost:5000/gestionDscomptes/${id}`);
        setNom(response.data.nom);
        setPhone(response.data.numTelph);
    }

     return (

        <Form onSubmit={updateTeam}>
            <b className="textHeaderForm">Informations personelles</b>
            <Form.Group className="form-field">
            <div className="textFormGroup">Nom</div>
                <Form.Control
                    type="text"
                    placeholder="Nom *"
                    name="Nom"
                    value={nom}
                    onChange={(e)=> setNom(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="form-field">
            <div className="textFormGroup">Prénom</div>
                <Form.Control
                    type="text"
                    placeholder="Nom *"
                    name="Prénom"
                    value={prenom}
                    onChange={(e)=> setPrénom(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="form-field">
            <div className="textFormGroup">Email</div>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="form-field">
            <div className="textFormGroup">Adresse</div>
                <Form.Control
                    as="textarea"
                    placeholder="Address"
                    rows={3}
                    name="address"
                    value={adresse}
                    onChange={(e)=> setAddress(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="form-field">
            <div className="textFormGroup">statut</div>
                <Form.Control
                    type=""
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="form-field">
            <div className="textFormGroup">Numéro de téléphone</div>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange={(e)=> setPhone(e.target.value)}
                />
            </Form.Group>
            <b className="textHeaderForm">Informations projet</b>
            <Form.Group className="form-field">
            <div className="textFormGroup">Promotion</div>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="Nom"
                    value={nom}
                    onChange={(e)=> setNom(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="form-field">
            <div className="textFormGroup">Encadreur</div>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="form-field">
                <Form.Control
                    as="textarea"
                    placeholder="Address"
                    rows={3}
                    name="address"
                    value={adresse}
                    onChange={(e)=> setAddress(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="form-field">
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange={(e)=> setPhone(e.target.value)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Modifier
            </Button>
        </Form>

     )
}

export default EditTeam;