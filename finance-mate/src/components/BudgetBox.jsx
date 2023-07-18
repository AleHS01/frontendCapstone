import { isMuiElement } from "@mui/material";
import React, {useEffect, useState} from "react";
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

const BudgetBox = ({ budget, expenses }) => {
  console.log("budget in BudgetBOX", budget);
  const [budgetname, setBudgetName] = useState("")
  const [budgetamount, setBudgetAmount] = useState(0)
  const [budgetexpenses, setBudgetExpenses] = useState([])
  const [budgetexpenseamount, setBudgetExpenseAmount] = useState(0)

  useEffect(() => {
    try {
      const budgetName = budget.budget_name;
      setBudgetName(budgetName)
      const totalAmount = budget.amount;
      setBudgetAmount(totalAmount)
      const budgetExpenses = expenses;
      setBudgetExpenses(budgetExpenses)
  
      var total = 0.0;
      budgetExpenses.forEach((item) => {
        console.log(item.expense_value);
        total = total + parseFloat(item.expense_value);
      });

      setBudgetExpenseAmount(total)
    } catch (error) {
      console.log(error);
    }
  }, [budget, expenses])

  console.log("total expenses: ", budgetexpenseamount)

  // console.log(budgetname, budgetamount, budgetexpenses)
  // const fillpercentage = (total / totalAmount) * 100;

  return (
    <BudgetBoxContainer>
      {/* <BudgetName>{budgetName}</BudgetName>
      <TotalAmount>Total Budgeted: {totalAmount}</TotalAmount> 
      <ProgressBar>
        <ProgressFill fillpercentage= {fillpercentage}/>
      </ProgressBar> */}
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
