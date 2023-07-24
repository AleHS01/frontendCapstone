import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

const HeroContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 20,
  backgroundColor: "#EAF2EF",
});

const TextContainer = styled("div")({
  maxWidth: "65%",
  marginLeft: 50,
});

const Headline = styled(Typography)({
  fontSize: "4.5rem",
  fontWeight: "bold",
  marginBottom: 8,
  //   color: "#071e22",
  color: "#07211c",
});

const Subheadline = styled(Typography)({
  fontSize: "1.5rem",
  marginBottom: 16,
  color: "#4bb365",
});

const CTAButton = styled(Button)({
  backgroundColor: "#3c91e6",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#071e22",
  },
});

const ShapedImage = styled("img")({
  width: "30%",
  height: "35%",
  clipPath: "circle(50%)",
  marginRight: 30,
});

const HeroSection = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <Headline variant="h1">
          Collaborative Savings for Financial Empowerment
        </Headline>
        <Subheadline variant="h2">
          Fuel Your Dreams, Achieve Financial Goals Together with Collaborative
          Saving of Finance Mate's CommitteSan
        </Subheadline>
        <CTAButton component={Link} to="/signup" variant="contained">
          Get Started Now!
        </CTAButton>
      </TextContainer>
      <ShapedImage
        src="https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Shaped Image"
      />
    </HeroContainer>
  );
};

export default HeroSection;
