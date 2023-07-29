import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0a210f",
        color: "#fff",
        py: 2,
        px: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2
      }}
    >
      <Typography variant="h4" component="div">
        Made By:
      </Typography>
      <Typography variant="h6" component="div">
      Muhammed Ashfaq  Alejhandro Hernandez  Hamza Khaliq  Ghulam Ahmed
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 3,
          width: '100%',
          maxWidth: 500
        }}
      >
        <Link 
          to="/" 
          component={RouterLink} 
          sx={{ color: 'inherit', textDecoration: 'none', ':hover': { color: '#ccc' } }}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          component={RouterLink} 
          sx={{ color: 'inherit', textDecoration: 'none', ':hover': { color: '#ccc' } }}
        >
          About
        </Link>
        <Link 
          to="/contact" 
          component={RouterLink} 
          sx={{ color: 'inherit', textDecoration: 'none', ':hover': { color: '#ccc' } }}
        >
          Contact
        </Link>
      </Box>
      <Typography variant="body2" component="div">
        &copy; {new Date().getFullYear()} FinanceMate
      </Typography>
    </Box>
  );
};

export default Footer;
