import React, {useEffect} from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch , useSelector} from "react-redux";
import { joinGroupThunk, getMembersThunk } from "../../redux/groups/group.actions";
import styled from "styled-components";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Chip,
  Box
} from "@mui/material";
const DottedBox = styled.div`
  border: 4px dotted #000;
  border-radius: 15px;
  padding: 20px;
  margin: 40px 0;
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const AddMembers = () => {
  const dispatch = useDispatch();
  const members = useSelector(state => state.committee_groups)
  const location = useLocation();
  const navigate = useNavigate()
  const groupId = location.state.groupId;
  console.log(members)

  useEffect(()=> {
    dispatch(getMembersThunk())
  }, [dispatch])
  
  const handleSubmit = () => {
    dispatch(joinGroupThunk(groupId));
    alert("YOURE NOW PART OF COMMITTEETEST1 GROUP!");
  };

   
  return (
    <Container maxWidth="sm">
      <ContentContainer>
        <Typography variant="h2" align="center" gutterBottom>
          <span style={{ color: "black", fontWeight: "bold" }}>
            Become a part of
          </span>{" "}
          <span style={{ color: "limegreen", fontWeight: "bold" }}>
            this Group!
          </span>
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
                minWidth: "517px",
              }}
              onClick={handleSubmit}
            >
              Join Group
            </Button>
          </Grid>
        </DottedBox>
        <Typography variant="h2" align="center" gutterBottom>
          <Grid container spacing={2}>
            <Grid item>
              <Chip
                label="Committee-San"
                component={Link}
                to="/committeesan"
                clickable
                size="medium"
                sx={{
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
                  backgroundColor: "black",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "darkblue",
                  },
                }}
              />
            </Grid>
          </Grid>
          <Typography variant="h2" >
          <span style={{ color: "black", fontWeight: "bold" }}>Group</span>{" "}
          <span style={{ color: "limegreen", fontWeight: "bold" }}>
            Members
          </span>
          </Typography>
          <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between">
          {members && members.map((item) => (
            <Box m={1}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "#fff",
              "&:hover": {
                backgroundColor: "limegreen",
              },
            }}
          >
            {item.first_name}
          </Button>
          </Box>
        ))}
        </Box>

        </Typography>
      </ContentContainer>
    </Container>
  );
};

export default AddMembers;
