import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const FinanceMateFeatures = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#aee2d3",
        padding: "50px 20px",
        marginTop: "0",
      }}
    >
      {/* bgcolor="#F5F5F5" */}
      <Box width={"90%"} margin={"20px auto"}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ textAlign: "center", fontWeight: "bold", color: "#0a210f" }}
        >
          Welcome to Finance Mate!
        </Typography>
        <Card sx={{ padding: "10px 20px" }}>
          <CardContent>
            <Typography variant="h5" fontSize={"1.2rem"}>
              Finance Mate is a comprehensive financial management app that
              helps you take control of your finances and achieve your financial
              goals. With Finance Mate, you can make smarter financial decisions
              and build a strong financial future.
            </Typography>
            <Box mt={2}>
              <Typography variant="h5">
                Key Features of Finance Mate:
              </Typography>
              <List disablePadding sx={{ fontSize: "2rem" }}>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: "#60d394" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Expense Tracking: Easily track and categorize your expenses for better budgeting."
                    primaryTypographyProps={{
                      variant: "h6",
                      fontSize: "1.2rem",
                    }}
                  />
                </ListItem>
                <Divider />
                <ListItem disableGutters>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: "#60d394" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Budget Management: Take control of your spending with visual charts and progress bars that display budget utilization."
                    primaryTypographyProps={{
                      variant: "h6",
                      fontSize: "1.2rem",
                    }}
                  />
                </ListItem>
                <Divider />
                <ListItem disableGutters>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: "#60d394" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Transaction Insights: Visualize your spending habits with line charts and pie charts to make informed financial decisions."
                    primaryTypographyProps={{
                      variant: "h6",
                      fontSize: "1.2rem",
                    }}
                  />
                </ListItem>
              </List>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default FinanceMateFeatures;
