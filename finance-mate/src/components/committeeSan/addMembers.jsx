import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useNavigate } from "react-redux";
import { joinGroupThunk } from "../../redux/groups/group.actions";
import styled from "styled-components";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Chip,
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
  const location = useLocation();
  const groupId = location.state.groupId;

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
          <span style={{ color: "black", fontWeight: "bold" }}>Group</span>{" "}
          <span style={{ color: "limegreen", fontWeight: "bold" }}>
            Members
          </span>
        </Typography>
      </ContentContainer>
    </Container>
  );
};

export default AddMembers;
