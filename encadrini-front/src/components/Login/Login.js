import { Button,Form, Container,Row,Col} from "react-bootstrap";
import loginIllustration from '../../images/login.svg'; 
import encadrini_logo from '../../images/Logo.svg';
import "bootstrap/dist/css/bootstrap.css"; 
import {Heading} from '../HeroSection/HeroElements'; 
import "./login.css";
import{Link, useNavigate} from "react-router-dom";

import Axios from "axios";
import React, { useState ,useEffect} from 'react';
const Login = () => {
Axios.defaults.withCredentials = true;
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [poste,setPoste] = useState("");
let navigate = useNavigate();



const useAuth = ()  => {
  Axios.post("http://localhost:3000/login",{
    email: email,
    password: password,
  }).then((response) => {
    localStorage.setItem('user',JSON.stringify(response.data.user)) ;
   setPoste(response.data.user.poste);
    console.log(response.data.user);

  });
}
useEffect(() => {

  const user = JSON.parse(localStorage.getItem('user'));
  
  if(user){
  if (user.poste==="Prof"){
    navigate('/enseignantDashboard')
  }else if(user.poste==="Etudiant"){
    navigate('/etudiantDashboard')
  }
  }else{
  navigate('/login');
  }
  },[poste])

return ( 
      <>
      <Container fluid className="mt-2 px-3">
          <Row>
              <Col lg={4} md={6} sm={12}>
         <Form action="/login" method="POST" className="loginForm">
           <img  src={encadrini_logo} />
           <h2>Se connecter</h2>
          <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
           <Form.Label>Adresse email</Form.Label>
           <Form.Control type="email" placeholder="Enter email" 
              onChange={(e) => {
                setEmail(e.target.value);}}
           />
          </Form.Group>

         <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Mot de passe"
             onChange={(e) => {
              setPassword(e.target.value);}}
          />
           </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Se rappeler de moi" />
           </Form.Group >

              
          <button className="loginButton" onClick={useAuth}  type="button">

             Se connecter
             </button>

          
            <a href="#" className="reset">Mot de passe oublié?</a>
             </Form>
             </Col>
        <Col lg={8} md={6} sm={12}>
            <img height={'500px'} width={'800px'} src={loginIllustration} />
         </Col>
        </Row>
        </Container>   

        </>
    );
}
 
export default Login;