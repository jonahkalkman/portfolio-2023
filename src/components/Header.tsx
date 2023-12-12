import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="flex items-center justify-center lg:justify-between py-4 lg:pt-10 lg:pb-0 w-full relative z-10 rounded-2xl mt-5 px-0">
      <div
        style={{
          transition: "all .7s cubic-bezier(.7, 0, .3, 1)",
        }}
        className="flex items-center justify-between gap-4"
      >
        <Image
          className="w-[30px] h-[30px] 2xl:w-[50px] 2xl:h-[50px]"
          src="/logo.png"
          width={500}
          height={500}
          alt="Picture of Jonah Kalkman"
        />
        <h1 className="text-sm text-white uppercase leading-none 2xl:text-xl">
          Jonah Kalkman
        </h1>
      </div>
      <Navigation />
    </header>
  );
}
