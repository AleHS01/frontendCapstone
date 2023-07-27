import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getExpensesThunk } from "../redux/expenses/expense.action";

function IndividualBudget() {
  const { budget_id } = useParams();

  //take in the budget_id from the Budget_Form

  //make an redux call to get all the expenses with the user_id and
  const dispatch = useDispatch();
  const all_expenses = useSelector((state) => state.user_expenses);
  const related_expenses = all_expenses.filter(
    (item) => item.BudgetId == budget_id
  );
  useEffect(() => {
    dispatch(getExpensesThunk());
  }, []);

  return (
    <div>
      {related_expenses.map((item, index) => (
        <div key={index}>{item.expense_name}</div>
      ))}
    </div>
  );
}

export default IndividualBudget;
