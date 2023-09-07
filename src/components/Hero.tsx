import TextAnimation from "./animations/TextAnimation";
import CurrentTime from "./CurrentTime";

export default function Hero() {
  return (
    <section className="flex items-center justify-between p-4 h-screen mt-[-90px] relative">
      <h2 className="text-9xl leading-tight text-center w-[75%] mx-auto text-white">
        <TextAnimation text="Frontend Developer based in Rotterdam" />
      </h2>
      <hr className="bg-white border-none h-1 w-[100px] absolute bottom-[0px] rotate-90 left-[50%] translate-x-[-50%] rounded-md" />
      <p className="leading-none text-xs absolute bottom-10 text-white left-0 uppercase border-solid border-[1px] border-gray-200  py-2 px-7 rounded-full">
        Local time: <CurrentTime />
      </p>
      <p className="smooth-transition hover:bg-white hover:text-black leading-none text-xs absolute bottom-10 text-white right-0 uppercase border-solid border-[1px] border-gray-200  py-2 px-7 rounded-full">
        Scroll down
      </p>
    </section>
  );
}
