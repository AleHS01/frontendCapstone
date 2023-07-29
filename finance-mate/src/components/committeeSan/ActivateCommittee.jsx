import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activateCommitteeThunk, getCommitteeProductThunk, createCheckoutSessionThunk } from "../../redux/stripe/stripe.actions";
import { loadStripe } from '@stripe/stripe-js';
import { Container, Typography, Grid, Button, Box } from "@mui/material";
import styled from "styled-components";
import axios from "axios";
import { local } from "d3";
const stripePromise = loadStripe('pk_test_51NU5vjGCLtTMWEv9kIf39oFsZe8DbDdKLPRY1gPanYNdHt7lbEnXAMHLngLWiXzJtltIBlxThpMvMPZlh5eDynIT002L4K7MzI');

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

const Activate = () => {
    const dispatch = useDispatch();

    
    const committeeData = useSelector(state => state.stripe);

    // Dispatch the thunk on button click
    const handleActivate = () => {
        dispatch(activateCommitteeThunk());
    }

    useEffect(() => {
    }, [dispatch]);

    return (
        <PageBackground>
          <Container maxWidth="sm">
            <ContentContainer>
              <Typography variant="h2" align="center" sx={{ color: "black", fontWeight: "bold" }} gutterBottom>
                Activate The Committee 
              </Typography>
              <Grid container spacing={3} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={handleActivate}>
                    Activate Committee
                  </Button>
                </Grid>
              </Grid>
  
              {/* Display product and committee details here */}
              {committeeData && committeeData.new_committee && (
                <Box marginTop={3}>
                    <Typography variant="h6">
                      New Committee Activated
                    </Typography>
                    <Typography variant="body1">
                      {`Committee Name: ${committeeData.new_committee.committee_name}`}
                    </Typography>
                    <Typography variant="body1">
                      {`Start Date: ${new Date(committeeData.new_committee.start_date).toLocaleDateString()}`}
                    </Typography>
                    <Typography variant="body1">
                      {`End Date: ${new Date(committeeData.new_committee.end_date).toLocaleDateString()}`}
                    </Typography>
                </Box>
              )}
              {committeeData && committeeData.product && (
                <Box marginTop={3}>
                  <Typography variant="h6">
                    Stripe Product Created
                  </Typography>
                  <Typography variant="body1">
                    {`Product ID: ${committeeData.product.id}`}
                  </Typography>
                  <Typography variant="body1">
                    {`Product Name: ${committeeData.product.name}`}
                  </Typography>
                </Box>
              )}
            </ContentContainer>
          </Container>
        </PageBackground>
    )
}

export default Activate;
