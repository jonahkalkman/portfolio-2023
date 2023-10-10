"use client";

import Image from "next/image";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect, useRef} from "react";

export default function AboutImage() {
  const mm = gsap.matchMedia();
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const element = ref.current;

    mm.add("(min-width: 1024px)", () => {
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
    });
  }, []);

  return (
    <div
      ref={ref}
      className="mx-auto overflow-hidden rounded-3xl lg:blur-md w-full"
    >
      <Image
        className="mx-auto w-[90%] mb-10 lg:w-[140%] lg:mb-20 rounded-3xl h-[250px] md:h-[350px] lg:h-[700px] 2xl:h-[900px] object-cover"
        src="/hero.jpeg"
        alt="About image"
        width={1400}
        height={1400}
      />
    </div>
  );
}
