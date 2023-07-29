import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DottedBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 4px solid lightgreen;
  border-radius: 15px;
  padding: 20px;
  margin: 40px 0;
`;

const BudgetInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const BudgetName = styled.h1`
  font-weight: bold;
  font-size: large;
  margin: 0;
`;

const TotalAmount = styled.p`
  font-weight: bold;
  font-size: medium;
  margin: 0;
  color: darkgreen;
`;

const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AmountSpent = styled.h1`
  font-weight: bold;
  font-size: medium;
  margin: 0;
  color: darkgreen;
`;

const BalanceRemaining = styled.h1`
  font-weight: bold;
  font-size: medium;
  margin: 0;
  color: darkgreen;
`;

const ProgressBar = styled.div`
  background-color: #ddd;
  height: 8px;
  border-radius: 4px;
  margin: 16px 0;
`;

const ProgressFill = styled.div`
  background-color: #4caf50;
  height: 100%;
  width: ${(props) => props.fillpercentage}%;
  border-radius: 4px;
`;

const BudgetBox = ({ budget, expenses, expense_total }) => {
  const [budgetname, setBudgetName] = useState(budget.budget_name);
  const [budgetamount, setBudgetAmount] = useState(budget.amount);
  const [budgetexpenses, setBudgetExpenses] = useState(expenses);
  const [budgetexpenseamount, setBudgetExpenseAmount] = useState(0);

  useEffect(() => {
    try {
      const budgetName = budget.budget_name;
      setBudgetName(budgetName);
      const totalAmount = budget.amount;
      setBudgetAmount(totalAmount);
      const budgetExpenses = expenses;
      setBudgetExpenses(budgetExpenses);
      setBudgetExpenseAmount(expense_total);
    } catch (error) {}
  }, [budget, expenses, expense_total]);

  let fillpercentage = (budgetexpenseamount / budgetamount) * 100;
  fillpercentage = Math.min(fillpercentage, 100);
  const remainingBal = (budgetamount - budgetexpenseamount).toFixed(1);
  if(remainingBal < 10 && budgetamount !== remainingBal){
    alert("YOURE BROKE BOI STOOOOOOOOOOOOOOP") 
  }

  return (
    <DottedBox>
      <ProgressBarContainer>
        <BudgetInfoContainer>
          <BudgetName>{budgetname}</BudgetName>
          <TotalAmount>Total Budgeted: ${budgetamount}</TotalAmount>
        </BudgetInfoContainer>
        <ProgressBar>
          <ProgressFill fillpercentage={fillpercentage} />
        </ProgressBar>
        <BudgetInfoContainer>
          <AmountSpent>Spent: ${budgetexpenseamount}</AmountSpent>
          <BalanceRemaining>Balance Remaining: {remainingBal}</BalanceRemaining>
        </BudgetInfoContainer>
      </ProgressBarContainer>
    </DottedBox>
  );
};

export default BudgetBox;
