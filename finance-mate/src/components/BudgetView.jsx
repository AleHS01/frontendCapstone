
import {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./side-bar";
import LineChart from "./LineChart";
import { Link, useNavigate } from "react-router-dom";
import {
  Grid,
  Typography,
  Divider,
  Chip,
  IconButton,
  Card,
  CardContent,
  Tooltip,
  Skeleton,
  Select,
  MenuItem,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DeleteIcon from "@mui/icons-material/Delete";
import PageHeader from "./PageHeader";
import BudgetViewBanner from "./BudgetViewBanner";
import {
  getBudgetsThunk,
  deleteBubgetThunk,
} from "../redux/budget/budget.action";
import styled from "styled-components";

const BBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start; // change this to adjust horizontal distribution of items
  border: 3px solid lightgreen;
  border-radius: 15px;
  padding: 20px 40px;
  margin: 5px 0;
  min-width: 300px; // add this to limit how wide the component can get
  justify-content: space-between;
  position: relative;
`;

const BudgetInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const BudgetName = styled.h1`
  font-weight: bold;
  color: black;
`;

const BudgetAmount = styled.h1`
  font-weight: bold;
  color: seagreen;
`;

const BudgetBoxesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 30px auto 10px;
  width: 90%;
  justify-content: center;
`;

const BudgetView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const budgets = useSelector((state) => state.budget);
  const [selectedBudgetId, setSelectedBudgetId] = useState(undefined);
  const [selectedBudget, setSelectedBudget] = useState(undefined);
  const [budgetExpenses, setBudgetExpenses] = useState(undefined);
  const [lineChartData, setLineChartData] = useState(undefined);
  const [sortedBudget, setSortedBudget] = useState([]);
  

  useEffect(() => {
    dispatch(getBudgetsThunk());
  }, []);

  useEffect(() => {
    if (budgets.length > 0) {
      setSelectedBudgetId(budgets[0].id);
      setSelectedBudget(budgets[0]);
      const sortArray = [...budgets].sort((a, b) => b.amount - a.amount);
      setSortedBudget(sortArray);
    }
  }, [budgets]);

  useEffect(() => {
    const budget = budgets.find((budget) => budget.id === selectedBudgetId);
    if (budget) {
      setSelectedBudget(budget);
      setBudgetExpenses(budget.Expenses);
      setLineChartData(getLineGraphData(budget));
    }
  }, [selectedBudgetId]);

  const getLineGraphData = (budget) => {
    if (Array.isArray(budget.Expenses) && budget.Expenses.length > 0) {
      let budgetRemainingAmount = budget.amount;
      const lineData = [
        {
          id: "Budget: " + budget.budget_name,
          color: "hsl(151, 67%, 73%)",
          data: [
            { x: "Initial Budget: " + budget.budget_name, y: budget.amount },
            ...budget.Expenses.map((expense) => {
              budgetRemainingAmount -= expense.expense_value;
              return { x: expense.expense_name, y: budgetRemainingAmount };
            }),
          ],
        },
      ];
      return lineData;
    } else if (budget) {
      const lineData = [
        {
          id: "Budget: " + budget.budget_name,
          color: "hsl(115, 70%, 50%)",
          data: [
            { x: "Initial Budget: " + budget.budget_name, y: budget.amount },
            {
              x: "Example 1",
              y: Math.floor(Math.random() * budget.amount),
            },
            {
              x: "Example 2",
              y: Math.floor(Math.random() * budget.amount),
            },
            {
              x: "Example 3",
              y: Math.floor(Math.random() * budget.amount),
            },
            {
              x: "Example 4",
              y: Math.floor(Math.random() * budget.amount),
            },
            {
              x: "Example 5",
              y: Math.floor(Math.random() * budget.amount),
            },
          ],
        },
      ];
      return lineData;
    }
    return null;
  };

  const deleteBudget = (budget) => {
    dispatch(deleteBubgetThunk(budget));
  };

  const handleSortAsc = () => {
    const sortedByAsc = [...sortedBudget].sort((a, b) => b.amount - a.amount);
    setSortedBudget(sortedByAsc);
  };

  const handleSortDesc = () => {
    const sortedByDesc = [...sortedBudget].sort((a, b) => a.amount - b.amount);
    setSortedBudget(sortedByDesc);
  };

  return (
    <div className="dashboard">
      {/* <SideBar /> */}
      <div className="content p-3">
        <PageHeader page_name="My Budgets Dashboard" />
        <BudgetViewBanner />
        <Grid container spacing={1} sx={{ marginBottom: "100px" }}>
          <Grid item xs={12} style={{ height: "400px" }}>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", fontWeight: "500", color: "#0e365e" }}
            >
              Budgets Overview
            </Typography>
            {lineChartData && selectedBudget && budgetExpenses ? (
              <div
                style={{
                  height: "100%",
                  width: "90%",
                  minWidth: "600px",
                  margin: "0 auto",
                }}
              >
                <Select
                  variant="outlined"
                  label="Budget Category"
                  value={selectedBudgetId}
                  onChange={(e) => setSelectedBudgetId(e.target.value)}
                  sx={{ width: "200px", textAlign: "center" }}
                >
                  {budgets.map((budget) => (
                    <MenuItem key={budget.id} value={budget.id}>
                      {budget.budget_name}
                    </MenuItem>
                  ))}
                </Select>
                <LineChart data={lineChartData} />
              </div>
            ) : (
              <div>
                <Skeleton variant="rectangular" height={400} />
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    fontWeight: "500",
                    color: "#0e365e",
                    mt: 2,
                  }}
                >
                  Your expense overview is loading...
                </Typography>
              </div>
            )}
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
              Sort By Amount:
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
              sx={{ fontWeight: "500", color: "black" }}
            >
              Overview of Your Budgets
            </Typography>
          </Grid>
          <Grid item xs>
            <Divider
              orientation="vertical"
              variant="middle"
              sx={{ borderColor: "#4CAF50", height: "100%" }}
            />
          </Grid>
          <Grid item sx={{ mr: "10px" }}>
            <Chip
              label="Add Budget"
              component={Link}
              to="/budgetform"
              clickable
              sx={{
                backgroundColor: "limegreen",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#05377f",
                },
              }}
            />
          </Grid>
          <Grid item sx={{ mr: "40px" }}>
            <Chip
              label="Add Expense"
              component={Link}
              to='/budget-expense/1'
              clickable
              sx={{
                backgroundColor: "black",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#05377f",
                },
              }}
            />
          </Grid>
        </Grid>

        <BudgetBoxesContainer>
          {sortedBudget.map((budget, index) => {
            return (
              <Tooltip key = {index}title="View Budget Details" placement="bottom">
                <BBox>
                  <BudgetInfoContainer>
                    <Link
                      to={`/budget-expense/${budget.id}`}
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <BudgetName>{budget.budget_name}</BudgetName>
                      <BudgetAmount style={{ marginRight: "20px" }}>
                        ${budget.amount}
                      </BudgetAmount>
                    </Link>
                  </BudgetInfoContainer>

                  <Tooltip title="Delete Budget" placement="right">
                    <IconButton
                      aria-label="delete"
                      // onClick={() => handleDeleteExpense(expense.id)}
                      sx={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        // marginLeft: "10px",
                      }}
                      onClick={() => deleteBudget(budget)}
                    >
                      <DeleteIcon style={{ color: "red" }} />
                    </IconButton>
                  </Tooltip>
                </BBox>
              </Tooltip>
            );
          })}
        </BudgetBoxesContainer>
      </div>
    </div>
  );
};

export default BudgetView;

{
  /* <Tooltip title="Delete Expense" placement="bottom">
                    <IconButton
                      aria-label="delete"
                      // onClick={() => handleDeleteExpense(expense.id)}
                      sx={{ position: "absolute", top: "10px", right: "10px" }}
                      onClick={() => deleteExpense(index)}
                    >
                      <DeleteIcon style={{ color: "red" }} />
                    </IconButton>
                  </Tooltip> */
}
