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
import NavBar from "./NavBar";
import CultureComponent from "./Culture";
import CommitteeSanFeature from "./CommitteeSanFeature";
import HowCommitteeSanWorks from "./HowCommitteeSanWorks";
import HeroSection from "./HeroSection";
import { motion, useInView, useAnimation } from "framer-motion"


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
      
      <motion.div variants={fadeInR} initial="hidden" animate="visible" transition={{duration: 0.5, delay: 0.50}}>
      <HeroSection />
      </motion.div>

      <motion.div variants={fadeInL} initial="hidden" animate="visible" transition={{duration: 0.5, delay: 1}}>
      <CommitteeSanFeature />
      </motion.div>

      <motion.div variants={fadeInR} initial="hidden" animate="visible" transition={{duration: 0.5, delay: 1.50}}>
      <HowCommitteeSanWorks />
      </motion.div>

      <motion.div variants={fadeInL} initial="hidden" animate="visible" transition={{duration: 0.5, delay: 2}}>
       <CultureComponent />
      </motion.div>

    </Box>
  );
};

export default LandingPage;

const fadeInR = {
  hidden: {opacity: 0, x: -80},
  visible: {opacity: 1, x: 0},
}

const fadeInL = {
hidden: {opacity: 0, x: 80},
visible: {opacity: 1, x: 0},
}
