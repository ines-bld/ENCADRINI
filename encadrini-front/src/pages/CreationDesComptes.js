import React from 'react';
import { StyledButton, StyledTitle2, Chosen } from "./../components/fPassword/Styles";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Container, Row } from "react-bootstrap";


export const CreationDesComptes = () => {
    return (
        <>

            <StyledTitle2 >Créer un compte pour ?</StyledTitle2><br />
            <div className="col align-self-center">
                <StyledButton type="submit">Etudiant</StyledButton><br />
                <StyledButton type="submit">Enseignant</StyledButton><br />
                <StyledButton type="submit">Entreprise</StyledButton><br />
            </div >
        </>


    )

}