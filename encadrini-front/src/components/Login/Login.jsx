import { Form, Container, Row, Col } from "react-bootstrap";
import loginIllustration from "../../images/login.svg";
import encadrini_logo from "../../images/Logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Login = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  //axios.defaults.withCredentials = true;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [poste, setPoste] = useState("");
  let navigate = useNavigate();

  // const useAuth = () => {

  //   console.log("inside axios")
  //   console.log(email , password)
  //   Axios.post("http://localhost:5000/authentification", {
  //     email: email,
  //     password: password,
  //   }).then((response) => {
  //     localStorage.setItem("user", JSON.stringify(response.data.user));
  //     setPoste(response.data.user.poste);
  //     console.log(response.data.user);
  //   });
  // };

  const login = async (e) => {
    axios.defaults.withCredentials = true;
    console.log("inside axios");
    e.preventDefault();
    await axios
      .post(`http://localhost:5000/authentification`, {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setPoste(response.data.user.poste);
        console.log(response.data.user);
      });
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      const expr = user.poste;
      switch (expr) {
        case "Prof":
          navigate("/enseignantDashboard");
          break;
        case "Etudiant":
          navigate("/etudiantDashboard");
          break;
        case "Admin":
          navigate("/dashboard");
          break;
        case "Entreprise":
          navigate("/enseignantDashboard");
          break;
        default:
          console.log(`Sorry, we are out of ${expr}.`);
      }
    } else {
      navigate("/login");
    }
  }, [poste]);

  return (
    <>
      <Container fluid className="mt-2 px-3">
        <Row>
          <Col lg={4} md={6} sm={12}>
            <Form
              className="loginForm"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Link to="/" style={{ textDecoration: "none" }} className="logo">
                <img src={encadrini_logo} />
              </Link>
              <h2>Se connecter</h2>
              <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                <Form.Label>Adresse email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please type your email.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Mot de passe"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                    console.log(password);
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please type your password.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Se rappeler de moi" />
              </Form.Group>

              <button className="loginButton" onClick={login} type="button">
                Se connecter
              </button>

              <a href="/forgottenPassword" className="reset">
                Mot de passe oublié?
              </a>
            </Form>
          </Col>
          <Col lg={8} md={6} sm={12}>
            <img height={"500px"} width={"800px"} src={loginIllustration} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
