import { motion } from "framer-motion";
import React from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { education } from "../constants/constants";

import Timeline from "./Timeline/Timeline";

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My education journey</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>
      <Timeline timelineData={education} />
    </>
  );
};

export default SectionWrapper(Education, "education");
