import React, {useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


const Form = ({btnText, submitHandle}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');




    const submitForm =(e)=> {
        e.preventDefault();
        submitHandle(email, password, setErrorPassword, setErrorEmail);
    };
    return (
        <form onSubmit={submitForm}>
            <TextField
                error={!!errorEmail}
                helperText={errorEmail}
                required
                fullWidth
                margin='normal'
                id="outlined-required"
                label="Email"
                value={email}
                onChange={(e=>setEmail(e.target.value))}
            />
            <TextField
                error={!!errorPassword}
                helperText={errorPassword}
                required
                fullWidth
                margin='normal'
                id="outlined-required"
                label="Password"
                type='password'
                value={password}
                onChange={(e=>setPassword(e.target.value))}
            />
            <Button onClick={submitForm} variant="contained" size="large" sx={{marginY: 2}}>
                {btnText}
            </Button>

        </form>
    );
};

export default Form;