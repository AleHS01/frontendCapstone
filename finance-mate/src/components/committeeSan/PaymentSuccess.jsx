import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import {
  Typography,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import stripelogo from "./Stripe wordmark - blurple.svg";
const PageBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, #2d6a4f, #74c69d);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  background-color: #fafafa;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Success = () => {
  const [session, setSession] = useState(null);
  const location = useLocation();
  const sessionId = new URLSearchParams(location.search).get("session_id");
  console.log("sessionId,", sessionId);

  useEffect(() => {
    if (sessionId) {
      axios
        .get(`http://localhost:8080/api/stripe/session?session_id=${sessionId}`)
        .then((response) => {
          setSession(response.data);
        })
        .catch((err) => {
          console.error("Failed to fetch checkout session:", err);
        });
    }
  }, [sessionId]);

  if (!session) {
    return <div>Loading...</div>;
  }

  return (
    <PageBackground>
      <ContentContainer>
        <Typography
          variant="h2"
          align="center"
          sx={{ color: "black", fontWeight: "bold" }}
          gutterBottom
        >
          Payment Successful
        </Typography>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          mt={2}
        >
          <Typography
            variant="h5"
            sx={{ color: "seagreen", fontWeight: "bold" }}
          >
            Payment secured safely by
          </Typography>
          <img
            src={stripelogo}
            alt="Stripe Logo"
            style={{ width: "100px", height: "auto", marginTop: "10px" }} // adjust width as needed to match your text size
          />
        </Box>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "bold", color: "limegreen" }}
                >
                  Product
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "bold", color: "black" }}
                >
                  Amount Paid
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "bold", color: "limegreen" }}
                >
                  Currency
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {session.lineItems.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{item.description}</TableCell>
                  <TableCell align="left">{item.amount_total / 100}</TableCell>
                  <TableCell align="left">
                    {item.currency.toUpperCase()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          <Button
            variant="contained"
            component={Link}
            to="/"
            sx={{
              backgroundColor: "limegreen",
              color: "#fff",
              "&:hover": {
                backgroundColor: "black",
              },
            }}
          >
            Go to Home
          </Button>
        </Box>
      </ContentContainer>
    </PageBackground>
  );
};

export default Success;
