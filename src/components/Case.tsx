"use client";

import React, {useState} from "react";
import Image from "next/image";
import TextHoverAnimation from "./animations/TextHoverAnimation";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export default function Case({title, description, image, alt}: Props) {
  const [hover, setHover] = useState(false);

  return (
    <Link href="/case">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative"
      >
        <div className="group relative w-full h-[500px] xl:h-[500px] 2xl:h-[600px] rounded-3xl overflow-hidden">
          <Image
            className="scale-110 w-full h-full object-cover absolute top-0 left-0 rounded-3xl blur-sm group-hover:blur-none smooth-transition group-hover:cursor-pointer group-hover:scale-[140%]"
            src={image}
            alt={alt}
            width={1000}
            height={1000}
          />
        </div>
        <div className="absolute bottom-10 left-10 pointer-events-none">
          <h2 className="text-2xl font-bold mb-1">
            <TextHoverAnimation text={title} hover={hover} />
          </h2>
          <p className="text-xs uppercase">
            <TextHoverAnimation text={description} hover={hover} />
          </p>
        </div>
      </div>
    </Link>
  );
}
