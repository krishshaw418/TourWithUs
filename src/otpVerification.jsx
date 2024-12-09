import React, { useState } from "react";
import Appbar from "./Appbar";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Textfield from "./Textfield";
import BasicButton from "./BasicButton";
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import "./App.css"

const OtpVerification = () => {

    const navigate = useNavigate();

    const [oTP,setOTP] = React.useState({
        email:'',
        otp:''
    })
    
    const handleChange = (e)=>{
        setOTP({
            ...oTP,
            [e.target.name]: e.target.value
        }
        );
    }
    
    const handleSubmission = async(e)=>{
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:3000/user/otp-verification',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(oTP)
            });
        if(response.ok){
            const data = await response.json();
            console.log(data);
            navigate('/welcome');
        }
        else{
            console.error('Error:',response.statusText);
            alert('Invalid OTP! Please try again.');
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
          Please fill the OTP you from your mail.
        </Typography>
        <Card className="form-card">
        <CardContent>
        {/* <Textfield name="username" value={userData.username} label="Name" onChange={handleChange}></Textfield><br /> */}
        <Textfield name="email" value={oTP.email} label="Email" onChange={handleChange}></Textfield><br />
        <Textfield name="otp" value={oTP.otp} label="OTP" onChange={handleChange}></Textfield>
        <div className="button-container">
        <BasicButton label="Verify" type="submit" onClick={handleSubmission}></BasicButton>
        </div>
        </CardContent>
        </Card>
        </div>
        </div>
    )
};

export default OtpVerification;