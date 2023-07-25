import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      gap="20px"
      alignItems="center"
      bgcolor="#60d394"
      color="#fff"
      padding="20px 50px"
      minHeight={350}
    >
      <Typography
        variant="h1"
        component="p"
        fontSize="3.5rem"
        textAlign="center"
      >
        Join Finance Mate and take control of your finances today!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        component={Link}
        to="/signup"
        sx={{ backgroundColor: "#0a210f", color: "#fff" }}
      >
        Get Started Now!
      </Button>
    </Box>
  );
};

export default CTA;
