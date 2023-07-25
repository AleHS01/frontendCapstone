import { motion, AnimatePresence, isInView, useInView } from "framer-motion";
import { useState, useRef } from "react";


function FadeInWhenVisible({ children }) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{duration: 0.5, delay: 0.20}}
        variants={{
          visible: { opacity: 1, x:0 },
          hidden: { opacity: 0, x: -75 }
        }}
      >
        {children}
      </motion.div>
    );
  }

  export default FadeInWhenVisible;