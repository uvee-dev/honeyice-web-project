"use client";
import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const divVariants = {
  hidden: {
    opacity: 0.6,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const pathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: { opacity: 1, pathLength: 1 },
};

const Loading = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [15, -15]);

  return (
    <motion.div
      style={{ x, y, rotateX, rotateY, z: 100 }}
      drag
      dragElastic={0.18}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileTap={{ cursor: "grabbing" }}
      variants={divVariants}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.5,
      }}
      setLoaded
      className="p-6 w-full h-screen bg-black flex flex-col justify-center md:p-36 items-center"
    >
      <motion.svg
        style={{ x, y, rotateX, rotateY, z: 100 }}
        className="w-[1108px/2] h-[588px/2]"
        xmlns="http://www.w3.org/2000/svg"
        stroke="rgb(221 214 254)"
        fill="none"
        viewBox="0 0 1397.35 678.12"
      >
        <motion.g
          style={{ x, y, rotateX, rotateY, z: 100 }}
          id="Layer_2"
          data-name="Layer 2"
        >
          <g id="Layer_1-2" data-name="Layer 1">
            <motion.ellipse
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              class="cls-1"
              cx="1079.75"
              cy="115.8"
              rx="56.63"
              ry="36.58"
            />
            <motion.ellipse
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              class="cls-1"
              cx="1243.63"
              cy="115.8"
              rx="56.63"
              ry="36.58"
            />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              class="cls-1"
              d="M1212.31,247.12v355.8a51.86,51.86,0,0,1-50.85,52,7.12,7.12,0,0,1-1.38.09H791.29c-10.15,0-11.62-14.63-1.63-16.52,129.75-25.13,318.45-85.88,318.45-226.65a82.48,82.48,0,0,0-82.52-82.52H807.9A621.46,621.46,0,0,0,441.08,449.15C353,513.6,251.87,587.6,199.47,626a135.59,135.59,0,0,1-79.94,26.07h-7.66c-11.61,0-16.43-14.88-7.05-21.77L833.2,97.66a101.4,101.4,0,0,1,60-19.62h81.14c9.9,0,11.53,14,1.89,16.35C936,104,892.31,118.91,861,142c-69.18,50.6-33.39,160.13,52.4,160.13h141.89a52.84,52.84,0,0,0,52.83-52.83v-.17c0-26.68,19.19-50.51,45.69-53.7A52.19,52.19,0,0,1,1212.31,247.12Z"
            />
          </g>
        </motion.g>

        <motion.g style={{ x, y, rotateX, rotateY, z: 80 }}>
          <g id="Layer_1-2" data-name="Layer 1">
            <motion.ellipse
              variants={pathVariants}
              initial="hidden"
              animate={{ x: 10, y: 5, opacity: 1, pathLength: 1 }}
              transition={{ delay: 0.5 }}
              class="cls-1"
              cx="1079.75"
              cy="115.8"
              rx="56.63"
              ry="36.58"
            />
            <motion.ellipse
              variants={pathVariants}
              initial="hidden"
              animate={{ x: 10, y: 5, opacity: 1, pathLength: 1 }}
              transition={{ delay: 0.5 }}
              class="cls-1"
              cx="1243.63"
              cy="115.8"
              rx="56.63"
              ry="36.58"
            />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate={{ x: 10, y: 5, opacity: 1, pathLength: 1 }}
              transition={{ delay: 0.5 }}
              class="cls-1"
              d="M1212.31,247.12v355.8a51.86,51.86,0,0,1-50.85,52,7.12,7.12,0,0,1-1.38.09H791.29c-10.15,0-11.62-14.63-1.63-16.52,129.75-25.13,318.45-85.88,318.45-226.65a82.48,82.48,0,0,0-82.52-82.52H807.9A621.46,621.46,0,0,0,441.08,449.15C353,513.6,251.87,587.6,199.47,626a135.59,135.59,0,0,1-79.94,26.07h-7.66c-11.61,0-16.43-14.88-7.05-21.77L833.2,97.66a101.4,101.4,0,0,1,60-19.62h81.14c9.9,0,11.53,14,1.89,16.35C936,104,892.31,118.91,861,142c-69.18,50.6-33.39,160.13,52.4,160.13h141.89a52.84,52.84,0,0,0,52.83-52.83v-.17c0-26.68,19.19-50.51,45.69-53.7A52.19,52.19,0,0,1,1212.31,247.12Z"
            />
          </g>
        </motion.g>
        <motion.g
          style={{ x, y, rotateX, rotateY, z: 50 }}
          id="Layer_2"
          data-name="Layer 2"
        >
          <g id="Layer_1-2" data-name="Layer 1">
            <motion.ellipse
              variants={pathVariants}
              initial="hidden"
              animate={{ x: -15, y: -10, opacity: 1, pathLength: 1 }}
              transition={{ delay: 0.8 }}
              class="cls-1"
              cx="1079.75"
              cy="115.8"
              rx="56.63"
              ry="36.58"
            />
            <motion.ellipse
              variants={pathVariants}
              initial="hidden"
              animate={{ x: -15, y: -10, opacity: 1, pathLength: 1 }}
              transition={{ delay: 0.8 }}
              class="cls-1"
              cx="1243.63"
              cy="115.8"
              rx="56.63"
              ry="36.58"
            />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate={{ x: -15, y: -10, opacity: 1, pathLength: 1 }}
              transition={{ delay: 0.8 }}
              class="cls-1"
              d="M1212.31,247.12v355.8a51.86,51.86,0,0,1-50.85,52,7.12,7.12,0,0,1-1.38.09H791.29c-10.15,0-11.62-14.63-1.63-16.52,129.75-25.13,318.45-85.88,318.45-226.65a82.48,82.48,0,0,0-82.52-82.52H807.9A621.46,621.46,0,0,0,441.08,449.15C353,513.6,251.87,587.6,199.47,626a135.59,135.59,0,0,1-79.94,26.07h-7.66c-11.61,0-16.43-14.88-7.05-21.77L833.2,97.66a101.4,101.4,0,0,1,60-19.62h81.14c9.9,0,11.53,14,1.89,16.35C936,104,892.31,118.91,861,142c-69.18,50.6-33.39,160.13,52.4,160.13h141.89a52.84,52.84,0,0,0,52.83-52.83v-.17c0-26.68,19.19-50.51,45.69-53.7A52.19,52.19,0,0,1,1212.31,247.12Z"
            />
          </g>
        </motion.g>
        <motion.g
          style={{ x, y, rotateX, rotateY, z: 30 }}
          id="Layer_2"
          data-name="Layer 2"
        >
          <g id="Layer_1-2" data-name="Layer 1">
            <motion.ellipse
              variants={pathVariants}
              initial="hidden"
              animate={{ x: 15, y: 5, opacity: 1, pathLength: 1 }}
              transition={{ delay: 0.8 }}
              class="cls-1"
              cx="1079.75"
              cy="115.8"
              rx="56.63"
              ry="36.58"
            />
            <motion.ellipse
              variants={pathVariants}
              initial="hidden"
              animate={{ x: 15, y: 5, opacity: 1, pathLength: 1 }}
              transition={{ delay: 0.8 }}
              class="cls-1"
              cx="1243.63"
              cy="115.8"
              rx="56.63"
              ry="36.58"
            />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate={{ x: 15, y: 5, opacity: 1, pathLength: 1 }}
              transition={{ delay: 0.8 }}
              class="cls-1"
              d="M1212.31,247.12v355.8a51.86,51.86,0,0,1-50.85,52,7.12,7.12,0,0,1-1.38.09H791.29c-10.15,0-11.62-14.63-1.63-16.52,129.75-25.13,318.45-85.88,318.45-226.65a82.48,82.48,0,0,0-82.52-82.52H807.9A621.46,621.46,0,0,0,441.08,449.15C353,513.6,251.87,587.6,199.47,626a135.59,135.59,0,0,1-79.94,26.07h-7.66c-11.61,0-16.43-14.88-7.05-21.77L833.2,97.66a101.4,101.4,0,0,1,60-19.62h81.14c9.9,0,11.53,14,1.89,16.35C936,104,892.31,118.91,861,142c-69.18,50.6-33.39,160.13,52.4,160.13h141.89a52.84,52.84,0,0,0,52.83-52.83v-.17c0-26.68,19.19-50.51,45.69-53.7A52.19,52.19,0,0,1,1212.31,247.12Z"
            />
          </g>
        </motion.g>
      </motion.svg>

      <p className="mt-24">scroll down</p>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{y:0}}
          animate={{y:20}}
          transition={{repeat: Infinity, duration: 1}}
          d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        ></motion.path>
      </svg>
    </motion.div>
  );
};

export default Loading;
