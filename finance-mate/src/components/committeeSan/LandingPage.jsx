import {
  Box,
} from "@mui/material";

import NavBar from "./NavBar";
import CultureComponent from "./Culture";
import CommitteeSanFeature from "./CommitteeSanFeature";
import HowCommitteeSanWorks from "./HowCommitteeSanWorks";
import HeroSection from "./HeroSection";

// const Header = () => (
//   <AppBar position="static">
//     <Toolbar>
//       <IconButton edge="start" color="#009E60" aria-label="menu">
//         <MenuIcon />
//       </IconButton>
//       <Typography variant="h6" style={{ flexGrow: 1, marginRight: "978px" }}>
//         FinanceMate
//       </Typography>
//       <Grid container spacing={2}>
//         <Grid item>
//           <Chip
//             label="Home"
//             component={Link}
//             to="/user"
//             clickable
//             size="medium"
//             sx={{
//               backgroundColor: "#009E60",
//               color: "#fff",
//               "&:hover": {
//                 backgroundColor: "#05377f",
//               },
//             }}
//           />
//         </Grid>
//         <Grid item>
//           <Chip
//             label="Profile"
//             component={Link}
//             to="/budget-view"
//             clickable
//             size="medium"
//             sx={{
//               backgroundColor: "black",
//               color: "white",
//               "&:hover": {
//                 backgroundColor: "#05377f",
//               },
//             }}
//           />
//         </Grid>
//         <Grid item>
//           <Chip
//             label="Logout"
//             component={Link}
//             to="/logout"
//             clickable
//             size="medium"
//             sx={{
//               backgroundColor: "black",
//               color: "white",
//               "&:hover": {
//                 backgroundColor: "#05377f",
//               },
//             }}
//           />
//         </Grid>
//       </Grid>
//     </Toolbar>
//   </AppBar>
// );

const LandingPage = () => {
  return (
    <Box>
      <NavBar />
      <HeroSection />
      <CommitteeSanFeature />
      <HowCommitteeSanWorks />
      <CultureComponent />
    </Box>
  );
};

export default LandingPage;
