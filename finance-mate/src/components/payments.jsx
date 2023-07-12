import react from 'react'
import { TextField, Button,Grid } from '@mui/material';
import NavBar from './nav-bar'

const CreditCardForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div>
    <NavBar></NavBar>
        <form onSubmit={handleSubmit}>
        <TextField
            label="Cardholder Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            />
        <TextField
            label="Card Number"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            />
        <TextField
            label="Expiration Date"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            />
        <TextField
            label="CVV"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            />
        <Button type="submit" variant="contained" color="primary">
            Submit
        </Button>
        </form> 
    </div>
  );
};

export default CreditCardForm;
