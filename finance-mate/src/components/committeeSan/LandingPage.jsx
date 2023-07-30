import {Box} from "@mui/material";
import NavBar from "./NavBar";
import CultureComponent from "./Culture";
import CommitteeSanFeature from "./CommitteeSanFeature";
import HowCommitteeSanWorks from "./HowCommitteeSanWorks";
import HeroSection from "./HeroSection";
import { motion, useInView, useAnimation } from "framer-motion"


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
