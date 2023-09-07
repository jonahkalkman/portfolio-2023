import TextAnimation from "../components/animations/TextAnimation";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <h1 className="text-5xl leading-[125%]">
        <TextAnimation text="Jonah Kalkman" />
      </h1>
    </main>
  );
}
