import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <Box
      width="100%"
      height="500px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: "linear-gradient(to right, #2d6a4f, #74c69d)",
        color: "#fff",
      }}
    >
      <Typography variant="h1" fontWeight="bold" mb={2}>
        Welcome to Finance Mate
      </Typography>
      <Typography variant="h5" mb={4}>
        Your Ultimate Financial Companion
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "limegreen",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#05377f",
          },
          minWidth: "250px",
          padding: "12px 32px",
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
        onClick={() => navigate("/creategroup")}
      >
        Create Group
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "limegreen",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#05377f",
          },
          minWidth: "250px",
          padding: "12px 32px",
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
        onClick={() => navigate("/addMembers/1")}
      >
        View Groups
      </Button>
    </Box>
  );
};

export default HeroSection;
