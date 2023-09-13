"use client";

import { useEffect } from "react";
import gsap from "gsap";

interface Props {
  text: string;
}

export default function Marquee({ text }: Props) {
  useEffect(() => {
    let currentScroll = 0;
    let isScrollingDown = true;

    let tween = gsap
      .to(".marquee__part", {
        xPercent: -100,
        repeat: -1,
        duration: 10,
        ease: "linear",
      })
      .totalProgress(0.5);

    gsap.set(".marquee__inner", { xPercent: -50 });

    window.addEventListener("scroll", function () {
      if (window.pageYOffset > currentScroll) {
        isScrollingDown = true;
      } else {
        isScrollingDown = false;
      }

      gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
      });

      currentScroll = window.pageYOffset;
    });
  }, []);

  return (
    <section className="marquee text-8xl py-10 font-bold uppercase relative overflow-hidden text-white">
      <div
        className="marquee__inner flex flex-auto w-fit flex-row antialiased"
        aria-hidden="true"
      >
        <div className="marquee__part shrink-0 px-[40px] font-primary text-bold">
          {text}
        </div>
        <div className="marquee__part shrink-0 px-[40px] font-primary text-bold">
          {text}
        </div>
        <div className="marquee__part shrink-0 px-[40px] font-primary text-bold">
          {text}
        </div>
        <div className="marquee__part shrink-0 px-[40px] font-primary text-bold">
          {text}
        </div>
        <div className="marquee__part shrink-0 px-[40px] font-primary text-bold">
          {text}
        </div>
        <div className="marquee__part shrink-0 px-[40px] font-primary text-bold">
          {text}
        </div>
        <div className="marquee__part shrink-0 px-[40px] font-primary text-bold">
          {text}
        </div>
        <div className="marquee__part shrink-0 px-[40px] font-primary text-bold">
          {text}
        </div>
        <div className="marquee__part shrink-0 px-[40px] font-primary text-bold">
          {text}
        </div>
        <div className="marquee__part shrink-0 px-[40px] font-primary text-bold">
          {text}
        </div>
        <div className="marquee__part shrink-0 px-[40px] font-primary text-bold">
          {text}
        </div>
        <div className="marquee__part shrink-0 px-[40px] font-primary text-bold">
          {text}
        </div>
      </div>
    </section>
  );
}
