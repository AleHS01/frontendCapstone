import react from "react";
import { TextField, Button, Grid } from "@mui/material";
import NavBar from "./nav-bar";
import { useLocation } from "react-router-dom";
import { DisabledByDefault } from "@mui/icons-material";
import PlaidLink from "react-plaid-link";
import { Link } from "react-router-dom";
import axios from "axios";

const CreditCardForm = () => {
  const location = useLocation();
  const user = location.state;
  console.log(user);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  const handleCLick = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/user", {
        withCredentials: true,
      });
      console.log("Response of button", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavBar></NavBar>
      <button onClick={handleCLick}>Button</button>
      <h1>Welcome {user.username}!!!</h1>
      <Link to={"/linkplaid"}>
        <button>Connect Bank Account</button>
      </Link>
    </div>
  );
};

export default CreditCardForm;
