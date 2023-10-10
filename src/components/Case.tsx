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
        <div className="group relative w-full h-[200px] lg:h-[500px] xl:h-[500px] 2xl:h-[600px] rounded-xl lg:rounded-3xl overflow-hidden">
          <Image
            className="scale-110 w-full h-full object-cover absolute top-0 left-0 rounded-xl lg:rounded-3xl smooth-transition group-hover:cursor-pointer group-hover:scale-[140%]"
            src={image}
            alt={alt}
            width={1000}
            height={1000}
          />
          <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-[15%]"></div>
        </div>
        <div className="absolute bottom-5 left-5 lg:bottom-10 lg:left-10 pointer-events-none">
          <h2 className="lg:hidden text-2xl font-bold mb-1 drop-shadow-md">
            {title}
          </h2>
          <p className="lg:hidden text-xs uppercase drop-shadow-md">
            {description}
          </p>
          <h2 className="hidden lg:block text-2xl font-bold mb-1">
            <TextHoverAnimation text={title} hover={hover} />
          </h2>
          <p className="hidden lg:block text-xs uppercase">
            <TextHoverAnimation text={description} hover={hover} />
          </p>
        </div>
      </div>
    </Link>
  );
}
