import React from "react";
import { Typography, Box, Grid, Paper } from "@mui/material";

const committees = [
  { country: "Pakistan", name: "Committee" },
  { country: "Dominican Republic", name: "San" },
  { country: "India", name: "Chit Fund" },
  { country: "Nigeria", name: "Esusu" },
  { country: "Philippines", name: "Paluwagan" },
  { country: "Indonesia", name: "Arisan" },
  { country: "Kenya", name: "Chama" },
  { country: "China", name: "Hui" },
  { country: "Japan", name: "Tanomoshi" },
  { country: "Brazil", name: "Mutirão" },
  { country: "Turkey", name: "Komite" },
  { country: "Greece", name: "Koinoniko" },
  { country: "Russia", name: "Obedinenie" },
  { country: "Italy", name: "Gruppo di Risparmio" },
  { country: "Egypt", name: "Gamaeya" },
  { country: "Iran", name: "Kollekt" },
  { country: "Vietnam", name: "Hoi Nghi" },
  { country: "South Africa", name: "Stokfel" },
  { country: "Ghana", name: "Susu" },
  { country: "Mexico", name: "Tanda" },
];

const CultureComponent = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#aee2d3",
        padding: "50px 20px",
        marginTop: "0",
      }}
    >
      <Box width={"90%"} margin={"20px auto"}>
        <Typography
          variant="h2"
          sx={{ textAlign: "center", fontWeight: "bold", color: "#0a210f" }}
          gutterBottom
        >
          Embrace the Global Culture of Saving
        </Typography>
        <Typography variant="h5" sx={{ textAlign: "center", color: "#0a210f" }}>
          Committee savings circles, known by various names in different
          cultures, have been empowering communities for generations. Explore
          the diverse names for these financial groups:
        </Typography>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          {committees.map((committee, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Paper elevation={3} sx={{ textAlign: "center", height: "100%" }}>
                <Typography variant="h6" sx={{ mb: 1, color: "#2d6a4f" }}>
                  {committee.name} - {committee.country}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default CultureComponent;
