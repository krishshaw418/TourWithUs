import React, {useContext, useState } from "react";
import Appbar from "./Appbar";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Textfield from "./Textfield";
import BasicButton from "./BasicButton";
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
// import { UserContext } from "./UserContext";
import "./App.css"

const Signin = () => {

    // const { setUser } = useContext(UserContext);

    const [userCreds,setUserCreds] = React.useState({
        email:'',
        password:''
    })

    const navigate = useNavigate();
    
    const handleChange = (e)=>{
        setUserCreds({
            ...userCreds,
            [e.target.name]: e.target.value
        }
        );
    }
    
    const handleSubmission = async(e)=>{
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:3000/user/SignIn',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(userCreds)
            });
        if(response.ok){
            const data = await response.json();
            console.log(data);
            // setUser({Name: response.name, Email: response.email});
            navigate('/user/otp-verification');
        }
        else{
            console.error('Error:',response.statusText);
            alert('SignIn Failed :(');
        }
    }
        catch(error){
            console.error('Error:',error)
            alert('An Error occured :(');
        }
    }    

    return (
        <div>
        <Appbar></Appbar>
        <div className="center-form">
        <Typography variant="h4" component="h2" gutterBottom>
          Welcome! Please Sign In
        </Typography>
        <Card className="form-card">
        <CardContent>
        {/* <Textfield name="username" value={userData.username} label="Name" onChange={handleChange}></Textfield><br /> */}
        <Textfield name="email" value={userCreds.email} label="Email" onChange={handleChange}></Textfield><br />
        <Textfield name="password" value={userCreds.password} label="Password" onChange={handleChange}></Textfield>
        <div className="button-container">
        <BasicButton label="Sign In" type="submit" onClick={handleSubmission}></BasicButton>
        </div>
        </CardContent>
        </Card>
        </div>
        </div>
    )
};

export default Signin;
