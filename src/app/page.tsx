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

const ThreeScene = dynamic(
  () => import("../components/animations/ThreeScene"),
  {
    ssr: false,
  }
);

const ThreeSecond = dynamic(
  () => import("../components/animations/ThreeSecond"),
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
        <div className="flex mt-20 w-full gap-20">
          <div className="w-2/3">
            <Case
              title="EuroBrouwers"
              description="Development & design"
              image="/eurobrouwers.jpeg"
              alt="EuroBrouwers"
            />
          </div>
          <div className="w-1/3">
            <Case
              title="Bar Alaska"
              description="Development & design"
              image="/baralaska.jpeg"
              alt="Bar Alaska website"
            />
          </div>
        </div>
        <div className="flex mt-20 w-full gap-10">
          <div className="w-full">
            <Case
              title="Green Label Logistics"
              description="Development & design"
              image="/greenlabellogistics.jpg"
              alt="Green Label Logistics website"
            />
          </div>
        </div>
        <div className="text-center mt-20 mb-20">
          <Button title="View more" link="/work" />
        </div>
      </div>
      <div className="mb-20 mt-40">
        <Marquee text="About me -" />
      </div>
      <div className="container mx-auto mb-40">
        <Image
          className="w-full mb-20 rounded-2xl h-[700px] object-cover"
          src="/hero.jpeg"
          width={2000}
          height={2000}
          alt=""
        />
        <div className="flex justify-center gap-20 relative">
          <p className="text-white text-3xl font-bold w-1/3 font-primary leading-normal">
            <TextAnimation
              text="Turning boring websites into internet sensations using the latest technology."
              animateOnce={true}
            />
          </p>
          <div className="w-1/3 ">
            <p className="leading-[200%] mb-10 uppercase">
              <TextAnimation
                text="My passion is to create web experiences that are both beautiful and
            functional. I have a strong focus on user experience and technology.
            I am a frontend developer with a background in computer science.
            Currently working as a freelance developer."
                animateOnce={true}
              />
            </p>
            <TextAnimation text="TECH STACK:" animateOnce={true} />
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
    </div>
  );
}
