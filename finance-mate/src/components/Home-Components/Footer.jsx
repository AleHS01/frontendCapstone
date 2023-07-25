import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      bgcolor="#0a210f"
      color="#fff"
      py={2}
      textAlign="center"
    >
      <Typography variant="h4" component="p">
        Made By:
      </Typography>
      <Typography variant="h6" component="p">
        Hamza, Ghulam Ahmed, Muhammed, Alejandro Hernandez
      </Typography>
    </Box>
  );
};

export default Footer;
