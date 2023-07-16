import React, { useEffect, useState } from "react";
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
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import SideBar from "./side-bar";
// import DeleteIcon from "@mui/icons-material/Delete";

const ExpensesForm = () => {
  const [expenses, setExpenses] = useState(null);
  const [editedExpenseIndex, setEditedExpenseIndex] = useState(null);

  const navigate = useNavigate();

  // [
  //   { expense_name: "Monthly Income", expense_value: "" },
  //   { expense_name: "Car Insurance", expense_value: "" },
  // ]

  useEffect(() => {
    const getExpenses = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/expense/get",
          {},
          { withCredentials: true }
        );

        console.log("Response.data in Expense Form\n", response.data);
        setExpenses(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getExpenses();
  }, []);

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
      //setExpenses([{ expense_name: "Monthly Income", expense_value: "" }]);
      setTimeout(() => {
        navigate("/user");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const saveExpense = async (index) => {
    // Make the API call to update the expense in the backend
    try {
      const updatedExpense = expenses[index];
      const response = await axios.put(
        `http://localhost:8080/api/expense/${updatedExpense.id}`,
        updatedExpense,
        { withCredentials: true }
      );
      console.log("Expense updated:", response.data);
    } catch (error) {
      console.log(error);
    }

    // Reset the edited expense index to null to stop editing
    setEditedExpenseIndex(null);
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
        disabled={editedExpenseIndex !== index}
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
        disabled={editedExpenseIndex !== index}
      />
      {editedExpenseIndex === index ? (
        <Tooltip title="Save Expense" placement="right">
          <IconButton onClick={() => saveExpense(index)}>
            <SaveIcon style={{ color: "#00bfa5" }} />
          </IconButton>
        </Tooltip>
      ) : (
        index >= 0 && (
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
            <span>
              <IconButton disabled>
                <DeleteIcon style={{ color: "#ff1744" }}></DeleteIcon>
                {/* <Typography variant="body2">X</Typography> */}
              </IconButton>
            </span>
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
        {expenses !== null && expenses !== [] ? (
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
        ) : (
          <h2>Loading Form...</h2>
        )}

        {/* <form onSubmit={handleSubmit}>
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
        </form> */}
      </div>
    </div>
  );
};

export default ExpensesForm;
