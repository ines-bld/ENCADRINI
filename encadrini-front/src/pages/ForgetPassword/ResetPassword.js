import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { TextField } from "./../../components/TextField";
import * as Yup from "yup";
import rocketImg from "./../../images/setpsw.png";
import { Col, Container, Row } from "react-bootstrap";
import { StyledFormButton, StyledTitle } from "./../../components/Styles";
import "bootstrap/dist/css/bootstrap.css";

export const ResetPassword = () => {
  

  //get 
  useEffect(() => {
    fetchItems();
  }, []);

  const [Items, setItems] = useState([]);
  
  const fetchItems = async () => {
    const data = await fetch(`/resetPassword${window.location.search}`);
    const Items = await data.json();
    setItems(Items);
  };

  //post

  const [password, setpw] = useState(null);
  const [send, setSend] = useState(false);

  function getInputValue(input) {
    // show the user input value to console
    setpw(input.target.value);
    setSend(false);
    console.log(input.target.value);
  }

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: password , token : Items}),
    };
    if (send === true) {
      fetch("http://localhost:5000/resetPassword", requestOptions)
        .then((response) => response.json())
        .catch((err) => console.log(err));
    }
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  });

  const validate = Yup.object({
    password: Yup.string()
      .min(6, "Le mot de passe doit comporter au moins 6 caractères")
      .required("Mot de passe requis"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Le mot de passe doit correspondre")
      .required("Confirmer le mot de passe est requis"),
  });

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={4} md={6} sm={12} className="text-center mt-1 p-1">
            <Formik
              // initialValues={{
              //   password: "",
              //   confirmPassword: "",
              // }}
              validationSchema={validate}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {(formik) => (
                <div>
                  <StyledTitle>choisissez un nauveau mot de passe</StyledTitle>
                  <Form action="/resetPassword" method="post">
                      <input type="hidden" name="token" class="form-control" value={Items.token}/>
                    <TextField
                      name="password"
                      type="password"
                      placeholder="Nauveau mot de passe"
                    />
                    <TextField
                      name="confirmPassword"
                      type="password"
                      placeholder=" Confirmez nauveau mot de passe"
                      onChange={getInputValue}
                    />

                    <StyledFormButton type="reset">Ignorer </StyledFormButton>
                    <StyledFormButton
                      type="submit"
                      onClick={() => setSend(true)}
                    >
                      continuer
                    </StyledFormButton>
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
