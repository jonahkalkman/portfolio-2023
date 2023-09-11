import Link from "next/link";

interface Props {
  title: string;
  link: string;
}

export default function Button({ title, link }: Props) {
  return (
    <Link href={link}>
      <button className="rounded-full text-white border-2 border-white py-3 px-10 leading-none uppercase hover:bg-white hover:text-black smooth-transition">
        {title}
      </button>
    </Link>
  );
}
