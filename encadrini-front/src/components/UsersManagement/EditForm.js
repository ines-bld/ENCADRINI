import { Form, Button } from "react-bootstrap"
import {EmployeeContext} from './contexts/EmployeeContext';
import {useContext, useState} from 'react';
import './Employeelist.scss';
import React from 'react';



const EditForm = ({theEmployee}) =>{

    const id = theEmployee.id;

    const [nom, setNom] = useState(theEmployee.nom);
    const [prenom, setPrénom] = useState(theEmployee.prenom);
    const [email, setEmail] = useState(theEmployee.email);
    const [adresse, setAddress] = useState(theEmployee.adresse);
    const [phone, setPhone] = useState(theEmployee.phone);
    const [statut, setStatut] = useState(theEmployee.statut);


    const {updateEmployee} = useContext(EmployeeContext);

    const updatedEmployee = {id,nom, prenom, email, adresse, phone,statut}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(id, updatedEmployee)
    }

     return (

        <Form onSubmit={handleSubmit}>
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

export default EditForm;