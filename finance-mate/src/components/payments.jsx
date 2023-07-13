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

  return (
    <div>
        <NavBar></NavBar>
        <h1>Welcome {user.username}!!!</h1>
        

    </div>
  );
};

export default CreditCardForm;
