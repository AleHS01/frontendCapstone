import React, { useState, useEffect } from "react";
import { getBudgetsThunk } from "../redux/budget/budget.action";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import BudgetView from "./BudgetView";

const BudgetPage = () => {
  // const [userbudgets, setBudgets] = useState([])
  const budgetList = useSelector((state) => state.budget);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBudgetsThunk());
  }, [dispatch]);

  return (
    <div>
      <p>Budgets</p>
      <BudgetView budgets={budgetList}></BudgetView>
    </div>
  );
};

export default BudgetPage;
