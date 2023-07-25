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

const HowCommitteeSanWorks = () => {
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
          How CommitteeSan Works:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={3}
              sx={{ textAlign: "center", p: 2, minHeight: "140px" }}
            >
              <GroupAddIcon fontSize="large" sx={{ color: "#60d394" }} />
              <Typography variant="h6" sx={{ color: "#60d394" }}>
                Form Groups
              </Typography>
              <Typography variant="body1">
                Start by creating or joining a CommitteeSan group with
                like-minded individuals.
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
                Set Contributions
              </Typography>
              <Typography variant="body1">
                Each member contributes a fixed amount regularly for a set
                duration.
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
                Rotating Payouts
              </Typography>
              <Typography variant="body1">
                Experience rotating payouts where each member receives the
                pooled amount in a structured rotation.
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
                Achieve Goals
              </Typography>
              <Typography variant="body1">
                Empower your financial journey and achieve your goals faster
                with CommitteeSan.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default HowCommitteeSanWorks;
