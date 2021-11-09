import React, {useEffect} from 'react';
import './App.css'
import Home from "./pages/Home";
import {Route, Routes} from 'react-router-dom'
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Container from "@mui/material/Container";
import "./firebaseConf";
import {useDispatch, useSelector} from "react-redux";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {setUser} from "./store/slices/userSlice";

const App = () => {
    const dispatch = useDispatch();
    const {email} = useSelector(state => state.user );

    useEffect(()=> {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                console.log(user)
                dispatch(setUser( {
                    email: user.email,
                    id: uid,
                    token: user.accessToken

                }))

                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, [email])
    return (
        <Container sx={{marginY: 2}}>
            {email}
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<SignUp/>}/>
            </Routes>
        </Container>
    );
};

export default App;