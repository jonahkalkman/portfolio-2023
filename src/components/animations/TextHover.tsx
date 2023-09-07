"use client";

import { motion } from "framer-motion";

interface Props {
  text: string;
}

export default function Header({ text }: Props) {
  return (
    <div className="stagger-link">
      <motion.div
        className="stagger-link-text"
        whileHover={{
          transition: {
            duration: 0.5,
          },
          translateY: -100,
        }}
      >
        {text}
      </motion.div>
    </div>
  );
}
