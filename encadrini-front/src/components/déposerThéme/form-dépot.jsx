import React, { Component } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import UploadFiles from '../uploadFiles/uploadFiles';
import './form-dépot.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();
/*import MultiSelectDropdown from './MultiSelectDropdown'*/
const Countries = [
    { label: "Albania", value: 355 },
    { label: "Argentina", value: 54 },
    { label: "Austria", value: 43 },
    { label: "Cocos Islands", value: 61 },
    { label: "Kuwait", value: 965 },
    { label: "Sweden", value: 486 },
    { label: "Venezuela", value: 548 },
    { label: "Allmmbania", value: 355 },
    { label: "Argentina", value: 584 },
    { label: "Austria", value: 463 },
    { label: "Cocos Islands", value: 55 },
    { label: "Kuwait", value: 965 },
    { label: "Swedn", value: 6 },
    { label: "Venezuela", value: 8 },
    { label: "Albaia", value: 355 },
    { label: "Argentina", value: 5554 },
    { label: "Ausria", value: 43 },
    { label: "Cocops Islands", value: 6581 },
    { label: "Kuw,,it", value: 965 },
    { label: "Sweden", value: 4456 },
    { label: "Venezuela", value: 5888 }
];

const currencies = [
    {
        value: '1CPI',
        label: '1CPI',
    },
    {
        value: '2CPI',
        label: '2CPI',
    },
    {
        value: '1SC',
        label: '1SC',
    },
    {
        value: '2SC',
        label: '2CS',
    },
    {
        value: '3SC',
        label: '3SC',
    },
];


const FormDepot = () => {

    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    return (
        <div >

            <Box

                component="form"
                sx={{

                    '& .MuiTextField-root': { m: 1, width: '50ch' },


                }}
                className="Depot"

            >

                <UploadFiles /><br />
                <TextField

                    id="standard-select-currency"
                    select
                    label="Promotion"
                    name="promotion"
                    value={currency}
                    onChange={handleChange}
                    variant="standard"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField><br />
                <TextField

                    id="standard-basic"
                    label="Titre"
                    variant="standard"
                    name="title" /><br />

                <Select className="multiselect" placeholder="co-ecadrants" name="coencadreur" options={Countries} components={animatedComponents}
                    isMulti /><br />
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    name="description"
                    multiline
                    rows={4}
                /><br />
                <TextField

                    id="outlined-multiline-static"
                    label="Outiles"
                    name="outils"
                    multiline
                    rows={2}
                /> <br />

                <button type='submit' className='btndepot'>Déposer</button>
            </Box>


        </div >
    );

}

export default FormDepot;