import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { fadeIn } from "../../utils/motion"; // Ensure this utility exists
import "./Timeline.css";

const TimelineItem = ({ data, index }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [hover, setHover] = useState(false);

  const handleInteraction = () => {
    if (isMobile) setHover(!hover);
  };

  const fadeInDirection = isMobile
    ? "none"
    : index % 2 === 0
    ? "left"
    : "right";

  const hexToRgbA = (hex) => {
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      let c = hex.substring(1).split("");
      if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = "0x" + c.join("");
      return {
        boxShadow: `0 0 100px rgba(${(c >> 16) & 255}, ${(c >> 8) & 255}, ${
          c & 255
        }, 0.6)`,
      };
    }
    return {};
  };

  return (
    <motion.div
      variants={fadeIn(fadeInDirection, "spring", 0.4 * index, 0.7)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="timeline-item"
    >
      <div
        className="timeline-item-content"
        onClick={handleInteraction}
        onMouseEnter={() => !isMobile && setHover(true)}
        onMouseLeave={() => !isMobile && setHover(false)}
        style={hover ? hexToRgbA(data.category.color) : undefined}
      >
        <span className="tag" style={{ background: data.category.color }}>
          {data.category.tag}
        </span>
        <time>{data.dateRange}</time>
        <h3>{data.certification}</h3>
        <h5 style={{ color: data.category.color }}>{data.educationFacility}</h5>
        <p>{data.result}</p>
        <span className="circle" />
      </div>
    </motion.div>
  );
};

const Timeline = ({ timelineData }) =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData.map((data, idx) => (
        <TimelineItem data={data} index={idx} key={idx} />
      ))}
    </div>
  );

export default Timeline;
