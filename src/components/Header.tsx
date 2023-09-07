import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="flex items-center justify-between pt-10 w-full relative z-10">
      <div
        style={{
          transition: "all .7s cubic-bezier(.7, 0, .3, 1)",
        }}
        className="flex items-center justify-between gap-4 border-solid border-2 border-gray-200 py-2 px-8 pl-4 rounded-full hover:bg-white hover:text-black"
      >
        <Image
          className="w-[30px] h-[30px]"
          src="/logo.png"
          width={500}
          height={500}
          alt="Picture of Jonah Kalkman"
        />
        <h1 className="text-lg uppercase leading-none">Jonah Kalkman</h1>
      </div>
      <Navigation />
    </header>
  );
}
