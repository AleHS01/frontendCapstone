import { isMuiElement } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components"; // generates STYLED react components

// const DottedBox = styled.div`
// border: 4px dotted #000;
//   border-radius: 15px;
//   padding: 20px;
//   margin: 40px 0;
//   display: flex;
//   align-items: center;
//   margin-left: auto;

// `;

const BudgetBoxContainer = styled.div`
  border: 3px solid lightgreen;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

const BudgetName = styled.h1`
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
  width: ${(props) => props.fillpercentage}%;
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

const BudgetBox = ({ budget, expenses, expense_total }) => {
  // console.log("budget in BudgetBOX", budget);
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

      // var total = 0.0;
      // budgetExpenses.forEach((item) => {
      //   console.log(item.expense_value);
      //   total = total + parseFloat(item.expense_value);
      // });

      setBudgetExpenseAmount(expense_total);
    } catch (error) {
      console.log(error);
    }
  }, [budget, expenses, expense_total]);
  // useEffect(()=>{

  // },[])

  console.log("total expenses: ", budgetexpenseamount);
  const fillpercentage = (budgetexpenseamount / budgetamount) * 100;

  // console.log(budgetname, budgetamount, budgetexpenses)
  // const fillpercentage = (total / totalAmount) * 100;

  return (
    <BudgetBoxContainer>
      <BudgetName>{budgetname}</BudgetName>
      <TotalAmount>Total Budgeted: {budgetamount}</TotalAmount>

      <ProgressBar>
        {/* <progress value = {fillpercentage} max = "100"></progress> */}
        <ProgressFill fillpercentage={fillpercentage} />
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
