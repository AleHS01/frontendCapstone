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
// import DeleteIcon from "@mui/icons-material/Delete";

const ExpensesForm = () => {
  const [expenses, setExpenses] = useState([
    { expense_name: "Monthly Income", expense_value: "" },
    { expense_name: "Car Insurance", expense_value: "" },
    // Other default expenses
  ]);
  const navigate = useNavigate();

  // const handleExpenseChange = (index, field, value) => {
  //   const updatedExpenses = [...expenses];
  //   updatedExpenses[index][field] = value;
  //   setExpenses(updatedExpenses);
  // };
  const handleExpenseChange = (index, field, value) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index] = {
      ...updatedExpenses[index],
      [field]: value,
    };
    setExpenses(updatedExpenses);
  };

  const addExpense = () => {
    if (expenses.length < 10) {
      setExpenses([...expenses, { expense_name: "", expense_value: "" }]);
    }
  };

  const deleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Expenses array before send:\n", expenses);
    try {
      const respose = await axios.post(
        "http://localhost:8080/api/expense",
        {
          expenses,
        },
        { withCredentials: true }
      );
      console.log("Response Expenses:\n", respose.data);
      setExpenses([{ expense_name: "Monthly Income", expense_value: "" }]);
      setTimeout(() => {
        navigate("/user");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const renderExpense = (expense, index) => (
    <div key={index}>
      <TextField
        label={`Expense #${index + 1}`}
        value={expense.expense_name}
        onChange={(event) =>
          handleExpenseChange(index, "expense_name", event.target.value)
        }
        style={{ marginBottom: "1rem" }}
        placeholder="Enter expense name"
      />
      <TextField
        label={`Expense Value`}
        type="number"
        value={expense.expense_value}
        onChange={(event) =>
          handleExpenseChange(index, "expense_value", event.target.value)
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
        // <Tooltip title="You can only have up to 10 expenses" placement="right">
        <IconButton onClick={() => deleteExpense(index)}>
          <span>
            <IconButton disabled>
              <Typography variant="body2">X</Typography>
            </IconButton>
          </span>
        </IconButton>
        // </Tooltip>
      )}
    </div>
  );

  return (
    <div>
      <Typography variant="h1" style={{ marginBottom: "2rem" }}>
        Finance Form
      </Typography>
      <form onSubmit={handleSubmit}>
        {expenses.map(renderExpense)}
        {expenses.length >= 10 && (
          <Typography color="error" variant="caption">
            Expense limit reached. You cannot add more than 10 expenses.
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={addExpense}
          disabled={expenses.length >= 10}
        >
          Add Expense
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ExpensesForm;
