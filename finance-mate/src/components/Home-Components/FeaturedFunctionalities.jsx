import React, { useState } from "react";
import { Typography, Box, Paper, Grid } from "@mui/material";
import {
  Check as CheckIcon,
  Money as MoneyIcon,
  AccountBalanceWallet as AccountBalanceWalletIcon,
  TrendingUp as TrendingUpIcon,
} from "@mui/icons-material";

const features = [
  {
    icon: <CheckIcon fontSize="large" sx={{ color: "#60d394" }} />,
    title: "CommitteeSan: Revolutionize Your Savings",
    description:
      "CommitteeSan is a revolutionary community savings circle where members commit to contributing a fixed amount regularly for a set duration. Experience rotating payouts, collaborate with like-minded individuals, and achieve your financial goals faster through collaborative saving.",
  },
  {
    icon: <MoneyIcon fontSize="large" sx={{ color: "#60d394" }} />,
    title: "Expense Tracking: Stay on Top of Your Finances",
    description:
      "Easily track and categorize your expenses with Finance Mate. Gain insights into your spending habits for better budgeting and financial management.",
  },
  {
    icon: (
      <AccountBalanceWalletIcon fontSize="large" sx={{ color: "#60d394" }} />
    ),
    title: "Budget Management: Take Control of Your Spending",
    description:
      "Manage your finances efficiently with Finance Mate's budgeting feature. Visualize your budget utilization with the progress bar and charts, and make informed financial decisions.",
  },
  {
    icon: <TrendingUpIcon fontSize="large" sx={{ color: "#60d394" }} />,
    title: "Transaction Insights: Visualize Your Spending Habits",
    description:
      "Gain valuable insights into your financial data with line charts and pie charts. Track where your money is going, identify spending patterns, and make smart financial decisions.",
  },
];

const FeaturedFunctionalities = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#ccfccb",
        padding: "50px 20px",
        marginTop: "0",
      }}
    >
      <Box width={"90%"} margin={"20px auto"} p={4}>
        <Typography
          variant="h2"
          sx={{ textAlign: "center", fontWeight: "bold", color: "#0a210f" }}
          gutterBottom
        >
          Featured Functionalities:
        </Typography>
        <Grid container spacing={2}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Paper elevation={3} sx={{ padding: "20px", height: "100%" }}>
                <Box display="flex" alignItems="center" mb={2}>
                  {feature.icon}
                  <Typography variant="h6" color="primary" sx={{ ml: 1 }}>
                    {feature.title}
                  </Typography>
                </Box>
                <Typography variant="body1">{feature.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default FeaturedFunctionalities;
