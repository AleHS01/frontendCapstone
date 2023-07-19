import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBudgetThunk } from "../redux/budget/budget.action";
import { TextField, Button, Container, Typography } from "@mui/material";
import styled from "styled-components";
import waveBackground from "./layered-waves-haikei.svg";
import { getBudgetsThunk } from "../redux/budget/budget.action";
import RecentExpenses from "./RecentExpenses";
import SideBar from "./side-bar";

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

const BudgetForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [budgetname, setBudgetName] = useState("");
  const [amount, setAmount] = useState("");
  const budgets = useSelector((state) => state.budget);

  useEffect(() => {
    dispatch(getBudgetsThunk());
    console.log("Use Effect");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const budgetinfo = {
      budget_name: budgetname,
      amount: amount,
    };
    dispatch(addBudgetThunk(budgetinfo));
    navigate("/budget-expense");
  };

  const handleBudget = (event) => {
    const budget_Id = event.target.value;
    console.log("BudgetID in handleBudget() " + budget_Id);
    navigate(`/individual-budget/${budget_Id}`);
  };

  return (
    <BackgroundContainer className="dashboard">
      <SideBar></SideBar>
      {/* <WaveImage src={waveBackground} alt="Wave background" /> */}
      <Container maxWidth="sm" className="content">
        <ContentContainer>
          <Typography variant="h2" align="center" gutterBottom>
            <span style={{ color: "black", fontWeight: "bold" }}>
              Welcome back,
            </span>{" "}
            <span style={{ color: "darkblue", fontWeight: "bold" }}>User!</span>
          </Typography>

          <Typography variant="body1" align="center" gutterBottom>
            Let Finance Mate help you with your budgets
          </Typography>
          <Typography variant="body2" align="center" gutterBottom>
            Create a budget to get started!
          </Typography>

          <DottedBox>
            <Typography variant="h5" gutterBottom>
              Create a Budget
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="budgetName"
                label="Budget Name"
                name="budgetName"
                value={budgetname}
                onChange={(e) => setBudgetName(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="amount"
                label="Amount"
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Create Budget
              </Button>
            </form>
          </DottedBox>
          {budgets.map((item) => (
            <button
              key={item.id}
              onClick={handleBudget}
              value={item.id}
              className="bg-blue-500 text-white hover:bg-green-600 font-bold py-2 px-4 rounded m-4"
            >
              {item.budget_name} {item.expense_value}
            </button>
          ))}
          <RecentExpenses></RecentExpenses>
        </ContentContainer>
      </Container>
    </BackgroundContainer>
  );
};

export default BudgetForm;
