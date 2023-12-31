import Link from "next/link";

interface Props {
  title: string;
  link: string;
  target?: string;
  children?: React.ReactNode;
}

export default function Button({title, link, target, children}: Props) {
  return (
    <Link href={link} target={target}>
      <div className="group rounded-full border-2 border-white py-2 px-5 lg:py-3 lg:px-10 hover:bg-white transition-all duration-500 ease-in-out w-fit mx-auto">
        <div className="overflow-hidden">
          <span
            className="text-sm lg:text-xl uppercase inline-block align-middle text-white group-hover:translate-y-[-110%] group-hover:text-black transition-all duration-500 ease-in-out"
            style={{textShadow: "0px 2rem 0px black"}}
          >
            {title}
            {children}
          </span>
        </div>
      </div>
    </Link>
  );
}
