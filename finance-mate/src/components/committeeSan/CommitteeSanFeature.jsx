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
import CreditCardIcon from "@mui/icons-material/CreditCard";

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
            
            <Box mt={4}>
              <Typography variant="h5">
                Secure and Efficient Payments with Stripe:
              </Typography>
              <List disablePadding sx={{ fontSize: "2rem" }}>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <CreditCardIcon sx={{ color: "#60d394" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Upon joining a group, each member is set up as a customer on Stripe, our trusted payment partner. Stripe securely handles your payment information, ensuring the safety of your personal data."
                    primaryTypographyProps={{
                      variant: "h6",
                      fontSize: "1.2rem",
                    }}
                  />
                </ListItem>
                <Divider />
                <ListItem disableGutters>
                  <ListItemIcon>
                    <CreditCardIcon sx={{ color: "#60d394" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="As a Stripe customer, you can conveniently manage your payment methods and securely make your contributions to your group. Your financial commitment is handled with ease and security."
                    primaryTypographyProps={{
                      variant: "h6",
                      fontSize: "1.2rem",
                    }}
                  />
                </ListItem>
                <Divider />
                <ListItem disableGutters>
                  <ListItemIcon>
                    <CreditCardIcon sx={{ color: "#60d394" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Whenever it's your turn to receive the pooled funds, the contributions are processed securely and promptly through Stripe, giving you peace of mind and quick access to your funds."
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
