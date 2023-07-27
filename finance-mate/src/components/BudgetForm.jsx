import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBudgetThunk } from "../redux/budget/budget.action";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Chip,
} from "@mui/material";
import styled from "styled-components";
import { getBudgetsThunk } from "../redux/budget/budget.action";
// import RecentExpenses from "./RecentExpenses";
import SideBar from "./side-bar";
import PageHeader from "./PageHeader";
const BackgroundContainer = styled.div`
  background: linear-gradient(to right, #2d6a4f, #74c69d);
`;

const DottedBox = styled.div`
  border: 4px dotted #000;
  border-radius: 15px;
  padding: 20px;
  margin: 40px 0;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  background-color: #fafafa;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
  }, [dispatch]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const budgetinfo = {
      budget_name: budgetname,
      amount: amount,
    };
    dispatch(addBudgetThunk(budgetinfo));
    const objectWithHighestId = budgets.reduce((acc, current) => {
      if (current.id > acc.id || acc.id === undefined) {
        return current;
      }
      return acc;
    }, {});
    console.log(objectWithHighestId);
    navigate(`/budget-expense/${objectWithHighestId.id}`);
  };

  const handleBudget = (event) => {
    const budget_Id = event.target.value;
    console.log("BudgetID in handleBudget() " + budget_Id);
    navigate(`/budget-expense/${budget_Id}`);
  };

  return (
    <BackgroundContainer className="dashboard">
      <SideBar />
      <div style={{ width: "100%" }}>
        <PageHeader page_name="Budgets" />
        <Container sx={{ width: "60%", display: "grid", alignItems: "center" }}>
          <ContentContainer>
            <Typography
              variant="h2"
              align="center"
              fontWeight={"bold"}
              gutterBottom
            >
              Add or View a <span style={{ color: "limegreen" }}>Budget!</span>
            </Typography>

            <Typography variant="body1" align="center" gutterBottom>
              Let Finance Mate help you with your budgets. Create a budget to
              get started!
            </Typography>

            <DottedBox>
              <Typography variant="h4" textAlign={"center"} gutterBottom>
                Create a Budget
              </Typography>
              <form
                onSubmit={handleSubmit}
                style={{ width: "70%", margin: "0 auto" }}
              >
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
                <Grid>
                  <Button
                    variant="contained"
                    sx={{
                      margin: "0 auto",
                      backgroundColor: "limegreen",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#05377f",
                      },
                      minWidth: "517px",
                    }}
                    onClick={handleSubmit}
                  >
                    Create Budget
                  </Button>
                </Grid>
              </form>
            </DottedBox>
            <Typography
              variant="h2"
              textAlign={"center"}
              fontWeight={"bold"}
              gutterBottom
            >
              Your List of <span style={{ color: "limegreen" }}>Budgets!</span>
            </Typography>
            {budgets.map((item) => (
              <button
                key={item.id}
                onClick={handleBudget}
                value={item.id}
                className="bg-blue-500 text-white hover:bg-green-600 font-bold py-2 px-4 rounded m-4"
                style={{
                  padding: "8px 0",
                  minWidth: "220px",
                  fontSize: "1.2rem",
                }}
              >
                {item.budget_name} {item.expense_value}
              </button>
            ))}
            {/* <RecentExpenses></RecentExpenses> */}
          </ContentContainer>
        </Container>
      </div>
    </BackgroundContainer>
  );
};

export default BudgetForm;
