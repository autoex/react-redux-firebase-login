import React from 'react';
import './App.css'
import Home from "./pages/Home";
import {Route, Routes, Navigate} from 'react-router-dom'
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Container from "@mui/material/Container";
import  "./firebaseConf";

const App = () => {
    return (
        <Container sx={{marginY: 2}}>
            <Routes>
                <Route path='/' element={<Navigate to='/login'/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<SignUp/>}/>
            </Routes>
        </Container>
    );
};

export default App;