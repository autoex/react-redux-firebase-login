import React from 'react';
import {Link} from "react-router-dom";
import Form from "../components/Form";

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <Form btnText={'Login'} />
            <p className='text-right'>Please <Link to='/signup'>Sign Up</Link></p>
        </div>
    );
};

export default Login;