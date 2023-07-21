import React, { useEffect, useState } from "react";
import SideBar from "./side-bar";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserThunk } from "../redux/user/user.action";
import { getTransactionsThunk } from "../redux/transactions/transation.action";
import PageHeader from "./PageHeader";
import PieChart from "./PieChart";
import TransactionCatergory from "./TransactionCatergory";
import {
  Paper,
  Grid,
  Typography,
  Box,
  Chip,
  Tooltip,
  IconButton,
  Divider,
  Pagination,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { AiOutlineTransaction } from "react-icons/ai";
//AiOutlineTransaction

function Transactions() {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.trans);
  console.log("Transactions here", transactions);
  const user = useSelector((state) => state.user);
  const [sortedTransactions, setSortedTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 30;

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

  useEffect(() => {
    if (transactions && transactions.length > 0) {
      const sortedByRecent = [...transactions].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setSortedTransactions(sortedByRecent);
    }
  }, [transactions]);

  const handleSortAsc = () => {
    const sortedByAsc = [...sortedTransactions].sort(
      (a, b) => b.amount - a.amount
    );
    setSortedTransactions(sortedByAsc);
  };

  const handleSortDesc = () => {
    const sortedByDesc = [...sortedTransactions].sort(
      (a, b) => a.amount - b.amount
    );
    setSortedTransactions(sortedByDesc);
  };

  const handleSortRecent = () => {
    const sortedByRecent = [...sortedTransactions].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setSortedTransactions(sortedByRecent);
  };

  const handleSortOldest = () => {
    const sortedByOldest = [...sortedTransactions].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setSortedTransactions(sortedByOldest);
  };

  const totalPages = Math.ceil(sortedTransactions.length / transactionsPerPage);

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
        <div
          style={{
            height: "450px",
            width: "60%",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: "center", fontWeight: "500", color: "#0e365e" }}
          >
            Transactions Summary
          </Typography>
          <TransactionCatergory transactions={transactions} />
        </div>
        <Grid
          container
          alignItems="center"
          spacing={2}
          sx={{ mt: "20px", height: "40px" }}
        >
          <Grid item sx={{ ml: "40px" }}>
            <Typography variant="h6" sx={{ color: "#05377f" }}>
              Amount:
              <Tooltip title="Ascending" placement="top">
                <IconButton onClick={handleSortAsc}>
                  <ArrowUpwardIcon
                    fontSize="small"
                    sx={{ color: "#9da3ab" }}
                    className="filter-arrows"
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="Descending" placement="top">
                <IconButton onClick={handleSortDesc}>
                  <ArrowDownwardIcon
                    fontSize="small"
                    sx={{ color: "#9da3ab" }}
                    className="filter-arrows"
                  />
                </IconButton>
              </Tooltip>
            </Typography>
          </Grid>
          <Grid item sx={{ mr: "0px" }}>
            <Typography variant="h6" sx={{ color: "#05377f" }}>
              Date:
              <Tooltip title="Recent" placement="top">
                <IconButton onClick={handleSortRecent}>
                  <ArrowUpwardIcon
                    fontSize="small"
                    sx={{ color: "#9da3ab" }}
                    className="filter-arrows"
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="Oldest" placement="top">
                <IconButton onClick={handleSortOldest}>
                  <ArrowDownwardIcon
                    fontSize="small"
                    sx={{ color: "#9da3ab" }}
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
          <Grid item>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 0,
              }}
            >
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={(event, value) => setCurrentPage(value)}
              />
            </Box>
          </Grid>
        </Grid>
        <div style={{ margin: "30px auto 10px", width: "90%" }}>
          {sortedTransactions
            .slice(
              (currentPage - 1) * transactionsPerPage,
              currentPage * transactionsPerPage
            )
            .map((transaction) => {
              const isNegativeAmount = transaction.amount < 0;
              const formattedAmount = isNegativeAmount
                ? `-$${Math.abs(transaction.amount)}` //converting from cents to normal amount
                : `$${transaction.amount}`; //converting from cents to normal amount

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
                  key={transaction.transaction_id} // Add a unique key for each transaction
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
                      label={transaction.category}
                      color="primary"
                      sx={{ fontStyle: "italic" }}
                    />
                  </Box>
                </Paper>
              );
            })}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={(event, value) => setCurrentPage(value)}
            />
          </Box>
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
