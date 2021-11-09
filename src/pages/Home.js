import React from 'react';
import {getAuth} from "firebase/auth";
import Button from "@mui/material/Button";

const Home = ({email}) => {
    return (
        <div>
           <h1>Welcome, {email}</h1>
            <Button onClick={()=>getAuth().signOut()}>Log out</Button>
        </div>
    );
};

export default Home;