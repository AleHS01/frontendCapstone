import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const CommitteeSanFeature = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#aee2d3",
        padding: "50px 20px",
        marginTop: "0",
      }}
    >
      {/* bgcolor="#F5F5F5" */}
      <Box width={"90%"} margin={"20px auto"}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ textAlign: "center", fontWeight: "bold", color: "#0a210f" }}
        >
          What is CommitteeSan?
        </Typography>
        <Card sx={{ padding: "10px 20px" }}>
          <CardContent>
            <Typography variant="h5" fontSize={"1.2rem"}>
              CommitteeSan is a revolutionary community savings circle where
              members commit to contributing a fixed amount regularly for a set
              duration. Each member takes turns receiving the entire pooled
              amount, enabling everyone to achieve their financial goals faster.
            </Typography>
            <Box mt={2}>
              <Typography variant="h5">
                Key Benefits of CommitteeSan:
              </Typography>
              <List disablePadding sx={{ fontSize: "2rem" }}>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: "#60d394" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Collaborative Savings: Pool your resources with like-minded individuals to build a strong financial community."
                    primaryTypographyProps={{
                      variant: "h6",
                      fontSize: "1.2rem",
                    }}
                  />
                </ListItem>
                <Divider />
                <ListItem disableGutters>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: "#60d394" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Rotating Fund Distribution: Each member receives the pooled amount in a structured rotation, ensuring everyone benefits equally."
                    primaryTypographyProps={{
                      variant: "h6",
                      fontSize: "1.2rem",
                    }}
                  />
                </ListItem>
                <Divider />
                <ListItem disableGutters>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: "#60d394" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Financial Commitment: By setting fixed contributions, members stay dedicated to their financial objectives."
                    primaryTypographyProps={{
                      variant: "h6",
                      fontSize: "1.2rem",
                    }}
                  />
                </ListItem>
              </List>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default CommitteeSanFeature;
