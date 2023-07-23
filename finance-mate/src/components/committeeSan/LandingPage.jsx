
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Grid,
  Chip,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="#009E60" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" style={{ flexGrow: 1, marginRight: "978px" }}>
        FinanceMate
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Chip
            label="Home"
            component={Link}
            to="/user"
            clickable
            size="medium"
            sx={{
              backgroundColor: "#009E60",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#05377f",
              },
            }}
          />
        </Grid>
        <Grid item>
          <Chip
            label="Profile"
            component={Link}
            to="/budget-view"
            clickable
            size="medium"
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "#05377f",
              },
            }}
          />
        </Grid>
        <Grid item>
          <Chip
            label="Logout"
            component={Link}
            to="/logout"
            clickable
            size="medium"
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "#05377f",
              },
            }}
          />
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

const LandingPage = () => {
  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate("/creategroup")
    // TODO: Handle submit logic
  };

  return (
    <Box mt={2}>
      <Header />
      <Box mt={2}>
        <Grid>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "limegreen",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#05377f",
              },
              minWidth: "517px",
            }}
            onClick={handleSubmit}
          >
            Create Group
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};

export default LandingPage;