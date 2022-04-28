import { Button,Form, Container,Row,Col} from "react-bootstrap";
import loginIllustration from '../../images/6343823_Artboard 1.svg'; 
import encadrini_logo from '../../images/Logo.svg';
import "bootstrap/dist/css/bootstrap.css"; 
import {Heading} from '../HeroSection/HeroElements'; 
import "./login.css";
const Login = () => {
    return ( 
      <>
      <Container className="mt-5">
          <Row>
              <Col lg={4} md={6} sm={12}>
         <Form>
           <img className=" aligh-left logo" src={encadrini_logo} />
           <Heading><b>Se connecter</b></Heading>
          <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
           <Form.Label>Adresse email</Form.Label>
           <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Mot de passe"/>
           </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Se rappeler de moi" />
           </Form.Group>
             <center><button className="loginButton" type="submit">
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