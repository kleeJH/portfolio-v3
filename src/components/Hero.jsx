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
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#5efff2]" />
            <div className="w-1 sm:h-80 h-40 cyan-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5efff2] to-blue-500">
                {" "}
                Jun Hong
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am a fresh graduate looking forward to{" "}
              <br className="sm:block hidden" />
              learn new and exciting technologies
              <br className="sm:block hidden" /> for Software Engineering, Data
              Science,
              <br className="sm:block hidden" />
              AI & DL and more!
            </p>
          </div>
        </div>
      </div>

      <div className="w-5/6 h-2/3 object-center translate-y-52">
        <ComputersCanvas />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
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
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
