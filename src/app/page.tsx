import dynamic from "next/dynamic";
import Hero from "../components/Hero";
const ThreeScene = dynamic(
  () => import("../components/animations/ThreeScene"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div>
      <Hero />
      <ThreeScene />
    </div>
  );
}
