import Button from "./Button";
import Case from "./Case";

interface Props {}

export default function GridCases({}: Props) {
  return (
    <section id="cases" className="mt-10 lg:mt-20">
      <div className="flex gap-5 flex-col lg:grid lg:grid-cols-4 lg:grid-rows-4 lg:gap-10">
        <div className="lg:col-span-2 lg:row-span-2">
          <Case
            title="EuroBrouwers"
            description="Development and design"
            image="/eurobrouwers.jpeg"
            alt="EuroBrouwers"
            link="https://www.eurobrouwers.eu"
          />
        </div>
        <div className="lg:row-span-2 lg:col-start-3">
          <Case
            title="Bar Alaska"
            description="Development and design"
            image="/baralaska.jpeg"
            alt="Bar Alaska"
            link="https://baralaska.nl"
          />
        </div>
        <div className=" lg:row-span-2 lg:col-start-4">
          <Case
            title="Green Label Logistics"
            description="Development and design"
            image="/greenlabellogistics.jpg"
            alt="Green Label Logistics"
            link="https://greenlabellogistics.com"
          />
        </div>
        <div className=" lg:row-span-2 lg:row-start-3">
          <Case
            title="Urban Kr8"
            description="Development and design"
            image="/urbankr8.jpg"
            alt="Urban Kr8"
            link="https://urbankr8.com"
          />
        </div>
        <div className="lg:row-span-2 lg:row-start-3">
          <Case
            title="EuroBrouwers"
            description="Development and design"
            image="/eurobrouwers.jpeg"
            alt="EuroBrouwers"
            link="https://www.eurobrouwers.eu"
          />
        </div>
        <div className="lg:col-span-2 lg:row-span-2 lg:row-start-3">
          <div className="relative h-full w-full rounded-3xl p-8 lg:p-20 flex justify-center items-start flex-col bg-gradient-to-bl from-cyan-900 via-black to-cyan-600">
            <h2 className="uppercase text-lg lg:text-5xl lg:leading-snug xl:leading-snug mb-5 lg:mb-10 xl:text-7xl">
              Work with me
            </h2>
            <div className="w-fit">
              <Button title="E-mail" link="mailto:jonah@jkagency.nl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
