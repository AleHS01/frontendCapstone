import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import { Home, Person, ExitToApp } from "@mui/icons-material";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#53ad77",
});

const NavBar = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h4" component={Link} to="/committeesan">
          CommitteeSan{" "}
          <span style={{ fontSize: "1rem", color: "#081c15" }}>
            By Finance Mate
          </span>
        </Typography>

        <Box ml={3}>
          <Button component={Link} to="/user" color="inherit">
            <Home /> Home
          </Button>
          <Button component={Link} to="/" color="inherit">
            <Person /> Profile
          </Button>
          <Button component={Link} to="/logout" color="inherit">
            <ExitToApp /> Logout
          </Button>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavBar;
