import React, { useState, useEffect } from "react";
// This component will render out the form the user will use to create a committee group.
import styled from "styled-components";
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

const GroupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const groups = useSelector((state) => state.committee_groups);
  const [groupName, setGroupName] = useState("");

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
    };
    dispatch(createGroupThunk(group));

    setGroupName("");
  };

  const handleButton =  (groupId) => {
    navigate(`/addMembers`, {state: {groupId}})
  }

  return (
    <Container maxWidth="sm">
      <ContentContainer>
        <Typography variant="h2" align="center" gutterBottom>
          <span style={{ color: "black", fontWeight: "bold" }}>
            Create a new
          </span>{" "}
          <span style={{ color: "limegreen", fontWeight: "bold" }}>
            Committee!
          </span>
        </Typography>

        <DottedBox>
          <form onSubmit={handleSubmit}>
            <Typography variant="h5" gutterBottom></Typography>
            Create a Group
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Group Name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
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
                Create Group
              </Button>
            </Grid>
          </form>
        </DottedBox>
        <Typography variant="h2" align="center" gutterBottom>
          <span style={{ color: "black", fontWeight: "bold" }}>Available</span>{" "}
          <span style={{ color: "limegreen", fontWeight: "bold" }}>Groups</span>
        </Typography>

        {groups && groups.map((item) => (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "limegreen",
              color: "#fff",
              "&:hover": {
                backgroundColor: "black",
              },
            }}
            onClick={ () => handleButton(item.id)}
          >
            {item.group_name}
          </Button>
        ))}
      </ContentContainer>
    </Container>
  );
};

export default GroupForm;
