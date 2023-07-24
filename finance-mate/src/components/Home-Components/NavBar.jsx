import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#53ad77",
});

const NavBar = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h4" component={Link} to="/">
          Finance Mate
        </Typography>

        <Box ml={2}>
          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>
          <Button component={Link} to="/signup" color="inherit">
            Join Finance Mate!
          </Button>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavBar;
