import Button from "./Button";

export default function Footer() {
  return (
    <footer className="container mx-auto mb-5">
      <section className="rounded-3xl p-8 lg:p-20 bg-gradient-to-bl from-cyan-900 via-black to-cyan-600">
        <div className="w-full lg:w-1/2 justify-start items-start">
          <h2 className="uppercase text-bold text-lg lg:text-8xl mb-5 lg:mb-10 lg:leading-snug">
            Let's work together
          </h2>
          <div className="flex gap-5 lg:flex-row lg:gap-10">
            <div className="w-fit">
              <Button title="E-mail" link="mailto:jonah@jkagency.nl" />
            </div>
            <div className="w-fit">
              <Button title="GITHUB" link="https://github.com/jonahkalkman" />
            </div>
          </div>
        </div>
      </section>
      <div className="mt-10 lg:mt-20 flex justify-between">
        <p className="uppercase text-xs lg:text-lg">Jonah Kalkman</p>
        <p className="uppercase text-xs lg:text-lg">Made in Rotterdam</p>
      </div>
    </footer>
  );
}
