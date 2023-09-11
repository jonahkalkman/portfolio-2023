"use client";

import { useRef } from "react";

interface Props {
  text: string;
  hover: boolean;
}

export default function TextHoverAnimation({ text , hover}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const words = text.split(" ");

  return (
    <>
      {words.map((word, index) => (
        <span
          ref={ref}
          key={index}
          className="span-line relative overflow-hidden inline-flex"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <span
            className="span-line-inner relative inline whitespace-pre-wrap"
            style={{
              transform: hover ? "translateY(0px)" : "translateY(100%)",
              transition: "all .7s cubic-bezier(.7, 0, .3, 1)",
            }}
          >
            {word}&nbsp;
          </span>
        </span>
      ))}
    </>
  );
}
