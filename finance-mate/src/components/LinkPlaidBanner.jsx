import React from "react";
import { Paper, Typography, Grid, Box } from "@mui/material";
import plaidImage1 from "../images/plaid.png";

const LinkPlaidBanner = () => {
  return (
    <Paper
      elevation={5}
      sx={{
        width: "90%",
        padding: "20px",
        margin: "20px auto 40px",
        overflow: "hidden",
        backgroundColor: "#fff",
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={9} sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <Typography variant="h2" color="#0e365e" sx={{ fontWeight: "425" }}>
              Welcome to Plaid Integration!
            </Typography>
            <Typography variant="subtitle1" color="#2c4966">
              We use Plaid, a technology that allows for quick and secure access 
              to your financial information. By integrating Plaid's technology 
              into our application, we can offer features like linking your bank 
              account, fetching transaction data, and more. Plaid maintains high 
              security standards to ensure your financial data is safe and private.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <img
            src={plaidImage1}
            alt="Plaid"
            style={{
              width: "220px",
              height: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LinkPlaidBanner;
