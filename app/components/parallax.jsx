import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useMediaQuery } from "react-responsive";

import styles from "./paralax.module.scss";

const Parallax = ({ works }) => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const calculateColumns = () => {
    if (isMobile) {
      return 2;
    } else if (isTablet) {
      return 3;
    } else {
      return 4;
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.spacer}></div>
      <div ref={gallery} className={styles.gallery}>
        {Array.from({ length: calculateColumns() }).map((_, index) => (
          <Column
            key={index}
            works={works.slice(
              index * (works.length / calculateColumns()),
              (index + 1) * (works.length / calculateColumns())
            )}
            y={index === 0 ? y : y2}
          />
        ))}
      </div>
      <div className={styles.spacer}></div>
    </div>
  );
};

const Column = ({ works, y }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {works.map((work, i) => (
        <div key={i} className={styles.imageContainer}>
          <Image src={work} alt="image" fill />
        </div>
      ))}
    </motion.div>
  );
};

export default Parallax;