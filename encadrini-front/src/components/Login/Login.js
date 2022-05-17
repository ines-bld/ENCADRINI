import { Button,Form, Container,Row,Col} from "react-bootstrap";
import loginIllustration from '../../images/6343823_Artboard 1.svg'; 
import encadrini_logo from '../../images/Logo.svg';
import "bootstrap/dist/css/bootstrap.css"; 
import {Heading} from '../HeroSection/HeroElements'; 
import "./login.css";
import{Link} from "react-router-dom";
import Axios from "axios";
import React, { useState } from 'react';




const Login = () => {
Axios.defaults.withCredentials = true;
const [email, setEmail] = useState("");
const [passwrd, setPasswrd] = useState("");
const [error, setError] = useState("");
const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{1,})$/i;
const regexPasswrd = "";

const checkEmail = (e) => {
  setEmail(e.target.value);
  if(regex.test(email) === false && email.trim().length !== 1)
  {
    setError('Entrez un email valid');
    console.log(email.trim().length)
    return false;
  }else if(email.trim().length == 1)
  {
    console.log(email.trim().length)
    setError('Le champ est vide');
    return false;
  }
  else{
    setError('');
    return true;
  }
}
const checkPassword = (e) => {
  setPasswrd(e.target.value);
}
const auth = () => {
    Axios.post("http://localhost:5000/login", {
      email: email,
      passwrd: passwrd,
    }).then((response) => {
      console.log(response);
    });
   
 
};
const handlesubmit=(e)=>{
  console.log(email,passwrd);
}
return ( 
      <>
      <Container className="mt-5">
          <Row>
              <Col lg={4} md={6} sm={12}>
         <Form action="/login" method="post" onSubmit={handlesubmit}>
           <img className=" aligh-left logo" src={encadrini_logo} />
           <Heading><b>Se connecter</b></Heading>
          <Form.Group isRequired className="mb-3 mt-4" controlId="formBasicEmail">
           <Form.Label>Adresse email</Form.Label>
           <Form.Control   type="email" placeholder="Enter email" 
              onChange={checkEmail}
           />
           <p className="text-danger p-2">{error}</p>
          </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Mot de passe"
             onChange={checkPassword}
          />
           </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Se rappeler de moi" />
           </Form.Group>
             <center>
              
          <button className="loginButton" onClick={auth}  type="submit">
             Se connecter
             </button>
             </center>
           <div className="text-center mt-3">
            <a href="#" className="reset">Mot de passe oublié?</a>
            </div>
             </Form>
             </Col>
        <Col lg={8} md={6} sm={12}>
            <img className="w-100" src={loginIllustration} />
         </Col>
        </Row>
        </Container>   

        </>
    );
}
 
export default Login;