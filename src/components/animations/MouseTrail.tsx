import { use, useEffect, useRef } from "react";
import gsap from "gsap";

import "./styles.css";

interface Props {
  children: React.ReactNode;
}

export default function MouseTrail({ children }: Props) {
  const ref = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const items = document.querySelectorAll(".trail-container");

    items.forEach((el) => {
      const trail = el.querySelector(".trail");

      el.addEventListener("mouseenter", (e) => {
        gsap.to(trail, {
          force3D: true,
          // @ts-ignore
          x: e.offsetX - 100,
          // @ts-ignore
          y: e.offsetY - 100,
        });
        gsap.to(trail, {
          autoAlpha: 1,
          duration: 0.3,
          ease: "sine.inOut",
          scale: 1,
        });
      });

      el.addEventListener("mouseleave", (e) => {
        gsap.to(trail, {
          autoAlpha: 0,
          duration: 0.3,
          ease: "sine.inOut",
          scale: 0.1,
        });
      });

      el.addEventListener("mousemove", (e) => {
        gsap.to(trail, {
          force3D: true,
          // @ts-ignore
          x: e.offsetX - 75,
          // @ts-ignore
          y: e.offsetY - 75,
          delay: 0.1,
        });
      });
    });
  });

  return (
    <div className="trail-container" ref={ref}>
      <div
        className="trail rounded-full flex items-center justify-center text-black"
        ref={trailRef}
      >
        <span className="text-sm uppercase">View Project</span>
      </div>
      {children}
    </div>
  );
}
