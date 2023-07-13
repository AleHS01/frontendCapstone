import React, { useState,useEffect } from 'react';
import { Button, TextField, Stack } from '@mui/material';
import { BrowserRouter as Link } from 'react-router-dom';
import GoogleButton from 'react-google-button'

import Popup from 'reactjs-popup';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import {gapi} from "gapi-script"


const clientId= "686753266137-b2qsgsue7idasuae2gpbdmoba3lo9bul.apps.googleusercontent.com"

function LoginMain(props) {
  const [username,setUsername]=useState();
  const [password,setPassword]=useState();
  const navigate=useNavigate();

  
  const handleUsername=(event)=>{
    setUsername(event.target.value)
  }
  const handlePassword=(event)=>{
    setPassword(event.target.value)
  }

  const handleLocalLogin = async () => {
    const signUpLink="http://localhost:8080/api/login"
    const reqBody={username,password}
    try {
      const logininfo=await axios.post(signUpLink,reqBody)
      // alert (username+" logged in")
      console.log(logininfo.data.user)
      navigate(`/payments`,{state:logininfo.data.user})
    } catch (error) {
      alert(error)
    }
    
  };

  const handleLocalSignUp= async(event)=>{
    // event.preventDefault()
    const signupLink="http://localhost:8080/api/signup"
    const reqBody={username,password}
    try {
      const response=await axios.post(signupLink,reqBody)
      console.log(response)
      alert("User Added Succefully")
    } catch (error) {
      console.log(error)
    }


  }

  
  const OAuthRedirection=async ()=>{
    const auth_2_url="https://accounts.google.com/o/oauth2/v2/auth"

    const params = {
      client_id: clientId,
      redirect_uri: 'localhost:3030/payments',
      response_type: 'token',
      scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
      include_granted_scopes: true,
      state: 'pass-through value'
    };

    const queryString = Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');

    const authorizationUrl = `${auth_2_url}?${queryString}`;


  
    window.location.href=authorizationUrl;
  }

  
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      spacing={2}
    >
      <h1>Finance Mate</h1>
      <TextField label="Username" variant="outlined" onChange={handleUsername}/>
      <TextField label="Password" type="password" variant="outlined" onChange={handlePassword}/>
      
      <Button variant="contained" color="primary" onClick={handleLocalLogin}>
        Login
      </Button>

      <Button variant="outlined" color="primary" onClick={handleLocalSignUp}>
        Sign UP
      </Button>

     <GoogleButton onClick={OAuthRedirection}></GoogleButton>

      



    </Stack>
  );
}

export default LoginMain;

