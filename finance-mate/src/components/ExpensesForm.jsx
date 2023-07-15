import React, { useState } from "react";
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
    { name: "Monthly Income", value: "" },
    { name: "Car Insurance", value: "" },
    // Other default expenses
  ]);

  const handleExpenseChange = (index, field, value) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index][field] = value;
    setExpenses(updatedExpenses);
  };

  const addExpense = () => {
    if (expenses.length < 10) {
      setExpenses([...expenses, { name: "", value: "" }]);
    }
  };

  const deleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // You can access the expenses array with the updated values
    console.log(expenses);
  };

  const renderExpense = (expense, index) => (
    <div key={index}>
      <TextField
        label={`Expense #${index + 1}`}
        value={expense.name}
        onChange={(event) =>
          handleExpenseChange(index, "name", event.target.value)
        }
        style={{ marginBottom: "1rem" }}
        placeholder="Enter expense name"
      />
      <TextField
        label={`Expense Value`}
        type="number"
        value={expense.value}
        onChange={(event) =>
          handleExpenseChange(index, "value", event.target.value)
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
      {index < 1 && (
        // <Tooltip title="You can only have up to 10 expenses" placement="right">
        <span>
          <IconButton disabled>
            <Typography variant="body2">X</Typography>
          </IconButton>
        </span>
        // </Tooltip>
      )}
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
