import React from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Form = ({btnText}) => {
    const submitForm =(e)=> {
        e.preventDefault()
        console.log(1)
    };
    return (
        <form onSubmit={submitForm}>
            <TextField
                required
                fullWidth
                margin='normal'
                id="outlined-required"
                label="Email"
            />
            <TextField
                required
                fullWidth
                margin='normal'
                id="outlined-required"
                label="Password"
                type='password'
            />
            <Button onClick={submitForm} variant="contained" size="large" sx={{marginY: 2}}>
                {btnText}
            </Button>

        </form>
    );
};

export default Form;