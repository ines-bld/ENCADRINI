import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './../components/TextField';
import * as Yup from 'yup';
import { StyledFormButton, StyledTitle } from "./../components/Styles";
import rocketImg from './../images/reintialisation.png';
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export const ForgottenPassword = () => {
  const validate = Yup.object({

    email: Yup.string()
      .email('Email est invalide')
      .required('Email est requis')
  })


  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col lg={4} md={6} sm={12} className="text-center mt-1 p-1">

            <Formik
              initialValues={{
                email: ''
              }}
              validationSchema={validate}
              onSubmit={values => {
                console.log(values)
              }}
            >
              {formik => (
                <div>
                  <StyledTitle >Réintialiser votre mot de passe</StyledTitle >
                  <Form>
                    <TextField name="email" type="email" placeholder="Entrez votre email" />
                    <StyledFormButton type="submit">continuer</StyledFormButton>

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

  )

}
