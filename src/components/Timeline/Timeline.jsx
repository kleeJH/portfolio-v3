// REFERENCE: https://www.florin-pop.com/blog/2019/04/how-to-create-a-timeline-with-react/

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

import "./Timeline.css";

const TimelineItem = ({ data, index }) => {
  const [hover, setHover] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  function fadeInDirection(index) {
    if (isMobile) return "up";

    if (index % 2 == 0) {
      return "left";
    } else {
      return "right";
    }
  }

  function hexToRgbA(hex) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split("");
      if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = "0x" + c.join("");
      var rgbA =
        "rgba(" +
        [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
        ",0.7)";
      return { boxShadow: `0 0 100px ${rgbA}` };
    }
    throw new Error("Bad Hex");
  }

  return (
    <motion.div
      variants={fadeIn(fadeInDirection(index), "spring", 0.5 * index, 0.7)}
      className="timeline-item"
    >
      <div
        className="timeline-item-content"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={hover ? hexToRgbA(data.category.color) : null}
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
