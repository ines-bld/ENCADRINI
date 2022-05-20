import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './../../components/fPassword/TextField';
import * as Yup from 'yup';
import rocketImg from './../../images/setpsw.png';
import { Col, Container, Row } from "react-bootstrap";
import { StyledFormButton, StyledTitle } from "./../../components/fPassword/Styles";
import "bootstrap/dist/css/bootstrap.css";


export const ResetPassword = () => {
    const validate = Yup.object({

        password: Yup.string()
            .min(6, 'Le mot de passe doit comporter au moins 6 caractères')
            .required('Mot de passe requis'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Le mot de passe doit correspondre')
            .required('Confirmer le mot de passe est requis'),
    })

    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col lg={4} md={6} sm={12} className="text-center mt-1 p-1">
                        <Formik
                            initialValues={{
                                password: '',
                                confirmPassword: ''
                            }}
                            validationSchema={validate}
                            onSubmit={values => {
                                console.log(values)
                            }}
                        >
                            {formik => (
                                <div>
                                    <StyledTitle>choisissez un nauveau mot de passe</StyledTitle>
                                    <Form>
                                        <TextField name="password" type="password" placeholder="Nauveau mot de passe" />
                                        <TextField name="confirmPassword" type="password" placeholder=" Confirmez nauveau mot de passe" />

                                        <StyledFormButton type="reset">Ignorer </StyledFormButton>
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
