import { artWork8 } from "../assets/images";
import Button from "../components/Button";
import "animate.css";
import TrackVisibility from "react-on-screen";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-3">
            the Story of
          </span>
          <span className="text-primary">Future Of Dawn</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Band of rebels emerged, their bodies enhanced with advanced cybernetic
          implants and accompanied by cyberpunk animals warriors from different
          clans for battles and legion of cybernetic soldiers upon the world,
          aiming for absolute control.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          This is a collection of 1111 Free NFTs for our whitelisted people.
        </p>
        <div className="mt-11">
          {" "}
          <a  className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none rounded-full bg-primary text-white w-52" href="#WhiteListLink" >Join WhiteList</a>
        </div>
      </div>
      <TrackVisibility partialVisibility once>
        {({ isVisible }) => (
          <div
            className={`flex-1 flex justify-center items-center w-full ${
              isVisible
                ? "animate__animated animate__fadeIn animate__slower"
                : ""
            }`}>
            <img
              src={artWork8}
              alt="shoe8"
              width={650}
              height={600}
              className="object-contain rounded-lg"
            />
          </div>
        )}
      </TrackVisibility>
    </section>
  );
};

export default SuperQuality;
