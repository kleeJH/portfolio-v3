import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useMediaQuery } from "react-responsive";

const ServiceCard = ({ index, title, icon }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <Tilt className="w-full max-w-xs">
      <motion.div
        variants={fadeIn(
          isMobile ? "none" : "rght",
          "spring",
          0.5 * index,
          0.75
        )}
        className="green-pink-gradient p-[1px] rounded-2xl shadow-lg"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-2xl py-10 px-6 flex flex-col items-center justify-center min-h-[260px]"
        >
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain mb-4"
          />
          <h3 className="text-white text-lg font-semibold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Graduated with a Bachelor's degree in Computer Science at Monash
        University. My goals and objectives are to learn and experience new
        prospects at the industry level, build trust, and guide my career goals.
      </motion.p>

      <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            title={service.title}
            icon={service.icon}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
