import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getExpensesThunk,
  updateExpenseThunk,
  createExpensesThunk,
  deleteExpenseThunk,
} from "../redux/user/user.action";
import {
  Button,
  TextField,
  InputAdornment,
  Typography,
  Tooltip,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import SideBar from "./side-bar";
// import DeleteIcon from "@mui/icons-material/Delete";

const ExpensesForm = () => {
  const [expensesList, setExpensesList] = useState(null);
  const [editedExpenseIndex, setEditedExpenseIndex] = useState(null);
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.user_expenses);
  const navigate = useNavigate();

  // [
  //   { expense_name: "Monthly Income", expense_value: "" },
  //   { expense_name: "Car Insurance", expense_value: "" },
  // ]

  useEffect(() => {
    const getExpenses = async () => {
      setExpensesList(await dispatch(getExpensesThunk()));
    };
    getExpenses();
  }, []);

  const handleExpenseChange = (index, field, value) => {
    const updatedExpenses = [...expensesList];
    updatedExpenses[index] = {
      ...updatedExpenses[index],
      [field]: value,
    };
    setExpensesList(updatedExpenses);
  };

  const addExpense = () => {
    if (expenses.length < 10) {
      setExpensesList([
        ...expensesList,
        { expense_name: "", expense_value: "" },
      ]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Expenses array before send:\n", expensesList);
    const response = await dispatch(createExpensesThunk(expensesList));
    console.log("Response Expenses:\n", response);
    setExpensesList(await response);

    setTimeout(() => {
      navigate("/user");
    }, 3000);
  };

  const saveExpense = async (index) => {
    // Make the API call to update the expense in the backend

    const updatedExpense = expensesList[index];

    const response = await dispatch(updateExpenseThunk(updatedExpense));

    console.log("Expense updated:", response);
    setEditedExpenseIndex(null);
  };

  const deleteExpense = (index) => {
    const updatedExpenses = [...expensesList];

    const expenseToDelete = expensesList[index];

    if (expenseToDelete.id) {
      dispatch(deleteExpenseThunk(expenseToDelete));
    }

    updatedExpenses.splice(index, 1);
    setExpensesList(updatedExpenses);
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
        disabled={editedExpenseIndex !== index && expense.id !== undefined}
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
        disabled={editedExpenseIndex !== index && expense.id !== undefined}
      />
      {editedExpenseIndex === index ? (
        <Tooltip title="Save Expense" placement="right">
          <IconButton onClick={() => saveExpense(index)}>
            <SaveIcon style={{ color: "#00bfa5" }} />
          </IconButton>
        </Tooltip>
      ) : (
        index >= 0 &&
        expense.id !== undefined && (
          <Tooltip title="Edit Expense" placement="right">
            <IconButton onClick={() => setEditedExpenseIndex(index)}>
              <EditIcon style={{ color: "#03a9f4" }} />
            </IconButton>
          </Tooltip>
        )
      )}
      {index >= 1 && (
        <Tooltip title="Delete Expense" placement="right">
          <IconButton onClick={() => deleteExpense(index)}>
            <DeleteIcon style={{ color: "#ff1744" }}></DeleteIcon>
          </IconButton>
        </Tooltip>
      )}
    </div>
  );

  return (
    <div className="dashboard">
      <SideBar></SideBar>
      <div className="content">
        <Typography variant="h1" style={{ marginBottom: "2rem" }}>
          Finance Form
        </Typography>
        {expenses && expenses !== [] && expensesList ? (
          <form onSubmit={handleSubmit}>
            {expensesList.map(renderExpense)}
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
        ) : (
          <h2>Loading Form...</h2>
        )}
      </div>
    </div>
  );
};

export default ExpensesForm;
