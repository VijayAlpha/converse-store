import Button from "../components/Button";
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

          <div className="flex max-sm:justify-end items-center gap-6 max-sm:w-full">
            <Button label="Follow CoinEx" fullWidth />
            <Button label="Future Of Dawn" fullWidth />
            <Button label="Join Whitelist" fullWidth />
          </div>
        </section>
      )}
    </TrackVisibility>
  );
};

export default Subscribe;
