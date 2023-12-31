import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getExpensesThunk,
  updateExpenseThunk,
  createExpensesThunk,
  deleteExpenseThunk,
} from "../redux/expenses/expense.action";
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
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PageHeader from "./PageHeader";

const ExpensesForm = () => {
  const [expensesList, setExpensesList] = useState(null);
  const [editedExpenseIndex, setEditedExpenseIndex] = useState(null);
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.user_expenses);
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    const getExpenses = async () => {
      const expensesData = await dispatch(getExpensesThunk());
      setExpensesList(expensesData);

      if (expensesData.length === 0) {
        setExpensesList([
          {
            expense_name: "Monthly Income",
            expense_value: "",
          },
        ]);
      }
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

    const response = await dispatch(createExpensesThunk(expensesList));

    setExpensesList(await response);

    setTimeout(() => {
      navigate("/expenses");
    }, 1000);
  };

  const saveExpense = async (index) => {
    // Make the API call to update the expense in the backend

    const updatedExpense = expensesList[index];

    const response = await dispatch(updateExpenseThunk(updatedExpense));

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
    <CSSTransition key={index} timeout={300} classNames="example">
      <div>
        <TextField
          label={`Expense #${index + 1}`}
          value={expense.expense_name}
          onChange={(event) =>
            handleExpenseChange(index, "expense_name", event.target.value)
          }
          style={{ marginBottom: "1rem" }}
          placeholder="Enter expense name"
          disabled={editedExpenseIndex !== index && expense.id !== undefined}
          sx={{ mr: "20px", width: "300px", mb: "1.2rem" }}
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
          disabled={editedExpenseIndex !== index && expense.id !== undefined}
          sx={{ width: "300px", mb: "1.2rem" }}
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
    </CSSTransition>
  );

  return (
    <div className="dashboard">
      <SideBar></SideBar>
      <div className="content p-3">
        <PageHeader page_name="Expenses Form" />

        {expenses && expenses !== [] && expensesList ? (
          <form
            onSubmit={handleSubmit}
            style={{
              margin: " 0 auto",
              maxWidth: "800px",
              paddingLeft: "60px",
            }}
          >
            <TransitionGroup>{expensesList.map(renderExpense)}</TransitionGroup>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                width: "620px",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={addExpense}
                // disabled={expenses.length >= 10}
                sx={{ minWidth: "200px" }}
              >
                Add Expense
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ minWidth: "200px" }}
              >
                Submit
              </Button>
            </div>
          </form>
        ) : (
          <h2>Loading Form...</h2>
        )}
      </div>
    </div>
  );
};

export default ExpensesForm;
