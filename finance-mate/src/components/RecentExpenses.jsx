import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExpensesThunk } from "../redux/expenses/expense.action";

function RecentExpenses({ expensesForBudget }) {
  const expenses = useSelector((state) => state.user_expenses);
  let expenses_to_render = [];
  const dispatch = useDispatch();
  if (!expensesForBudget) {
    expenses_to_render = expenses;
  } else {
    expenses_to_render = expensesForBudget;
  }
  useEffect(() => {
    dispatch(getExpensesThunk());
  }, []);

  //get all the expenses pertaining to the user and render them
  return (
    <div className=" text-black p-4">
      <div className="text-xl font-bold mb-4">RECENT EXPENSES</div>
      {expenses_to_render.map((single_expense, index) => (
        <div className="mb-2" key={index}>
          <span className="font-semibold">Expense Name:</span>{" "}
          {single_expense.expense_name}
          <span className="mx-2">|</span>
          <span className="font-semibold">Amount:</span>{" "}
          {single_expense.expense_value}
        </div>
      ))}
    </div>
  );
}

export default RecentExpenses;
