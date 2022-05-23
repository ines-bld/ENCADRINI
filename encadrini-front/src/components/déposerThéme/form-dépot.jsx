import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import UploadFiles from '../uploadFiles/uploadFiles';
import './form-dépot.css';

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
        <div class="Depot">

            <Box

                component="form"
                sx={{

                    '& .MuiTextField-root': { m: 3, width: '50ch' },


                }}
                noValidate
                autoComplete="off"
            >
                <UploadFiles /><br />
                <TextField
                    id="standard-select-currency"
                    select
                    label="Promotion"
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
                <TextField id="standard-basic" label="Titre" variant="standard" /><br />

                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                /><br />
                <TextField
                    id="outlined-multiline-static"
                    label="Outiles"
                    multiline
                    rows={2}
                /> <br />

                <button type='submit'>Déposer</button>

            </Box>


        </div >
    );

}

export default FormDepot;