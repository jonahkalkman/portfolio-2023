"use client";

import { motion } from "framer-motion";

export default function SvgAnimation() {
  const pathMotion = {
    rest: {
      pathLength: 0,
      transtion: {
        duration: 2,
        ease: "easeInOut",
      },
    },
    hover: {
      pathLength: 1.1,
      transtion: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.svg
      initial="rest"
      whileInView="hover"
      viewport={{ once: true }}
      className="w-[50px] h-[50px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.23174 23 20.46348"
    >
      <circle cx="0" cy="0" r="2.05" fill="white" />
      <g fill="none">
        <motion.ellipse
          variants={pathMotion}
          strokeWidth={1}
          stroke="white"
          rx="11"
          ry="4.2"
        />
        <motion.ellipse
          variants={pathMotion}
          strokeWidth={1}
          stroke="white"
          rx="11"
          ry="4.2"
          transform="rotate(60)"
        />
        <motion.ellipse
          variants={pathMotion}
          strokeWidth={1}
          stroke="white"
          rx="11"
          ry="4.2"
          transform="rotate(120)"
        />
      </g>
    </motion.svg>
  );
}
