import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex justify-center">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto`}
      >
        <div className="flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-0">
            <div className="w-5 h-5 rounded-full bg-[#5efff2]" />
            <div className="w-1 sm:h-80 h-60 cyan-gradient" />
          </div>
          <div>
            <div className="flex flex-row items-center mb-5 gap-2">
              <motion.span
                className="text-6xl sm:text-7xl "
                role="img"
                aria-label="waving hand"
                style={{
                  display: "inline-block",
                  transformOrigin: "70% 70%",
                }}
                animate={{
                  rotate: [0, 14, -8, 14, -4, 10, 0],
                }}
                whileHover={{
                  rotate: [0, 14, -8, 14, -4, 10, 0],
                }}
                transition={{
                  duration: 1.8,
                  ease: "easeInOut",
                  repeat: 0, // Only play once
                }}
              >
                👋
              </motion.span>
              <div className="sm:ml-5 flex flex-col">
                <p className="text-white-100 text-3xl sm:text-5xl">Hi, I'm</p>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5efff2] to-blue-500 text-4xl sm:text-7xl font-bold">
                  {" "}
                  Kevin
                </span>
              </div>
            </div>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am a passionate software engineer eager to
              <br className="sm:block hidden" />
              explore innovative technologies in the fields of
              <br className="sm:block hidden" />
              Software Engineering, Data Science,
              <br className="sm:block hidden" />
              AI, and Deep Learning.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-5/6 sm:w-5/6 h-1/3 sm:h-2/3 translate-y-80 sm:translate-y-52">
        {/* Your full-size canvas remains here */}
        <ComputersCanvas />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2"
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
