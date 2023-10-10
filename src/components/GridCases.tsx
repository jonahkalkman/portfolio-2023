import Button from "./Button";
import Case from "./Case";

interface Props {}

export default function GridCases({}: Props) {
  return (
    <section className="mt-20">
      <div className="grid grid-cols-4 grid-rows-4 gap-10">
        <div className="col-span-2 row-span-2">
          <Case
            title="EuroBrouwers"
            description="Development and design"
            image="/eurobrouwers.jpeg"
            alt="EuroBrouwers"
          />
        </div>
        <div className="row-span-2 col-start-3">
          <Case
            title="Bar Alaska"
            description="Development and design"
            image="/baralaska.jpeg"
            alt="Bar Alaska"
          />
        </div>
        <div className="row-span-2 col-start-4">
          <Case
            title="Green Label Logistics"
            description="Development and design"
            image="/greenlabellogistics.jpg"
            alt="Green Label Logistics"
          />
        </div>
        <div className="row-span-2 row-start-3">
          <Case
            title="Urban Kr8"
            description="Development and design"
            image="/urbankr8.jpg"
            alt="Urban Kr8"
          />
        </div>
        <div className="row-span-2 row-start-3">
          <Case
            title="EuroBrouwers"
            description="Development and design"
            image="/eurobrouwers.jpeg"
            alt="EuroBrouwers"
          />
        </div>
        <div className="col-span-2 row-span-2 row-start-3">
          <div className="relative h-full w-full rounded-3xl p-20 flex justify-center items-start flex-col bg-gradient-to-tl from-slate-500 via-slate-900 to-red-100">
            <h2 className="text-8xl leading-snug mb-10">LET'S WORK TOGETHER</h2>
            <div className="w-fit">
              <Button title="E-mail" link="mailto:" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-20 mb-20">
        <Button title="View more" link="/work" />
      </div>
    </section>
  );
}
