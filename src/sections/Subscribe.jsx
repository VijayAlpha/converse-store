import "animate.css";
import TrackVisibility from "react-on-screen";

const Subscribe = () => {
  return (
    <TrackVisibility partialVisibility once>
      {({ isVisible }) => (
        <section
          id="contact-us"
          className={`max-container flex justify-evenly items-center max-lg:flex-col gap-10  ${
            isVisible ? "animate__animated animate__fadeIn animate__slow" : ""
          }`}>
          <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
            Follow Us For
            <span className="text-primary"> Updates </span>& Whitelist
          </h3>

          <div className="flex flex-col max-sm:justify-end items-center gap-6 max-sm:w-full">
            <a
              className="bg-primary py-3 px-12 rounded-full text-xl text-white cursor-pointer"
              href="https://twitter.com/coinexindia"
              target="_blank"
              rel="noreferrer">
              Follow CoinEx
            </a>
            <a
              className="bg-primary py-3 px-12 rounded-full text-xl text-white cursor-pointer"
              href="https://twitter.com/futureofdawns"
              target="_blank"
              rel="noreferrer">
              Future Of Dawn
            </a>
            <a
              className="bg-primary py-3 px-12 rounded-full text-xl text-white cursor-pointer"
              href="https://denet.me/m/bYKLsb"
              target="_blank"
              rel="noreferrer">
              Join Whitelist
            </a>
          </div>
        </section>
      )}
    </TrackVisibility>
  );
};

export default Subscribe;
