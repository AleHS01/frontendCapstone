import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

function IndividualBudget() {
  const { budget_id } = useParams();

  //take in the budget_id from the Budget_Form

  //make an redux call to get all the expenses with the user_id and
  const all_expenses = useSelector((state) => state.user_expenses);
  const related_expenses = all_expenses.filter(
    (item) => item.BudgetId == budget_id
  );
  return (
    <div>
      {related_expenses.map((item) => (
        <div>{item.expense_name}</div>
      ))}
    </div>
  );
}

export default IndividualBudget;
