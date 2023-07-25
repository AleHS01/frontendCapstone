import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  joinGroupThunk,
  getMembersThunk,
} from "../../redux/groups/group.actions";
import styled from "styled-components";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Chip,
  Box,
} from "@mui/material";

const PageBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(45deg, #f3f3f3, #ddd);
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
  right: 0;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
`;

const AddMembers = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.committee_groups);
  const location = useLocation();
  const navigate = useNavigate();
  const groupId = location.state.groupId;
  const group_name = location.state.groupName;
  console.log(members);

  useEffect(() => {
    dispatch(getMembersThunk());
  }, [dispatch]);

  const handleSubmit = () => {
    dispatch(joinGroupThunk(groupId));
    alert("YOURE NOW PART OF COMMITTEETEST1 GROUP!");
  };

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
      </Navbar>
      <Container maxWidth="sm">
        <ContentContainer>
          <Typography variant="h2" align="center" gutterBottom>
            <span style={{ color: "black", fontWeight: "bold" }}>
              {group_name}
            </span>{" "}
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
                  minWidth: "500px",
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
              members.map((item) => (
                <Box m={1}>
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
              ))}
          </Box>
        </ContentContainer>
      </Container>
    </PageBackground>
  );
};

export default AddMembers;
