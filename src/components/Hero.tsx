import TextAnimation from "./animations/TextAnimation";
import Button from "./Button";
import CurrentTime from "./CurrentTime";

export default function Hero() {
  return (
    <section className="flex items-center justify-between h-[300px] lg:h-screen lg:mt-[-90px] relative">
      <h2 className="font-bold text-3xl lg:text-8xl leading-tight text-center lg:w-[100%] xl:w-[90%] 2xl:w-[70%] 2xl:text-9xl 2xl:leading-snug mx-auto text-white">
        <TextAnimation
          text="Frontend Developer based in Rotterdam"
          animateOnce={true}
        />
      </h2>
      <div className="hidden lg:block absolute bottom-10 left-0">
        <Button title="ROTTERDAM " link="">
          <CurrentTime />
        </Button>
      </div>
      <div className="hidden lg:block absolute bottom-10 right-0">
        <Button title="SCROLL DOWN" link="#cases"></Button>
      </div>
    </section>
  );
}
