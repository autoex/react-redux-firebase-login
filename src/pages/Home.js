import React from 'react';
import {getAuth} from "firebase/auth";
import Button from "@mui/material/Button";
import {Navigate} from 'react-router-dom'
import {useAuth} from "../hooks/useAuth";
import {useDispatch} from "react-redux";
import {removeUser} from "../store/slices/userSlice";

const Home = () => {
    const {isAuth, email} = useAuth();
    const dispatch = useDispatch();
 return  isAuth ?(<div>
             <h1>Welcome, {email}</h1>
             <Button onClick={() => {
                 getAuth().signOut();
                 dispatch(removeUser())
             }}>Log out</Button>
         </div>)
         :
         (<Navigate to="/login"/>)




};

export default Home;