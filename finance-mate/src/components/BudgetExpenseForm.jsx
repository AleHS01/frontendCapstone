import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addExpenseThunk,
  getBudgetNamesThunk,
  getExpensesThunk,
  getBudgets
} from "../redux/user/user.action";
import {
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  Container,
} from "@mui/material";
import styled from "styled-components";
import waveBackground from "./layered-waves-haikei.svg"
import RecentExpenses from "./RecentExpenses";
const BackgroundContainer = styled.div``;

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
`;

const WaveImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
`;

const BudgetContainer = styled.div`
  margin-bottom: 20px;
`;

const AddExpenseForm = () => {
  const dispatch = useDispatch();
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [selectedBudgetId, setSelectedBudgetId] = useState("");
  const budgets = useSelector((state) => state.budget);
  const all_expenses = useSelector((state) => state.user_expenses);
  const expensesForBudget=all_expenses.filter((expense)=>expense.BudgetId===selectedBudgetId)


  useEffect(() => {
    dispatch(getBudgets());
    dispatch(getExpensesThunk())
    console.log("Use Effect")
  }, []);
  
  
 

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

  const selectedBudget = budgets.find((budget) => budget.id === selectedBudgetId);

  return (
    <BackgroundContainer>
      {/* <WaveImage src={waveBackground} alt="Wave background" /> */}
      <Container maxWidth="sm">
        <ContentContainer>
          <BudgetContainer>
            <Typography variant="h6">Selected Budget:</Typography>
            {selectedBudget ? (
              <Typography variant="body1">{selectedBudget.budget_name}</Typography>
            ) : (
              <Typography variant="body1">No budget selected</Typography>
            )}
          </BudgetContainer>
          <DottedBox>
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
              <Select
                variant="outlined"
                fullWidth
                label="Budget Category"
                value={selectedBudgetId}
                onChange={(e) => setSelectedBudgetId(e.target.value)}
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
      <RecentExpenses expensesForBudget={expensesForBudget}></RecentExpenses>
          
        </ContentContainer>
      </Container>
    </BackgroundContainer>
  );
};

export default AddExpenseForm;
