"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import style from "./coming.module.css";

const ComingSoon = () => {
  return (
    <div className={style.container + " w-full absolute max-h-screen"}>
      <div className="h-[70%] w-full">
        {/* NEGRA */}
        <motion.div
          initial={{ x: 0 }}
          animate={{
            x: 80,
          }}
          transition={{ duration: 1 }}
        >
          <Image
            className="hidden md:flex relative top-1/2 left-1/2  translate-y-44 -translate-x-24 -z-20"
            src={"/coming/negra.png"}
            width={324.19}
            height={448.16}
            alt="1/3 Woman Design"
          />
        </motion.div>
        {/* NEGRA movil */}
        <motion.div animate={{ x: 45 }} transition={{ duration: 1 }}>
          <Image
            className="relative md:hidden top-1/2 left-1/2  translate-y-48 -translate-x-11 -z-20"
            src={"/coming/negra.png"}
            width={324.19 / 2}
            height={448.16 / 2}
            alt="1/3 Woman Design"
          />
        </motion.div>

        {/* EYES */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ x: 80, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <Image
            className="relative hidden md:flex top-1/2 left-1/2 -translate-x-28 -translate-y-[110px] -z-40"
            src={"/coming/eyes.png"}
            width={118.03}
            height={95}
            alt="2/3 Woman Design"
          />
        </motion.div>
        {/* EYES movil */}
        <motion.div
          animate={{ x: 45 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <Image
            className="relative md:hidden top-1/2 left-1/2 -translate-x-[50px] translate-y-[45px] -z-40"
            src={"/coming/eyes.png"}
            width={118.03 / 2}
            height={95 / 2}
            alt="2/3 Woman Design"
          />
        </motion.div>

        {/* OJOS */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: -80 }}
          transition={{ duration: 1 }}
        >
          <Image
            className="relative hidden md:flex left-1/2 -translate-x-[128px] -translate-y-[215px]  -z-30"
            src={"/coming/ojos.png"}
            width={165}
            height={117}
            alt="3/3 Woman Design"
          />
        </motion.div>
        <motion.div animate={{ x: -45 }} transition={{ duration: 1 }}>
          <Image
            className="relative md:hidden left-1/2 -translate-x-[60px] -translate-y-[5px]  -z-30"
            src={"/coming/ojos.png"}
            width={165 / 2}
            height={117 / 2}
            alt="3/3 Woman Design"
          />
        </motion.div>
      </div>
      <div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center uppercase font-semibold text-white"
      >
        <motion.p>More ice. Coming soon.</motion.p>
        <motion.p>Mieles en camino.</motion.p>
      </div>
    </div>
  );
};

export default ComingSoon;
