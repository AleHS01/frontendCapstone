import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  InputAdornment,
  Typography,
  Tooltip,
  IconButton,
} from "@mui/material";
import SideBar from "./side-bar";

const IncomeForm = () => {
//   const [incomes, setIncomes] = useState([
//     { income_name: "Primary Job", income_value: "" },
//   ]);
const [incomes, setIncomes] = useState([])

  const navigate = useNavigate();

  const handleIncomeChange = (index, field, value) => {
    const updatedIncomes = [...incomes];
  
    // Check if an income object exists at the given index
    if (updatedIncomes[index]) {
      updatedIncomes[index] = {
        ...updatedIncomes[index],
        [field]: value,
      };
    } else {
      // If an income object does not exist, create one
      updatedIncomes[index] = { [field]: value };
    }
    
    setIncomes(updatedIncomes);
  };

  const addIncome = () => {
    if (incomes.length < 5) {
      setIncomes([...incomes, { income_name: "", income_value: "" }]);
    }
  };

  const deleteIncome = (index) => {
    const updatedIncomes = [...incomes];
    updatedIncomes.splice(index, 1);
    setIncomes(updatedIncomes);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/income",
        {
          incomes,
        },
        { withCredentials: true }
      );
      setIncomes([{ income_name: "Primary Job", income_value: "" }]);
      setTimeout(() => {
        navigate("/user");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const renderIncome = (income, index) => (
    <div key={index}>
      <TextField
        label={`Income #${index + 1}`}
        value={income.income_name}
        onChange={(event) =>
          handleIncomeChange(index, "income_name", event.target.value)
        }
        style={{ marginBottom: "1rem" }}
        placeholder="Enter income source"
      />
      <TextField
        label={`Income Value`}
        type="number"
        value={income.income_value}
        onChange={(event) =>
          handleIncomeChange(index, "income_value", event.target.value)
        }
        inputProps={{
          min: "0",
          step: "0.01",
        }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        placeholder="0.00"
        style={{ marginBottom: "1rem" }}
      />
      {index >= 1 && (
        <IconButton onClick={() => deleteIncome(index)}>
          <Typography variant="body2">X</Typography>
        </IconButton>
      )}
    </div>
  );

  return (
    <div className="dashboard">
      <SideBar></SideBar>
      <div className="content">
        <Typography variant="h1" style={{ marginBottom: "2rem" }}>
          Income Form
        </Typography>
        <form onSubmit={handleSubmit}>
          {incomes.map(renderIncome)}
          <Button
            variant="contained"
            color="primary"
            onClick={addIncome}
            disabled={incomes.length >= 5}
          >
            Add Income
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default IncomeForm
