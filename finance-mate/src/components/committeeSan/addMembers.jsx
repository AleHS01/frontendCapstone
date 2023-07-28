import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  joinGroupThunk,
  getMembersThunk,
} from "../../redux/groups/group.actions";
import { createCustomerThunk } from "../../redux/stripe/stripe.actions";
import styled from "styled-components";
import {
  Button,
  Container,
  Typography,
  Grid,
  Chip,
  Box,
} from "@mui/material";

import StripeCheckout from "./Stripe/StripeCheckout"

import axios  from "axios";

const PageBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, #2d6a4f, #74c69d);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const DottedBox = styled.div`
  border: 1px solid #ddd;
  border-radius: 15px;
  padding: 20px;
  margin: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  background-color: #fafafa;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Navbar = styled.div`
  position: absolute;
  top: 0;
  padding: 20px 0 0 30px;
  display: flex;
  justify-content: flex-start;
`;

const AddMembers = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.committee_groups);
  const location = useLocation();
  const navigate = useNavigate();
  const groupId = location.state.groupId;
  const group_name = location.state.groupName;

  useEffect(() => {
    dispatch(getMembersThunk(groupId));
  }, [dispatch]);

  const [activateStatus, setActivateStatus] = useState(false);
  
  const checkAllUsersPaymentStatus = async () => {
    let allUsersHavePaymentMethods = false;
    try {
      const response = await axios.post("http://localhost:8080/api/stripe/checkPaymentStatus", {groupId}, {withCredentials: true})
      allUsersHavePaymentMethods = response.data;
  
      setActivateStatus(allUsersHavePaymentMethods);

      return allUsersHavePaymentMethods;
    } catch (error) {
      console.error("Error:", error);
      setActivateStatus(false);
      return false;
    }
  };
  useEffect(() => {
    checkAllUsersPaymentStatus();
  }, [groupId]);

  const handleClick = async () => {
    try {
      const allUsersHavePaymentMethods = await checkAllUsersPaymentStatus();
  
      if (!allUsersHavePaymentMethods) {
        alert("Not all users have a payment method. Please add a payment method to all users before activating.");
        return;
      }
  
      navigate("/activate");
  
    } catch (error) {
      console.error("Error:", error);
    }
  };
  


  const handleSubmit = async () => {
    dispatch(joinGroupThunk(groupId));
    dispatch(createCustomerThunk());
    alert("YOU'RE NOW PART OF A COMMITTEE GROUP!");
  };

  // const [activateButton,setActivateButton]=useState(true);
  // useEffect(()=>{
  //   const getCommitteeStatus=async()=>{
  //     const response=await axios.post("http://localhost:8080/api/stripe/is_Committee_Ready",{},{withCredentials:true})
  //     setActivateButton(response.data)
  //   }
  //   try {
  //     getCommitteeStatus()
  //   } catch (error) {
  //     console.log(error)
  //   }
  // },[])

  return (
    <PageBackground>
      <Navbar>
        <Grid container spacing={2}>
          <Grid item>
            <Chip
              label="Committee-San"
              component={Link}
              to="/committeesan"
              clickable
              size="medium"
              sx={{
                padding: "20px 30px",
                fontSize: "1.2rem",
                backgroundColor: "limegreen",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "darkblue",
                },
              }}
            />
          </Grid>
          <Grid item>
            <Chip
              label="Committee-San Groups"
              component={Link}
              to="/creategroup"
              clickable
              size="medium"
              sx={{
                padding: "20px 30px",
                fontSize: "1.2rem",
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "darkblue",
                },
              }}
            />
          </Grid>
        </Grid>
      </Navbar>
      <Container maxWidth="sm">
        <ContentContainer>
          <Typography
            variant="h2"
            align="center"
            sx={{ color: "black", fontWeight: "bold" }}
            gutterBottom
          >
            {group_name}
          </Typography>

          <DottedBox>
            <Grid>
            <Button
                variant="contained"
                sx={{
                  backgroundColor: "limegreen",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                  minWidth: "450px",
                }}
                onClick={handleSubmit}
              >
                Join Group
              </Button>
            </Grid>
          </DottedBox>
          <Typography variant="h2">
            <span style={{ color: "black", fontWeight: "bold" }}>Group</span>{" "}
            <span style={{ color: "limegreen", fontWeight: "bold" }}>
              Members
            </span>
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-between"
          >
            {members &&
              members.length > 0 &&
              members.map(
                (
                  item,
                  index // assuming item has no unique id
                ) => (
                  <Box key={index} m={1}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "limegreen",
                        color: "#fff",
                        "&:hover": {
                          backgroundColor: "black",
                        },
                      }}
                    >
                      {item.first_name}
                    </Button>
                  </Box>
                )
              )}
          </Box>
          <StripeCheckout></StripeCheckout>
        </ContentContainer>
      <button
        variant="contained"
        className="pay-button"
        onClick={handleClick}
        disabled={!activateStatus} // The Activate button is disabled when activateStatus is false
      >
        Activate
      </button>
      </Container>
    </PageBackground>
  );
};

export default AddMembers;
