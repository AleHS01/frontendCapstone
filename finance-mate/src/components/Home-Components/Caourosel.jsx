import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledSlider = styled(Slider)({
  "& .slick-dots": {
    bottom: "30px",
    "& li button:before": {
      fontSize: "14px", // Increase the size of the dots
    },
  },
  "& .slick-next, .slick-prev": {
    top: "auto",
    bottom: "20px",
    zIndex: 1,
  },
  overflowX: "hidden", // Hide overflow on the X-axis
  overflowY: "hidden", // Hide overflow on the Y-axis
  minHeight: "320px",
  padding: "20px 0px",
  backgroundColor: "#d8f3dc",
});

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      testimonial:
        "Finance Mate's CommitteeSan feature has been a game-changer for my savings goals. The collaborative saving approach helped me achieve my financial targets faster than I expected.",
    },
    {
      id: 2,
      name: "Jane Smith",
      testimonial:
        "I love the Expense Tracking functionality of Finance Mate. It allows me to easily track and categorize my expenses, helping me stay on top of my finances and make smarter financial decisions.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      testimonial:
        "Budget Management in Finance Mate has made it easy for me to take control of my spending. The progress bar and visual charts provide a clear overview of my budget utilization.",
    },
    {
      id: 4,
      name: "Emily Davis",
      testimonial:
        "Transaction Insights is my favorite feature in Finance Mate. The line charts and pie charts help me visualize my spending habits and identify areas where I can save more.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div style={{ backgroundColor: "#d8f3dc", padding: "20px" }}>
      <Typography
        variant="h2"
        sx={{
          color: "#1b4332",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Clients Testimonials!
      </Typography>
      <StyledSlider {...settings}>
        {testimonials.map((testimonial) => (
          <Box
            key={testimonial.id}
            className="testimonial-slide"
            sx={{
              width: "80%",
              margin: "0 auto",
              textAlign: "center",
              overflowX: "hidden",
            }}
          >
            <Avatar
              sx={{
                backgroundColor: "#1b4332",
                mx: "auto",
                mb: 2,
                height: "80px",
                width: "80px",
              }}
              src={`https://randomuser.me/api/portraits/men/${testimonial.id}.jpg`}
            >
              {testimonial.name.charAt(0)}
            </Avatar>
            <Typography variant="h3" sx={{ color: "#1b4332", mb: 2 }}>
              {testimonial.name}
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "#1b4332", width: "80%", margin: "0 auto" }}
            >
              "{testimonial.testimonial}"
            </Typography>
          </Box>
        ))}
      </StyledSlider>
    </div>
  );
};

export default TestimonialsCarousel;
