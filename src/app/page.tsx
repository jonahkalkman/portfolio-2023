import dynamic from "next/dynamic";
import Image from "next/image";

import Hero from "../components/Hero";
import Case from "../components/Case";
import Button from "../components/Button";
import Marquee from "../components/animations/Marquee";
import TextAnimation from "../components/animations/TextAnimation";
import SvgAnimation from "../components/animations/SvgAnimation";
import VueAnimation from "../components/animations/VueAnimation";
import TypescriptIcon from "../components/animations/TypescriptIcon";
import AboutImage from "../components/AboutImage";
import Footer from "../components/Footer";
import GridCases from "../components/GridCases";

const ThreeScene = dynamic(
  () => import("../components/animations/ThreeScene"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <Hero />
        <ThreeScene model="./model.obj" />
        <GridCases />
      </div>
      <div className="mb-20 mt-20 lg:mb-20 lg:mt-40">
        <Marquee text="About me -" />
      </div>
      <AboutImage />
      <div id="about" className="container mx-auto mb-20 lg:mb-40">
        <div className="flex flex-col lg:flex-row justify-center gap-5 lg:gap-20 relative">
          <p className="text-white text-2xl lg:text-3xl font-bold w-full lg:w-1/3 font-primary leading-normal">
            <TextAnimation
              text="Turning boring websites into internet sensations using the latest technology."
              animateOnce={true}
            />
          </p>
          <div className="w-full lg:w-1/3">
            <p className="text-sm leading-[200%] mb-10 uppercase">
              <TextAnimation
                text="I am a software engineer based in Rotterdam, Netherlands. My expertise and passion are in front-end development. Since high school, I have been building websites by constantly trying new web techniques. I am currently building with React and Vue.js as my main frameworks. Besides web development, I also build mobile applications for iOS and Android using React Native. I use these frameworks and techniques during my job as a frontend developer at B.made and previously worked at Keylane and Dept. To gain new insights and broaden my knowledge as a developer I also work as a freelance developer."
                animateOnce={true}
              />
            </p>
            <div className="mb-5"></div>
            <div className="flex gap-10 items-center">
              <SvgAnimation />
              <div className="flex flex-col justify-center items-center relative w-fit">
                <SvgAnimation />
                <span className="text-[7px] absolute bottom-[-15px] w-fit whitespace-nowrap left-[50%] translate-x-[-50%]">
                  <TextAnimation text="REACT NATIVE" animateOnce={true} />
                </span>
              </div>
              <VueAnimation />
              <TypescriptIcon />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
