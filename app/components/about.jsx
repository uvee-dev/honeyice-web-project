"use client";
import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";

const About = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
      });

  return (
    <div className="relative">
      {" "}
      <motion.div
        className="absolute left-0 bg-cover h-full bg-center"
        exit={{ position: "static"}}
        ref={ref}
        style={{
          backgroundImage: "url(/pasillo.png)",
          rotateX: scrollYProgress,
        }}
      ></motion.div>
      <div className="h-screen"></div>
    </div>
  );
};

export default About;
