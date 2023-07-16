import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./side-bar";
import PieChart from "./PieChart";


const ExpensesView = () => {
  const user = useSelector((state) => state.user.user);
  const [expenses, setExpenses] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  const [pieChartFill, setPieChartFill] = useState([]);
  const [loadingChart, setLoadingChart] = useState(false);

  useEffect(() => {
    const getExpenses = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/expense/get",
          {},
          { withCredentials: true }
        );

        console.log("Response.data in ExpenseView\n", response.data);
        setExpenses(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getExpenses();
  }, []);

  useEffect(() => {
    const patterns = ["squares", "dots", "lines"];

    const processPieData = () => {
      if (expenses.length > 0 && loadingChart) {
        const data = expenses.map((expense) => ({
          id: expense.expense_name,
          label: expense.expense_name,
          value: parseFloat(expense.expense_value),
        }));
        console.log("data:\n", data);
        setPieChartData(data);
      } else {
        const defaultData = [];
        for (let i = 0; i < 5; i++) {
          defaultData.push({
            id: `Expense ${i + 1}`,
            label: `Expense ${i + 1}`,
            value: Math.floor(Math.random() * 951) + 50, // Generate a random value between 50 and 1000
          });
        }
        console.log("defaultData:\n", defaultData);
        setPieChartData(defaultData);
      }
    };
    const processPieFill = () => {
      if (expenses.length > 0 && loadingChart) {
        const fill = expenses.map((expense) => {
          const randomPattern =
            patterns[Math.floor(Math.random() * patterns.length)];
          return {
            match: {
              id: expense.expense_name,
            },
            id: randomPattern,
          };
        });
        console.log("fill:\n", fill);
        setPieChartFill(fill);
      } else {
        const defaultFill = [];
        for (let i = 0; i < 5; i++) {
          const randomPattern =
            patterns[Math.floor(Math.random() * patterns.length)];
          defaultFill.push({
            match: {
              id: `Expense ${i + 1}`,
            },
            id: randomPattern,
          });
        }
        console.log("default fill:\n", defaultFill);
        setPieChartFill(defaultFill);
      }
    };
    setLoadingChart(true);
    setTimeout(() => {
      processPieData();
      processPieFill();
    }, 2000);
  }, [expenses]);

  return (
    <div className="dashboard">
      <SideBar />
      <div className="content">
        <div className="pie-chart-div" >
          {loadingChart ? (
            <h3 key="loaded-heading">Expense Chart</h3>
          ) : (
            <h3 key="loading-heading">Loading Chart...</h3>
          )}
          <PieChart data={pieChartData} fill={pieChartFill} />
        </div>

        <h1>Hello Expenses</h1>
        {expenses.length > 0 ? (
          expenses.map((expense) => {
            return (
              <div key={expense.id}>
                <h3>
                  {expense.expense_name}: ${expense.expense_value}
                </h3>
              </div>
            );
          })

        ) : (
          <h2>No Expenses Found</h2>
        )}
      </div>
     
    </div>
  );
};

export default ExpensesView;
