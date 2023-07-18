import React from "react";
import styled from "styled-components";

const BudgetBoxContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

const BudgetName = styled.h3`
  margin: 0;
`;

const TotalAmount = styled.p`
  margin: 8px 0;
`;

const ProgressBar = styled.div`
  background-color: #ddd;
  height: 8px;
  border-radius: 4px;
`;

const ProgressFill = styled.div`
  background-color: #4caf50;
  height: 100%;
  width: ${(props) => props.fillPercentage}%;
  border-radius: 4px;
`;

const ExpenseList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 8px 0;
`;

const ExpenseItem = styled.li`
  margin-bottom: 4px;
`;

const BudgetBox = ({ budgetName, totalAmount, expenses }) => {
  // Dummy data for demonstration
  // Replace this with your actual data
  const dummyExpenses = [
    { id: 1, name: "Expense 1", amount: 100 },
    { id: 2, name: "Expense 2", amount: 200 },
    { id: 3, name: "Expense 3", amount: 150 },
  ];

  const totalSpent = dummyExpenses.reduce((total, expense) => total + expense.amount, 0);
  const fillpercentage = (25 / 100) * 100;

  return (
    <BudgetBoxContainer>
      <BudgetName>Groceries</BudgetName>
      <TotalAmount>Total Amount: ${1200}</TotalAmount>
      <ProgressBar>
        <ProgressFill fillpercentage= {fillpercentage}/>
      </ProgressBar>
      {/* <ExpenseList>
        {dummyExpenses.map((expense) => (
          <ExpenseItem key={expense.id}>
            {expense.name}: ${expense.amount}
          </ExpenseItem>
        ))}
      </ExpenseList> */}
    </BudgetBoxContainer>
  );
};

export default BudgetBox;
