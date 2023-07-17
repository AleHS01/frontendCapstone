import React, { useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addBudgetThunk } from "../redux/user/user.action";
import { TextField, Button, Container, Typography } from "@mui/material";
import styled from "styled-components";
import waveBackground from "./layered-waves-haikei.svg";

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
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [budgetname, setBudgetName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const budgetinfo = {
      budget_name: budgetname,
      amount: amount,
    };
    dispatch(addBudgetThunk(budgetinfo));
    navigate("/budget-view")
  };

  return (
    <BackgroundContainer>
      <WaveImage src={waveBackground} alt="Wave background" />
      <Container maxWidth="sm">
        <ContentContainer>
          <Typography variant="h2" align="center" gutterBottom>
            <span style={{ color: "black", fontWeight: "bold" }}>
              Welcome back,
            </span>{" "}
            <span style={{ color: "darkblue", fontWeight: "bold" }}>
              User!
            </span>
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
        </ContentContainer>
      </Container>
    </BackgroundContainer>
  );
};

export default BudgetForm;

