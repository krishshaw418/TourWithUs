import React, { useEffect, useState } from "react";
import Appbar from "./Appbar";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Textfield from "./Textfield";
import BasicButton from "./BasicButton";
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import "./App.css"

const Signup = () => {

    const [userData,setUserData] = React.useState({
        username:'',
        email:'',
        password:''
    })

    // useEffect(()=>{
    //     fetch('/user/profile',{
    //         method:'GET',
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body: JSON.stringify(userData.email)
    //     }).then((response)=>{
    //         response.json().then((data)=>{
    //             console.log(data);
    //         })
    //     })
    // },[]);

const navigate = useNavigate();

    const handleChange = (e)=>{
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        }
        );
    }
    
    const handleSubmission = async(e)=>{
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:3000/user/SignUp',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(userData)
            });
        if(response.ok){
            const data = await response.json();
            console.log(data);
            navigate('/welcome',{state:{data}});
        }
        else{
            console.error('Error:',response.statusText);
            alert('User already Exist! Please Sign In :(');
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
          Welcome! Please Sign Up
        </Typography>
        <Card className="form-card">
        <CardContent>
        <Textfield name="username" value={userData.username} label="Name" onChange={handleChange}></Textfield><br />
        <Textfield name="email" value={userData.email} label="Email" onChange={handleChange}></Textfield><br />
        <Textfield name="password" value={userData.password} label="Password" onChange={handleChange}></Textfield>
        <div className="button-container">
        <BasicButton label="Sign Up" type="submit" onClick={handleSubmission}></BasicButton>
        </div>
        </CardContent>
        </Card>
        </div>
        </div>
    )
};

export default Signup;
