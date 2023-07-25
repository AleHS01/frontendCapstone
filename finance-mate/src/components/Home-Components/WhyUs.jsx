import React from "react";
import { Typography, Box } from "@mui/material";

const WhyChooseUs = () => {
  return (
    <Box width={"100%"} bgcolor="#aee2d3" py={6}>
      <Box width={"80%"} margin={"20px auto"} sx={{ textAlign: "center" }}>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", color: "#0a210f" }}
          gutterBottom
        >
          Why Choose Finance Mate?
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#0a210f", fontSize: "1.2rem" }}
        >
          At Finance Mate, we believe in the power of money management and its
          impact on personal financial success. Our platform is designed to
          simplify finance and empower you to take control of your financial
          journey. With Finance Mate, you can effortlessly track your income and
          expenses, set budgets, and achieve your financial goals. Collaborate
          with like-minded individuals in savings circles to boost your savings
          and accelerate your financial growth. Gain valuable insights into your
          spending habits through interactive charts and reports, allowing you
          to make informed financial decisions. Join our community of
          financially empowered individuals and build a strong foundation for
          your financial future with Finance Mate.
        </Typography>
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
