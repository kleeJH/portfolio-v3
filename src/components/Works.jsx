import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { personalLinks, projects } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useMediaQuery } from "react-responsive";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  has_source_code,
  source_code_link,
  has_project_link,
  project_link,
  isMobile,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {isMobile ? (
        <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-between m-3">
              {has_project_link ? (
                <motion.div
                  onClick={() => window.open(project_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-gradient-to-r from-purple-600 to-blue-600"
                  whileHover={{ scale: 1.2 }}
                >
                  <AiFillEye className="w-1/2 h-1/2 object-contain" />
                </motion.div>
              ) : (
                <span />
              )}
              {has_source_code ? (
                <motion.div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-gradient-to-r from-purple-600 to-blue-600"
                  whileHover={{ scale: 1.2 }}
                >
                  <AiFillGithub className="w-1/2 h-1/2 object-contain" />
                </motion.div>
              ) : (
                <span />
              )}
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <Tilt
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-between m-3">
              {has_project_link ? (
                <motion.div
                  onClick={() => window.open(project_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-gradient-to-r from-purple-600 to-blue-600"
                  whileHover={{ scale: 1.2 }}
                >
                  <AiFillEye className="w-1/2 h-1/2 object-contain" />
                </motion.div>
              ) : (
                <span />
              )}
              {has_source_code ? (
                <motion.div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-gradient-to-r from-purple-600 to-blue-600"
                  whileHover={{ scale: 1.2 }}
                >
                  <AiFillGithub className="w-1/2 h-1/2 object-contain" />
                </motion.div>
              ) : (
                <span />
              )}
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      )}
    </motion.div>
  );
};

const Works = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const displayedProjects = isMobile
    ? projects.sort(() => Math.random() - 0.5).slice(0, 3)
    : projects;

  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex flex-col">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Below you will find a selection of projects that demonstrate my skills
          and experience working with a range of technologies. Each project
          includes a brief description, and where applicable, a link to the
          associated code repository.
        </motion.p>

        <motion.a
          variants={fadeIn("", "", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          href={personalLinks.github}
          target="_blank"
        >
          <div className="shiny-button-wrapper w-fit p-[1.5px] rounded-xl mt-5">
            <div className="bg-[#1A1A2E] rounded-xl px-4 sm:px-6 py-2 sm:py-2.5 text-center w-full">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 font-black text-[16px] sm:text-[18px]">
                Check out my GitHub profile for more of my projects!
              </span>
            </div>
          </div>
        </motion.a>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {displayedProjects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            isMobile={isMobile}
            {...project}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
