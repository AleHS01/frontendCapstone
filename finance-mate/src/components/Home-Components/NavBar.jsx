import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/">
          Finance Mate
        </Typography>

        <div style={{ flexGrow: 1 }} />

        <Button component={Link} to="/dashboard" color="inherit">
          Dashboard
        </Button>
        <Button component={Link} to="/committeesan" color="inherit">
          CommitteeSan
        </Button>
        <Button component={Link} to="/expenses" color="inherit">
          Expenses
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
