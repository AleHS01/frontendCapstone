import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpenseThunk } from "../redux/user/user.action";
import { TextField, Button, Typography } from "@mui/material";

const AddExpenseForm = ({ budgetId }) => {
  const dispatch = useDispatch();
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      budgetId,
      name: expenseName,
      amount: parseFloat(expenseAmount),
      category: expenseCategory,
    };

    dispatch(addExpenseThunk(expenseData));

    // Reset the form fields
    setExpenseName("");
    setExpenseAmount("");
    setExpenseCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom>
        Add Expense
      </Typography>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Expense Name"
        value={expenseName}
        onChange={(e) => setExpenseName(e.target.value)}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Amount"
        type="number"
        value={expenseAmount}
        onChange={(e) => setExpenseAmount(e.target.value)}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Category"
        value={expenseCategory}
        onChange={(e) => setExpenseCategory(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Expense
      </Button>
    </form>
  );
};

export default AddExpenseForm