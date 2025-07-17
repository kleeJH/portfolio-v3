import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { useMediaQuery } from "react-responsive";
import { fadeIn } from "../utils/motion";

import { styles } from "../styles";
import { experiences } from "../constants/constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ index, experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <motion.div variants={fadeIn("none", "spring", 0.5 * index, 0.75)}>
        <div>
          <h3 className="text-white text-[24px] font-bold">
            {experience.title}
          </h3>
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
          <ul className="mt-5 list-disc ml-5 space-y-2">
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-white-100 text-[14px] pl-1 tracking-wider"
              >
                {point}
              </li>
            ))}
          </ul>

          {experience.remarks.length > 0 ? (
            <div className="pt-5">
              {experience.remarks.map((remark, index) => (
                <div
                  key={`experience-point-${index}`}
                  className={`text-white-100 text-[14px] tracking-wider ${
                    experience.remarks.length - 1 != index ? "pb-1" : ""
                  }`}
                >
                  <span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#5efff2] to-blue-800 text-[16px]"
                    style={{ fontWeight: 800 }}
                  >
                    {remark.title}
                  </span>
                  <br />
                  <div className="flex">
                    <span className="pr-2">➜</span>
                    <span>{remark.text}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline animate={isMobile ? false : true}>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} index={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
