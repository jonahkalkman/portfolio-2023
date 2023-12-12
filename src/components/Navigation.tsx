export default function Navigation() {
  return (
    <nav className="hidden lg:flex items-center justify-between gap-5 bg-white p-5 rounded-lg h-[70px]">
      <ul className="flex items-center gap-10 text-black uppercase">
        <li className="animate-text-shadow text-sm leading-none 2xl:text-xl"><a href="#cases">Work</a></li>
        <li className="animate-text-shadow text-sm leading-none 2xl:text-xl"><a href="#about">About</a></li>
        <li className="animate-text-shadow text-sm leading-none 2xl:text-xl"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
