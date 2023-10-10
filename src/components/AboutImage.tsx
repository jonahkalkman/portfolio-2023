"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function AboutImage() {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const element = ref.current;

    // Create a GSAP animation
    const animation = gsap.to(element, {
      width: "70%",
      duration: 1,
      blur: 0,
      filter: "blur(0px)",
    });

    ScrollTrigger.create({
      trigger: element,
      animation: animation,
      start: "top-=100 center",
      end: "bottom-=600 center",
      scrub: true,
    });
  }, []);

  return (
    <div ref={ref} className="mx-auto overflow-hidden rounded-3xl blur-md w-full">
      <Image
        className="w-full mb-20 rounded-3xl h-[700px]  2xl:h-[900px] object-cover"
        src="/hero.jpeg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  );
}
