import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import Form from "../components/Form";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {useDispatch} from "react-redux";
import {setUser} from "../store/slices/userSlice";

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const createUser =(email, password, setErrorPassword, setErrorEmail)=> {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user)
                dispatch(setUser( {
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken

                }));
                navigate('/')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if(errorCode === 'auth/invalid-email') setErrorEmail(errorMessage);
                if(errorCode === 'auth/weak-password') setErrorPassword(errorMessage);


                // ..
            });


    };
    return (
        <div>
            <h1>Sign Up</h1>
            <Form btnText={'Signup'} submitHandle={createUser} />
            <p className='text-right'>Please <Link to='/login'>Log In</Link></p>
        </div>
    );
};

export default SignUp;