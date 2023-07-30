import {Box} from "@mui/material";
import NavBar from "./NavBar";
import CultureComponent from "./Culture";
import CommitteeSanFeature from "./CommitteeSanFeature";
import HowCommitteeSanWorks from "./HowCommitteeSanWorks";
import HeroSection from "./HeroSection";

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
