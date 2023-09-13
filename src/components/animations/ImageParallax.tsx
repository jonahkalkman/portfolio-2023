import React, { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
  children?: ReactNode; // Correct the prop name to 'children'
}
export default function ImageParallax({ children }: Props) {
  const ref = useRef(null);
  // Correct the prop name here as well
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Get the image element and container
    const image = ref.current.querySelector("img");
    console.log(image);
    const container = ref.current;

    // Create a GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 50%", // Adjust as needed
        end: "bottom 50%", // Adjust as needed
        scrub: true, // Smooth scrolling
      },
    });

    // Define the animation
    tl.to(image, {
      y: 20, // Adjust the horizontal offset as needed
      ease: "linear",
    });

    // // When the image is out of view, reset the animation
    // ScrollTrigger.create({
    //   trigger: container,
    //   start: "bottom 50%", // Adjust as needed
    //   end: "bottom 50%", // Adjust as needed
    //   onEnter: () => tl.reverse(),
    //   onEnterBack: () => tl.play(),
    // });
  }, []);

  return (
    <div className="image-container h-full" ref={ref}>
      {children}
    </div>
  );
}
