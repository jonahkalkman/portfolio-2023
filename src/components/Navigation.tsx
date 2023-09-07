export default function Navigation() {
  return (
    <nav className="flex items-center justify-between gap-5 border-solid border-2 border-gray-200 py-3 px-10 rounded-full">
      <ul className="flex items-center gap-10 text-white uppercase">
        <li className="animate-text-shadow text-lg leading-none">Work</li>
        <li className="animate-text-shadow text-lg leading-none">About</li>
        <li className="animate-text-shadow text-lg leading-none">Contact</li>
      </ul>
    </nav>
  );
}