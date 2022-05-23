import { StyledFormButton, StyledTitle } from "../../components/fPassword/Styles";
import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { TextField } from "../../components/fPassword/TextField";
import * as Yup from "yup";
import rocketImg from "../../images/reintialisation.png";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";


export const ForgottenPassword = () => {

  const [email, setEmail] = useState(null);
  const [send, setSend] = useState(false);

  function getInputValue(input) {
    // show the user input value to console
    setEmail(input.target.value);
    setSend(false);
    console.log(input.target.value);
  }

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    };
    if (send === true) {
      fetch("http://localhost:3000/forgottenPassword", requestOptions)
        .then((response) => response.json())
        .catch((err) => console.log(err));
    }

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  });

  const validate = Yup.object({
    email: Yup.string()
      .email("Email est invalide")
      .required("Email est requis"),
  });

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={4} md={6} sm={12} className="text-center mt-1 p-1">
            <Formik
              initialValues={{
                email: "",
              }}
              validationSchema={validate}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {(formik) => (
                <div>
                  <StyledTitle>Réintialiser votre mot de passe</StyledTitle>
                  <Form action="/forgottenPassword" method="post">
                    <TextField
                      name="email"
                      type="email"
                      placeholder="Entrez votre email"
                      onChange={getInputValue}
                    />
                    <StyledFormButton type="submit" onClick={() => setSend(true)} >continuer</StyledFormButton>
                  </Form>
                </div>
              )}
            </Formik>
          </Col>
          <Col lg={8} md={6} sm={12}>
            <img className="w-100" src={rocketImg} alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
};
