import TextAnimation from "./animations/TextAnimation";
import Button from "./Button";
import CurrentTime from "./CurrentTime";

export default function Hero() {
  return (
    <section className="flex items-center justify-between h-screen mt-[-70px] relative">
      <h2 className="font-bold text-8xl leading-tight text-center w-[75%] 2xl:w-[60%] 2xl:text-9xl 2xl:leading-snug mx-auto text-white">
        <TextAnimation
          text="Frontend Developer based in Rotterdam"
          animateOnce={true}
        />
      </h2>
      <div className="absolute bottom-10 left-0">
        <Button title="ROTTERDAM " link="">
          <CurrentTime />
        </Button>
      </div>
      <div className="absolute bottom-10 right-0">
        <Button title="SCROLL DOWN" link=""></Button>
      </div>
    </section>
  );
}
