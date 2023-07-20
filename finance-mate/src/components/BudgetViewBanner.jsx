import React from "react";
import { Paper, Typography, Grid, Box } from "@mui/material";

const BudgetViewBanner = () => {
  return (
    <Paper
      elevation={5}
      sx={{
        width: "90%",
        padding: "20px",
        margin: "20px auto 40px",
        overflow: "hidden",
        // backgroundColor: "#7BCCC4",
        backgroundColor: "#fff",
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={9} sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <Typography variant="h2" color="#0e365e" sx={{ fontWeight: "500" }}>
              Welcome to your Budgets!
            </Typography>
            <Typography variant="subtitle1" color="#2c4966">
              Welcome to the Budget Manager Dashboard, where you can take
              control of your finances for a secure and prosperous future. With
              our powerful budgeting tools and insightful reports, you can
              achieve your financial goals and make informed financial
              decisions.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <img
            src="https://i.postimg.cc/sXm9WmPq/Manage-money-rafiki.png"
            alt="Budget Administration"
            style={{
              width: "220px",
              height: "220px",
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BudgetViewBanner;
