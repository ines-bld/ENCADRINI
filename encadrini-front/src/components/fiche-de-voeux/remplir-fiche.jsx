import React, { Component, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import './remplir-fiche.css';
import Select from 'react-select';
import MenuItem from '@mui/material/MenuItem';



const themes = [
    {
        value: '1',
        label: 'theme1',
        shouldBeDisplayed: 'false',
    },
    {
        value: '2',
        label: 'theme2',
        shouldBeDisplayed: 'false',
    },
    {
        value: '3',
        label: 'theme3',
        shouldBeDisplayed: 'false',
    },
    {
        value: '4',
        label: 'theme4',
        shouldBeDisplayed: 'false',
    },
    {
        value: '5',
        label: 'theme5',
        shouldBeDisplayed: 'false',
    },
    {
        value: '6',
        label: 'theme6',
        shouldBeDisplayed: 'false',
    },


];


const RemplirFiche = () => {

    const [theme, ddlvalue] = useState(themes.value);

    const ddlHandler = e => {
        ddlvalue(e.value)
    };

    return (
        <div >
            <h2 className='text'>Ma fiche de voeux : </h2>

            <Box

                component="form"
                sx={{

                    '& .MuiTextField-root': { m: 1, width: '50ch' },


                }}
                className="fiche"

            >

                <Select
                    className="select"
                    options={themes}
                    placeholder="Premier Choix"
                    onChange={ddlHandler}
                /><br />

                <Select
                    className="select"
                    options={themes}
                    placeholder="Deuxième choix"

                    filterOption={(option) => option.value !== "1"}
                //onChange={ }
                /><br />
                <Select
                    placeholder="Troisième choix"

                    className="select"
                    options={themes}
                //onChange={ }
                /> <br />


                <button type='submit' className='btnfiche'>Confirmer</button>
            </Box>
        </div>
    );

}
export default RemplirFiche;