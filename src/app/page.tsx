import dynamic from "next/dynamic";
import Hero from "../components/Hero";
import Case from "../components/Case";
import Button from "../components/Button";
import Marquee from "../components/animations/Marquee";
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
        <ThreeScene />
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
      <div className="mb-40 mt-40">
        <Marquee text="About me -"/>
      </div>
    </div>
  );
}
