import { Form, Button } from "react-bootstrap"
import {EmployeeContext} from './contexts/EmployeeContext';
import {useContext,useEffect,useState} from 'react';
import './Employeelist.scss';
import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const EditForm = ({theEmployee}) =>{

    function sortPosteid (e) {
        let result;
        if (e.poste === "Entreprise") {
          result = e.idCompany;
        } else {
          result = e.idUser;
        }
        return result;
      }

    const history = useNavigate();

    const [email, setEmail] = useState(theEmployee.email);
    const [phone, setPhone] = useState(theEmployee.numTelph);

   const id = sortPosteid(theEmployee)

    const updatedEmployee = {id,email,phone}

    const updateEmployee = async (e) => { 
        e.preventDefault(); 
        await axios.post(`http://localhost:5000/gestionDscomptes/edituser/${sortPosteid(theEmployee)}`,{ 
            email: email, 
            phone: phone 
        }); 
        history.push("/gestionDscomptes"); 
     } 
  
    // useEffect(() => { 
    //     getEmployeeById(); 
    // }, []); 
  
    // const getEmployeeById = async () => { 
    //     const response = await axios.get(`http://localhost:5000/gestionDscomptes/viewuser/${sortPosteid(theEmployee)}`); 
    //     setEmail(response.data.email); 
    //     setPhone(response.data.numTelph); 
    // }

     return (

        <Form onSubmit={updateEmployee}>
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
            <div className="textFormGroup">Numéro de téléphone</div>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange={(e)=> setPhone(e.target.value)}
                />
            </Form.Group>

            <Button  variant="success" type="submit" block >
                Modifier
            </Button>
        </Form>
     )
}

export default EditForm;