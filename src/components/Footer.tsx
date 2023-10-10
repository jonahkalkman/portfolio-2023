import Button from "./Button";

export default function Footer() {
  return (
    <footer className="container mx-auto mb-5">
      <section className="rounded-3xl p-20 bg-gradient-to-bl from-cyan-900 via-black to-cyan-600">
        <div className="w-1/2 justify-start items-start">
          <h2 className="uppercase text-bold text-8xl mb-10 leading-snug">
            Let's work together
          </h2>
          <div className="flex gap-10">
            <div className="w-fit">
              <Button title="E-mail" link="mailto:jonah@jkagency.nl" />
            </div>
            <div className="w-fit">
              <Button title="GITHUB" link="https://github.com/jonahkalkman" />
            </div>
          </div>
        </div>
      </section>
      <div className="mt-20">
        <p className="uppercase">Jonah Kalkman 2023</p>
      </div>
    </footer>
  );
}
