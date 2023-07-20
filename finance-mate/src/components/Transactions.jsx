import React, { useEffect, useState } from "react";
import SideBar from "./side-bar";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserThunk } from "../redux/user/user.action";
import { getTransactionsThunk } from "../redux/transactions/transation.action";
import PageHeader from "./PageHeader";
import { Link } from "react-router-dom";
import {
  Paper,
  Grid,
  Typography,
  Box,
  Chip,
  Tooltip,
  IconButton,
  Divider,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Transactions() {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.trans);
  console.log("Transactions here", transactions);
  const user = useSelector((state) => state.user);

  const getUser = async () => {
    try {
      dispatch(fetchUserThunk());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser().then(() => dispatch(getTransactionsThunk()));
  }, []);

  const handleSortDesc = () => {};
  const handleSortAsc = () => {};

  return (
    <div className="dashboard">
      <SideBar></SideBar>
      <div className="content p-4">
        <PageHeader page_name="My Transactions" />
        <Paper
          elevation={5}
          sx={{
            width: "90%",
            padding: "10px",
            margin: "20px auto 40px",
            overflow: "hidden",
            // backgroundColor: "#7BCCC4",
            backgroundColor: "#fff",
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={9} sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <Typography
                  variant="h3"
                  color="#0e365e"
                  sx={{ fontWeight: "500" }}
                >
                  Welcome To Your Transactions!
                </Typography>
                <Typography variant="subtitle1" color="#2c4966">
                  Welcome to your Transactions page! Easily explore and
                  understand your financial activities, track expenses, and
                  monitor income. Start now to gain complete visibility into
                  your financial journey and plan for a prosperous future.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <img
                src="https://i.postimg.cc/R0TxKyPv/Mobile-payments-rafiki.png"
                alt="Budget Administration"
                style={{
                  width: "220px",
                  height: "220px",
                }}
              />
            </Grid>
          </Grid>
        </Paper>
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
              sx={{ fontWeight: "500", color: "#0e365e" }}
            >
              All Your Transactions
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
                backgroundColor: "#03a9f4",
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
              to="/budget-expense"
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
        <div style={{ margin: "30px auto 10px", width: "90%" }}>
          {transactions ? (
            transactions.map((transaction) => {
              const isNegativeAmount = transaction.amount < 0;
              const formattedAmount = isNegativeAmount
                ? `-$${Math.abs(transaction.amount).toFixed(2)}`
                : `$${transaction.amount.toFixed(2)}`;

              return (
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    mt: 2,
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Merchant: {transaction.merchant_name}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "bold",
                        color: isNegativeAmount ? "red" : "inherit",
                      }}
                    >
                      {formattedAmount}
                    </Typography>
                  </Box>
                  <Typography variant="body2">{transaction.name}</Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="caption" sx={{ fontStyle: "italic" }}>
                      Date: {transaction.date}
                    </Typography>
                    <Chip
                      size="small"
                      label={transaction.category[0]}
                      color="primary"
                      sx={{ fontStyle: "italic" }}
                    />
                  </Box>
                </Paper>
              );
            })
          ) : (
            <div className="content">
              <h4>No Transactions</h4>
              <div>No transaction data available.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Transactions;

/*
 {trans && trans.data ? (
          trans.data.map((item) => {
            try {
              return (
                <div
                  style={{
                    border: "1px solid black",
                    height: "auto",
                    width: "30%",
                    fontFamily: "Times New Roman",
                    fontSize: "25px",
                    borderRadius: "10px",
                    padding: "10px",
                    margin: "0.5em 0.5em 0.5em 0.5em",
                  }}
                >
                  <div>
                    <b>Description:</b> {item.name} <br></br>
                    <b>Amount:</b> {item.amount}
                  </div>
                  <hr
                    style={{
                      backgroundColor: "black",
                      height: "1px",
                      width: "100%",
                    }}
                  ></hr>
                </div>
              );
            } catch (error) {
              console.error("Error processing transaction:", error);
              // Handle the error here (e.g., show an error message)
              return (
                <div className="content">
                  <h4>Error</h4>
                  <div>An error occurred while processing the transaction.</div>
                </div>
              );
            }
          })
        ) : (
          <div className="content">
            <h4>No Transactions</h4>
            <div>No transaction data available.</div>
          </div>
        )}
*/
