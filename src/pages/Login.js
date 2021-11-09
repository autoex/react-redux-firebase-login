import React from 'react';
import {Link} from "react-router-dom";
import Form from "../components/Form";
import {useDispatch} from "react-redux";
import {signInWithEmailAndPassword, getAuth} from "firebase/auth";
import {setUser} from "../store/slices/userSlice";

const Login = () => {
    const dispatch = useDispatch();
    const loginUser =(email, password, setErrorPassword, setErrorEmail)=> {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user)
                dispatch(setUser({
                    email: user.email
                }))
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                if(errorCode === 'auth/invalid-email') setErrorEmail(errorMessage);
                if(errorCode === 'auth/wrong-password') setErrorPassword(errorMessage);
                // ..
            });


    };
    return (
        <div>
            <h1>Login</h1>
            <Form btnText={'Login'} submitHandle={loginUser} />
            <p className='text-right'>Please <Link to='/signup'>Sign Up</Link></p>
        </div>
    );
};

export default Login;