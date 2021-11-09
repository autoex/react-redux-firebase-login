import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import Form from "../components/Form";
import {useDispatch} from "react-redux";
import {signInWithEmailAndPassword, getAuth} from "firebase/auth";
import {setUser} from "../store/slices/userSlice";
import {useAuth} from "../hooks/useAuth";
import {Navigate} from 'react-router-dom';

const Login = () => {
    const {isAuth} = useAuth();
    const navigate = useNavigate();
    console.log(navigate)
    const dispatch = useDispatch();
    const loginUser = (email, password, setErrorPassword, setErrorEmail) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }));
                debugger
                navigate('/')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                if (errorCode === 'auth/invalid-email') setErrorEmail(errorMessage);
                if (errorCode === 'auth/wrong-password') setErrorPassword(errorMessage);
                // ..
            });


    };
    return  isAuth ? <Navigate to={'/'} />
    :
        (
        <div>
            <h1>Login</h1>
            <Form btnText={'Login'} submitHandle={loginUser}/>
            <p className='text-right'>Please <Link to='/signup'>Sign Up</Link></p>
        </div>
    );
};

export default Login;