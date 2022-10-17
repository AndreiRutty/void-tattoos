import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import CircularItem from "./CircularItem";

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const [fullBody, setFullBody] = useState(0);
  const [piercing, setPiercing] = useState(0);
  const [fullColor, setFullColor] = useState(0);
  const [temporary, setTemporary] = useState(0);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (fullBody < 90) {
          setFullBody(fullBody + 1);
        }
        if (piercing < 80) {
          setPiercing(piercing + 1);
        }
        if (fullColor < 75) {
          setFullColor(fullColor + 1);
        }
        if (temporary < 95) {
          setTemporary(temporary + 1);
        }
      }, 50);
    } else {
      setFullBody(0);
      setPiercing(0);
      setFullColor(0);
      setTemporary(0);
    }
  }, [inView, fullBody, piercing, fullColor, temporary]);

  //Circular progressbar styles
  const styles = {
    path: {
      stroke: "#111111",
    },
    trail: {
      stroke: "#EEEEEE",
    },
    text: {
      fill: "#111111",
      fontSize: "24px",
    },
  };

  return (
    <motion.section
      variants={fadeIn("up")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      ref={ref}
      className="section font-primary"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-y-12">
          <CircularItem
            value={fullBody}
            styles={styles}
            text="Full Body Tattoo"
          />
          <CircularItem
            value={piercing}
            styles={styles}
            text="Safely Piercing"
          />
          <CircularItem
            value={fullColor}
            styles={styles}
            text="Full Color Tattoo"
          />
          <CircularItem
            value={temporary}
            styles={styles}
            text="Temporary Tattoo"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;