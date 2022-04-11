import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './../components/fPassword/TextField';
import * as Yup from 'yup';
import { StyledFormButton, StyledTitle } from "./../components/fPassword/Styles";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
export const EnterCode = () => {
    const validate = Yup.object({
        code: Yup.string()
            .min(5, 'Doit contenir 5 caractères')
            .max(5, 'Doit contenir 5 caractères')
            .required('le code est requis')
    })

    return (
        <>
            <Container className="mt-5">
                <Row >
                    <Col lg={4} md={6} sm={12} className=" align-self-center text-center mt-1 p-1 ">
                        <Formik
                            initialValues={{
                                firstName: ''
                            }}
                            validationSchema={validate}
                            onSubmit={values => {
                                console.log(values)
                            }}
                        >
                            {formik => (
                                <div>
                                    <StyledTitle >Entrez le code de sécurité</StyledTitle >
                                    <Form>
                                        <TextField name="code" type="text" placeholder="Entrez le code" />
                                        <StyledFormButton type="reset">Annuler </StyledFormButton>
                                        <StyledFormButton type="submit">continuer</StyledFormButton><br />
                                        <button type="button" class="btn mt-3 btn-link">code non reçu</button>

                                    </Form>
                                </div>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
