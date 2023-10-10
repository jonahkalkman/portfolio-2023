import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="flex items-center lg:justify-between pt-10 pb-10 lg:pb-0 w-full relative z-10">
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
        <h1 className="text-sm uppercase leading-none 2xl:text-xl">Jonah Kalkman</h1>
      </div>
      <Navigation />
    </header>
  );
}
