import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { UploadDiv, CreationButton, Chosen } from "./../components/fPassword/Styles";
export const PourEtudiant = () => {
    return (
        <div>

            <UploadDiv>
                <input type="file" id="upload" accept=".xlsx, .xls" hidden />
                <Chosen for="upload">+</Chosen>
                <span > ajoutez un fichier exel..</span>
                <CreationButton>crée</CreationButton>
            </UploadDiv>
        </div>

    )
}