"use client";

import TextAnimation from "./animations/TextAnimation";
import Button from "./Button";
import CurrentTime from "./CurrentTime";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="flex items-center justify-between h-[300px] lg:h-screen lg:mt-[-90px] relative">
      <div className="w-2/3">
        <h2 className="font-bold text-3xl lg:text-8xl leading-tight text-left 2xl:text-9xl 2xl:leading-snug text-white mb-5">
          <TextAnimation
            text="Creative Front-end Developer"
            animateOnce={true}
          />
        </h2>
        <p className="uppercase text-2xl">
          Turning boring websites into internet sensations
        </p>
      </div>
      <div className="absolute w-1/2 h-[1200px] overflow-visible right-0 pointer-events-none">
        <Spline scene="https://prod.spline.design/Vtkftg-OiOqxc35R/scene.splinecode" />
      </div>
      <div className="hidden lg:block absolute bottom-10 left-0">
        <Button title="ROTTERDAM " link="">
          <CurrentTime />
        </Button>
      </div>
      <div className="hidden lg:block absolute bottom-10 right-0">
        <Button title="SCROLL DOWN" link="#cases"></Button>
      </div>
    </section>
  );
}
