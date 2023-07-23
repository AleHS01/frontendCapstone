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
import { createGroupThunk } from "../../redux/groups/group.actions";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch()
  const [groupName, setGroupName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault()
    const group = {
        name: groupName
    }
    dispatch(createGroupThunk(group))
    setGroupName("")
    
    
  };

  return (
    <Container maxWidth="sm">
      <ContentContainer>
        <Typography variant="h2" align="center" gutterBottom>
          <span style={{ color: "black", fontWeight: "bold" }}>
            Create a new,
          </span>{" "}
          <span style={{ color: "limegreen", fontWeight: "bold" }}>
            Committee!
          </span>
        </Typography>

        <DottedBox>
          <form onSumbit={handleSubmit}>
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
                Create Budget
              </Button>
            </Grid>
          </form>
        </DottedBox>
      </ContentContainer>
    </Container>
  );
};

export default GroupForm;
