"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

const Hero = () => {
  const textLVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  const textRVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const controls = useAnimation();

  useEffect(() => {
    const scrollHandler = () => {
      const scrollY = window.scrollY;
      const exitThreshold = 500; // Ajusta según sea necesario

      if (scrollY > exitThreshold) {
        controls.start("exit");
      } else {
        controls.start("visible");
      }
    };

    // Agrega el event listener para manejar el scroll
    window.addEventListener("scroll", scrollHandler);

    // Inicia la animación de salida cuando el componente carga
    controls.start("exit");

    // Limpia el event listener al desmontar el componente
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [controls]);

  return (
    <div className="relative h-screen flex items-center justify-center">
      <motion.div
        initial="hidden"
        animate={controls}
        exit="exit"
        variants={imageVariants}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Image
          src={"/finaaaaal.png"}
          width={446 / 1.6}
          height={672 / 1.6}
          alt="Mask HONEYICE"
        />
      </motion.div>

      <motion.h1 className="text-[100px] flex flex-col dark:text-[#F6ECE0]/75 font-black absolute top-1/2 left-1/2 leading-[0.75] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
        <motion.span
          className="ml-1"
          variants={textLVariants}
          initial="hidden"
          animate={controls}
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          CLIMB
        </motion.span>
        <motion.span
          className="ml-24"
          variants={textRVariants}
          initial="hidden"
          animate={controls}
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        >
          FOR
        </motion.span>
        <motion.span
          className="ml-40"
          variants={textLVariants}
          initial="hidden"
          animate={controls}
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
        >
          THE
        </motion.span>
        <motion.span
          className="ml-10"
          variants={textRVariants}
          initial="hidden"
          animate={controls}
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
        >
          VIEW
        </motion.span>
      </motion.h1>
    </div>
  );
};

export default Hero;