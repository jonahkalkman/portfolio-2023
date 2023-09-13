"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import TextHoverAnimation from "./animations/TextHoverAnimation";
import Link from "next/link";
import ImageParallax from "./animations/ImageParallax";
import MouseTrail from "./animations/MouseTrail";

interface Props {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export default function Case({ title, description, image, alt }: Props) {
  const [hover, setHover] = useState(false);

  return (
    <Link href="/case">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative"
      >
        <MouseTrail>
          <div className="group relative w-full h-[500px] rounded-2xl overflow-hidden">
            <Image
              className="scale-110 w-full h-full object-cover absolute top-0 left-0 rounded-2xl blur-sm hover:blur-none smooth-transition hover:cursor-pointer"
              src={image}
              alt={alt}
              width={1000}
              height={1000}
            />
          </div>
        </MouseTrail>
        <div className="absolute bottom-10 left-10">
          <h2 className="text-2xl font-bold">
            <TextHoverAnimation text={title} hover={hover} />
          </h2>
          <p className="text-sm">
            <TextHoverAnimation text={description} hover={hover} />
          </p>
        </div>
      </div>
    </Link>
  );
}
