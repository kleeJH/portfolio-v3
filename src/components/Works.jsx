import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { personalLinks, projects } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";

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
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
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
                whileHover={{
                  scale: 1.2,
                }}
              >
                <AiFillEye className="w-1/2 h-1/2 object-contain" />
              </motion.div>
            ) : (
              <span></span>
            )}
            {has_source_code ? (
              <motion.div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-gradient-to-r from-purple-600 to-blue-600"
                whileHover={{
                  scale: 1.2,
                }}
              >
                <AiFillGithub className="w-1/2 h-1/2 object-contain" />
              </motion.div>
            ) : (
              <span></span>
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
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex-col">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          In this section, I will be showcasing some of the projects that I have
          created throughout my learning experience. This section reflects some
          of my skills and experience while working with different and exciting
          technologies. Each projects will be briefly described and links to my
          code repository may be included within it.
        </motion.p>

        <motion.a
          variants={fadeIn("", "", 0.1, 1)}
          href={`${personalLinks.github}`}
          target="_blank"
        >
          <div
            className={`w-fit hero-join-button-dark p-[1.2px] rounded-xl mt-5`}
          >
            <div className="bg-[#050816] w-fit rounded-xl">
              <span className={`${styles.highlightText} bg-black px-5 py-1.5`}>
                Check out my GitHub profile for more of my projects!
              </span>
            </div>
          </div>
        </motion.a>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
