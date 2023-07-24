import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <Slider {...settings}>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="testimonial-slide">
          <h3>{testimonial.name}</h3>
          <p>{testimonial.testimonial}</p>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialsCarousel;
