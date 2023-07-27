import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./side-bar";
import PieChart from "./PieChart";
import ExpenseInfoBox from "./Expense/ExpenseInfoBox";
import {
  Grid,
  Typography,
  Divider,
  Chip,
  IconButton,
  Card,
  CardContent,
  Tooltip,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import PageHeader from "./PageHeader";
import { deleteExpenseThunk } from "../redux/expenses/expense.action";

const ExpensesView = () => {
  const user = useSelector((state) => state.user);
  const [expenses, setExpenses] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  const [pieChartFill, setPieChartFill] = useState([]);
  const [loadingChart, setLoadingChart] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const dispatch = useDispatch();
  const financeTips = [
    "- Track your daily expenses to know where your money is going",
    "- Set financial goals and create a budget to achieve them",
    "- Consider saving a percentage of your income each month",
    "- Track daily expenses to identify savings opportunities",
    "- Create a budget to control your finances effectively",
    "- Pay bills on time to avoid unnecessary fees",
    "- Avoid impulse purchases and stick to your plan",
    "- Shop smart and look for discounts and deals",
    "- Utilize cashback rewards to earn money on purchases",
    "- Cook at home to save on eating out costs",
    "- Prioritize needs over wants to stay financially disciplined",
  ];

  useEffect(() => {
    const getExpenses = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/expense/getExpenses",
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "http://localhost:3000",
            },
            withCredentials: true,
          }
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
            value: Math.floor(Math.random() * 951) + 50,
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
    // setLoadingChart(true);
    setTimeout(() => {
      processPieData();
      processPieFill();
    }, 250);

    setTimeout(() => {
      setLoadingChart(true);
    }, 500);
  }, [expenses, loadingChart]);

  const deleteExpense = (index) => {
    const updatedExpenses = [...expenses];

    const expenseToDelete = expenses[index];

    if (expenseToDelete.id) {
      dispatch(deleteExpenseThunk(expenseToDelete));
    }

    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (sortOrder === "asc") {
      return parseFloat(b.expense_value) - parseFloat(a.expense_value);
    } else {
      return parseFloat(a.expense_value) - parseFloat(b.expense_value);
    }
  });

  const handleSortAsc = () => {
    setSortOrder("asc");
  };

  const handleSortDesc = () => {
    setSortOrder("desc");
  };

  return (
    <div className="dashboard">
      <SideBar />
      <div className="content p-3">
        <PageHeader page_name="My Expenses Dashboard" />
        <ExpenseInfoBox />
        <Grid container spacing={2}>
          <Grid item xs={7} style={{ height: "450px" }}>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", fontWeight: "500", color: "#0e365e" }}
            >
              Insights Into Your Spending Habits
            </Typography>
            <PieChart data={pieChartData} fill={pieChartFill} />
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h4" sx={{ color: "#137f31" }}>
              Finance Tips
            </Typography>
            {financeTips.map((tip) => (
              <Typography
                variant="body1"
                key={tip}
                style={{
                  margin: "10px 0",
                  color: "#2c4966",
                  textAlign: "justify",
                }}
              >
                {tip}
              </Typography>
            ))}
          </Grid>
        </Grid>

        <Grid
          container
          alignItems="center"
          spacing={2}
          sx={{ mt: "20px", height: "40px" }}
        >
          <Grid item sx={{ ml: "40px" }}>
            <Typography variant="h6" sx={{ color: "#05377f" }}>
              Sort:
              <Tooltip title="Sort Ascending" placement="top">
                <IconButton onClick={handleSortAsc}>
                  <ArrowUpwardIcon
                    fontSize="small"
                    sx={{ color: "#9da3ab", cursor: "pointer" }}
                    className="filter-arrows"
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="Sort Descending" placement="top">
                <IconButton onClick={handleSortDesc}>
                  <ArrowDownwardIcon
                    fontSize="small"
                    sx={{ color: "#9da3ab", cursor: "pointer" }}
                    className="filter-arrows"
                  />
                </IconButton>
              </Tooltip>
            </Typography>
          </Grid>
          <Grid item xs>
            <Divider
              orientation="vertical"
              variant="middle"
              sx={{ borderColor: "#4CAF50", height: "100%" }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="h4"
              sx={{ fontWeight: "500", color: "#4CAF50" }}
            >
              Overview of Your Expenses
            </Typography>
          </Grid>
          <Grid item xs>
            <Divider
              orientation="vertical"
              variant="middle"
              sx={{ borderColor: "#4CAF50", height: "100%" }}
            />
          </Grid>
          <Grid item sx={{ mr: "40px" }}>
            <Chip
              label="Edit Expenses"
              component={Link}
              to="/expense-form"
              clickable
              sx={{
                backgroundColor: "#03a9f4",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#05377f",
                },
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{ mt: "20px", width: "93%", mx: "auto" }}
        >
          {sortedExpenses.length > 0 ? (
            sortedExpenses.map((expense, index) => (
              <Grid item xs={12} sm={6} md={4} key={expense.id}>
                <Card sx={{ height: "100px", position: "relative" }}>
                  <CardContent>
                    <Typography variant="h5">{expense.expense_name}</Typography>
                    <Typography variant="body1">
                      ${expense.expense_value}
                    </Typography>
                  </CardContent>
                  <Tooltip title="Delete Expense" placement="bottom">
                    <IconButton
                      aria-label="delete"
                      // onClick={() => handleDeleteExpense(expense.id)}
                      sx={{ position: "absolute", top: "10px", right: "10px" }}
                      onClick={() => deleteExpense(index)}
                    >
                      <DeleteIcon style={{ color: "red" }} />
                    </IconButton>
                  </Tooltip>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography variant="h6">No Expenses Found</Typography>
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  );
};

export default ExpensesView;
