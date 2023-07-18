import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { format } from "date-fns";

const PageHeader = ({ page_name }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the current time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const formattedTime = format(currentTime, "EEE MMM dd yyyy hh:mm:ss a");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor: "#2c4966",
        color: "#2c4966",
        height: "50px",
        padding: "0 20px",
        marginBottom: "40px",
        borderBottom: "1px solid #f5f5f5",
      }}
    >
      <Typography variant="h5" sx={{ color: "#05377f" }}>
        {page_name}
      </Typography>
      <Typography variant="body1" sx={{ color: "#2f4b73" }}>
        Date: {formattedTime}
      </Typography>
    </div>
  );
};

export default PageHeader;
