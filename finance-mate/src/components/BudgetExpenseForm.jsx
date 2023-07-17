import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addExpenseThunk,
  getBudgetNamesThunk,
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
import waveBackground from "/Users/hamzakhaliq/Desktop/frontendcapstone/frontendCapstone/finance-mate/src/components/layered-waves-haikei.svg";

const BackgroundContainer = styled.div``;

const DottedBox = styled.div`
  border: 4px dotted #000;
  border-radius: 15px;
  padding: 20px;
  margin: 40px 0;
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

const AddExpenseForm = () => {
  // Remove budgetId from here, we are now getting it from state
  const dispatch = useDispatch();
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [selectedBudgetId, setSelectedBudgetId] = useState(""); // State for storing selected budget ID
  const budgets = useSelector((state) => state.get_budget_categories);
  console.log(budgets);
  useEffect(() => {
    dispatch(getBudgetNamesThunk());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      budgetId: selectedBudgetId,
      name: expenseName,
      amount: parseFloat(expenseAmount),
    };

    dispatch(addExpenseThunk(expenseData));

    // Reset the form fields
    setExpenseName("");
    setExpenseAmount("");
  };

  return (
    <BackgroundContainer>
      <WaveImage src={waveBackground} alt="Wave background" />
      <Container maxWidth="sm">
        <ContentContainer>
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
        </ContentContainer>
      </Container>
    </BackgroundContainer>
  );
};

export default AddExpenseForm;
