import React from 'react';
import {Link} from "react-router-dom";
import Form from "../components/Form";

const SignUp = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <Form btnText={'Signup'} />
            <p className='text-right'>Please <Link to='/login'>Log In</Link></p>
        </div>
    );
};

export default SignUp;