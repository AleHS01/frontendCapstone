import react from 'react'
import { TextField, Button,Grid } from '@mui/material';
import NavBar from './nav-bar'
import { useLocation } from 'react-router-dom';
import { DisabledByDefault } from '@mui/icons-material';
import PlaidLink from "react-plaid-link";


const CreditCardForm = () => {
    const location=useLocation();
    const user=location.state
    console.log(user)

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };
  
  // Get the URL fragment identifier
  const hash = window.location.hash;

  // Parse the parameters from the fragment identifier
  const params = new URLSearchParams(hash.slice(1));

  // Get the access token
  const accessToken = params.get('access_token');

  const fetchingUserGoogleData=()=>{
    // https://oauth2.example.com/callback#access_token=4/P7q7W91&token_type=Bearer&expires_in=3600
  }


  if(hash) console.log("Hash==> "+hash)

  return (
    <div>
        <NavBar></NavBar>
        <h1>Welcome {user.username}!!!</h1>
        

    </div>
  );
};

export default CreditCardForm;

