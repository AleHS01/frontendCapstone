import React, { useState, useEffect } from "react";
// This component will render out the form the user will use to create a committee group.
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Chip,
} from "@mui/material";
import {
  createGroupThunk,
  getGroupsThunk,
} from "../../redux/groups/group.actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createCustomerThunk } from "../../redux/stripe/stripe.actions";

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
  background-color: #fafafa;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const GroupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const groups = useSelector((state) => state.committee_groups);
  const [groupName, setGroupName] = useState("");
  const [committeeAmount, setCommitteeAmount] = useState(0)

  console.log(groups);

  /*
  The useEffect here prevents react to go into an infinte loop whilst displaying
  the group the user created
  */
  useEffect(() => {
    dispatch(getGroupsThunk());
  }, [dispatch]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const group = {
      name: groupName,
      amount: committeeAmount
    };
    dispatch(createGroupThunk(group));
    dispatch(createCustomerThunk());

    setGroupName("");
  };

  const handleButton = (groupId, groupName) => {
    navigate(`/addMembers`, { state: { groupId, groupName } });
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: "linear-gradient(to right, #2d6a4f, #74c69d)",
        display: "grid",
        alignItems: "center",
      }}
    >
      <nav
        style={{
          position: "absolute",
          top: 0,
          padding: "20px 0 0 30px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Grid container spacing={1} width={"100%"} justifyContent={"center"}>
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
        </Grid>
      </nav>
      <Container sx={{ width: "60%" }}>
        <ContentContainer style={{}}>
          <Typography variant="h2" align="center" gutterBottom>
            <span style={{ color: "black", fontWeight: "bold" }}>
              Create a new
            </span>{" "}
            <span style={{ color: "limegreen", fontWeight: "bold" }}>
              Committee!
            </span>
          </Typography>

          <DottedBox>
            <form
              onSubmit={handleSubmit}
              style={{ width: "70%", margin: "0 auto" }}
            >
              <Typography variant="h3" fontWeight="600" mb="10px" gutterBottom>
                Create a Group
              </Typography>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Group Name"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                sx={{ margin: "10px 0  20px" }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="CommitteeSan Amount"
                value={committeeAmount}
                onChange={(e) => setCommitteeAmount(e.target.value)}
                sx={{ margin: "10px 0  20px" }}
              />
              <Grid>
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    backgroundColor: "limegreen",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "black",
                    },
                    minWidth: "517px",
                  }}
                  onClick={handleSubmit}
                >
                  Create Group
                </Button>
              </Grid>
            </form>
          </DottedBox>
          <Typography variant="h2" align="center" gutterBottom>
            <span style={{ color: "black", fontWeight: "bold" }}>
              Available
            </span>{" "}
            <span style={{ color: "limegreen", fontWeight: "bold" }}>
              Groups
            </span>
          </Typography>

          {groups &&
            groups.map((item) => (
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "limegreen",
                  color: "#fff",
                  fontSize: "1.3rem",
                  padding: "10px 0px",
                  minWidth: "200px",
                  marginRight: "20px",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
                onClick={() => handleButton(item.id, item.group_name)}
              >
                {item.group_name}
              </Button>
            ))}
        </ContentContainer>
      </Container>
    </div>
  );
};

export default GroupForm;
