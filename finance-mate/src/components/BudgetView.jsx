
import React from "react";
import styled from "styled-components";

const BBox = styled.div`
  display: flex;
  justify-content: flex-start;  // change this to adjust horizontal distribution of items
  
  border: 3px solid lightgreen;
  border-radius: 15px;
  padding: 20px;
  margin: 20px 0;
  max-width: 400px;  // add this to limit how wide the component can get
`;

const BudgetInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;


const BudgetName = styled.h1`
    font-weight: bold;
    color: black
`

const BudgetAmount = styled.h1`
    font-weight: bold;
    color: seagreen
`

const BudgetView = ({ budgets }) => {  // Note the added destructuring braces
  console.log("budget inside BudgetView:", budgets);

  return (
    <div>
      {budgets.map((budget, index) => {
        return (
          <BBox key={index}>
            <BudgetInfoContainer>
            <BudgetName>{budget.budget_name}</BudgetName>
            <BudgetAmount>${budget.amount}</BudgetAmount>
           
            </BudgetInfoContainer>
            
          </BBox>
        )
      })}
    </div>
  )
}

export default BudgetView;
