interface Props {
  title: string;
}

export default function TextShadow({title}: Props) {
  return (
    <div className="overflow-hidden">
      <span
        className="uppercase inline-block align-middle group-hover:translate-y-[-100%] transition-all duration-500 ease-in-out"
        style={{textShadow: "0px 2rem 0px black"}}
      >
        {title}
      </span>
    </div>
  );
}
