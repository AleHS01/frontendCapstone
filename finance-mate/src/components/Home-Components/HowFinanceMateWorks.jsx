import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Box,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PaymentIcon from "@mui/icons-material/Payment";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import CheckIcon from "@mui/icons-material/Check";

const HowFinanceMateWorks = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#74c69d",
        padding: "50px 20px",
        marginTop: "0",
      }}
    >
      <Box width={"80%"} margin={"20px auto"}>
        <Typography
          variant="h2"
          sx={{ textAlign: "center", fontWeight: "bold", color: "#0a210f" }}
          gutterBottom
        >
          How Finance Mate Works:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={3}
              sx={{ textAlign: "center", p: 2, minHeight: "140px" }}
            >
              <GroupAddIcon fontSize="large" sx={{ color: "#60d394" }} />
              <Typography variant="h6" sx={{ color: "#60d394" }}>
                Create Financial Circles
              </Typography>
              <Typography variant="body1">
                Start by creating or joining financial circles with like-minded
                individuals to achieve common financial goals.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={3}
              sx={{ textAlign: "center", p: 2, minHeight: "140px" }}
            >
              <PaymentIcon fontSize="large" sx={{ color: "#60d394" }} />
              <Typography variant="h6" sx={{ color: "#60d394" }}>
                All in One Place
              </Typography>
              <Typography variant="body1">
                We have everything you need in one place, so you don't have to
                sign up to multiple pages.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={3}
              sx={{ textAlign: "center", p: 2, minHeight: "140px" }}
            >
              <SyncAltIcon fontSize="large" sx={{ color: "#60d394" }} />
              <Typography variant="h6" sx={{ color: "#60d394" }}>
                Transactions Insights
              </Typography>
              <Typography variant="body1">
                Get to know where are you expending your money, and what habits
                you need to Cut.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={3}
              sx={{ textAlign: "center", p: 2, minHeight: "140px" }}
            >
              <CheckIcon fontSize="large" sx={{ color: "#60d394" }} />
              <Typography variant="h6" sx={{ color: "#60d394" }}>
                Achieve Financial Empowerment
              </Typography>
              <Typography variant="body1">
                Empower your financial journey and achieve your goals faster
                with Finance Mate's budgeting features.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default HowFinanceMateWorks;
