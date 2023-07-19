import React from "react";
import { Paper, Typography, Grid, Box } from "@mui/material";

const ExpenseInfoBox = () => {
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
              Welcome to your Expenses!
            </Typography>
            <Typography variant="subtitle1" color="#2c4966">
              Track expenses, build insights, reach goals! Manage your finances
              for a secure future. Happy expense tracking!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <img
            src="https://i.postimg.cc/NFPW08Fw/Manage-money-bro.png"
            alt="Piggy Bank Illustration"
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

export default ExpenseInfoBox;
/*
<img src="https://thumbs2.imgbox.com/55/3c/wPCXFOOp_t.png" alt="image host"/></a>
*/
