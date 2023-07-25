import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  getExpenseOfBudgetThunk,
  getBudgetsThunk,
} from "../redux/budget/budget.action";
import {
  addExpenseThunk,
  getExpensesThunk,
} from "../redux/expenses/expense.action";
import {
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  Container,
  Grid,
  Chip,
} from "@mui/material";
import styled from "styled-components";

import BudgetBox from "./BudgetBox";
import RecentExpenses from "./RecentExpenses";
import SideBar from "./side-bar";
const BackgroundContainer = styled.div``;

const PageBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, #2d6a4f, #74c69d);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

`;

const DottedBox = styled.div`
  border: 4px dotted #000;
  border-radius: 15px;
  padding: 20px;
  margin: 40px 0;
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const ContentContainer = styled.div`
position: relative;
z-index: 1;
background-color: #fafafa;
padding: 20px;
border-radius: 15px;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
margin-top: 80px; 
`;

const Navbar = styled.div`
  position: absolute;
  top: 0;
  padding: 20px 0 0 30px;
  display: flex;
  justify-content: flex-start;
`;




const AddExpenseForm = () => {
  const dispatch = useDispatch();

  const { budget_id } = useParams();

  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const [selectedBudgetId, setSelectedBudgetId] = useState(parseInt(budget_id));
  const [selectedBudget, setSelectedBudget] = useState(undefined);

  const budgets = useSelector((state) => state.budget);
  const all_expenses = useSelector((state) => state.user_expenses);
  const expensesForBudget = all_expenses.filter(
    (expense) => expense.BudgetId === selectedBudgetId
  );

  const budget_expense_total = expensesForBudget.reduce(
    (acc, expense) => acc + parseInt(expense.expense_value),
    0
  );
  useEffect(() => {
    dispatch(getBudgetsThunk());
    dispatch(getExpensesThunk());
    setSelectedBudget(budgets.find((budget) => budget.id == selectedBudgetId));
  }, [selectedBudgetId]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      budgetId: selectedBudgetId,
      name: expenseName,
      amount: parseFloat(expenseAmount),
    };

    dispatch(addExpenseThunk(expenseData));

    setExpenseName("");
    setExpenseAmount("");
  };

  return (
    <PageBackground>
      <Navbar>
        <Grid container spacing={2}>
        <Grid item>
                <Chip
                  label="Add Budget"
                  component={Link}
                  to="/budgetform"
                  clickable
                  sx={{
                    backgroundColor: "limegreen",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#05377f",
                    },
                  }}
                />
              </Grid>
              <Grid item>
                <Chip
                  label="Budget Page"
                  component={Link}
                  to="/budget-view"
                  clickable
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#05377f",
                    },
                  }}
                />
              </Grid>
        </Grid>
      </Navbar>
          <ContentContainer>
          <Typography
            variant="h2"
            align="center"
            sx={{ color: "black", fontWeight: "bold" }}
            gutterBottom
          >
            Add Expenses
          </Typography>
            <DottedBox>
              <form onSubmit={handleSubmit}>
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
                <Select
                  variant="outlined"
                  fullWidth
                  label="Budget Category"
                  value={selectedBudgetId}
                  onChange={(e) => {
                    setSelectedBudgetId(e.target.value);
                    // console.log("User Selected ID"+e.target.value);
                  }}
                >
                  {budgets.map((budget) => (
                    <MenuItem key={budget.id} value={budget.id}>
                      {budget.budget_name}
                    </MenuItem>
                  ))}
                </Select>
                <Button type="submit" variant="contained" color="primary">
                  Add Expense
                </Button>
              </form>
            </DottedBox>
            {selectedBudget ? (
              <BudgetBox
                budget={selectedBudget}
                expenses={expensesForBudget}
                expense_total={budget_expense_total}
              />
            ) : (
              <p></p>
            )}
          </ContentContainer>
    </PageBackground>
  );
};

export default AddExpenseForm;
