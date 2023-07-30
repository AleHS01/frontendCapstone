import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import { Home, Person, ExitToApp } from "@mui/icons-material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LinkIcon from "@mui/icons-material/Link";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#53ad77",
});

const NavBar = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <img
          src="https://i.postimg.cc/L4nGKX73/Screen-Shot-2023-07-30-at-2-11-04-AM.png"
          alt="FinanceMate Logo"
          width={"64px"}
          height={"64px"}
          style={{ marginRight: "10px" }}
        />
        <Typography variant="h4" component={Link} to="/committeesan">
          CommitteeSan{" "}
          <span style={{ fontSize: "1rem", color: "#081c15" }}>
            By Finance Mate
          </span>
        </Typography>

        <Box ml={3}>
          {/* <Button component={Link} to="/user" color="inherit">
            <Person /> Profile
          </Button> */}
          <Button component={Link} to="/user" color="inherit">
            <AccountBalanceIcon sx={{ mr: "5px" }} /> Home
          </Button>
          <Button component={Link} to="/link_plaid" color="inherit">
            <LinkIcon sx={{ mr: "5px" }} /> Add Payment
          </Button>
          <Button component={Link} to="/expenses" color="inherit">
            <CurrencyExchangeIcon sx={{ mr: "5px" }} /> Expenses
          </Button>
          <Button component={Link} to="/logout" color="inherit">
            <ExitToApp sx={{ mr: "5px" }} /> Logout
          </Button>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavBar;
