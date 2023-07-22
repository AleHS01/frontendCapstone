import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CssBaseline, Grid, Chip} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';



const theme = createTheme({
  palette: {
    primary: {
      main: '#32CD32', // You can adjust this green color as needed
    },
    secondary: {
      main: '#000000', // Black
    },
    background: {
      default: '#ffffff', // White
    },
    text: {
      primary: '#000000', // Black
    },
  },
});

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" style={{ flexGrow: 1, marginRight: '978px' }}>
        FinanceMate
      </Typography>
      {/* <Button color="inherit">Home</Button>
      <Button color="inherit">Profile</Button> */}
      <Grid container spacing={2}>
      <Grid item>
        <Chip
          label="Home"
          component={Link}
          to="/user"
          clickable
          size='medium'
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
          size='medium'
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




  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <div>
        <Typography variant="p">Your CommitteeSan Groups</Typography>
        <Grid item>
        <Chip
          label="Budget Page"
          component={Link}
          to="/budget-view"
          clickable
          sx={{
            backgroundColor: "black",
            color: "white",
            "&:hover": {
              backgroundColor: "#05377f",
            },
          }}
        />
      </Grid>
       
      </div>
    </ThemeProvider>
  );
}

export default LandingPage;
