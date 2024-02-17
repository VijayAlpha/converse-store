import { arrowRight } from "../assets/icons";
import { artWork6 } from "../assets/images";
import Button from "../components/Button";
import "animate.css";
import TrackVisibility from "react-on-screen";

const SpecialOffer = () => {
  return (
    <section
      className={`flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container `}>
      <TrackVisibility partialVisibility once>
        {({ isVisible }) => (
          <div
            className={`flex-1 ${
              isVisible
                ? "animate__animated animate__fadeIn animate__slower"
                : ""
            }`}>
            <img src={artWork6} className="w-[45rem] rounded-lg" />
          </div>
        )}
      </TrackVisibility>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          In the year
          <span className="text-primary"> 2145 </span>
        </h2>
        <p className="mt-4 info-text">
          Futuocorp, a global conglomerate, unleashed their legion of cybernetic
          soldiers upon the world, aiming for absolute control. In response, a
          band of rebels emerged, their bodies enhanced with advanced cybernetic
          implants and accompanied by cyberpunk animals warriors from different
          clans for battle.
        </p>

        <p className="mt-6 info-text">
          Led by the enigmatic Captain Nova, they waged a guerrilla war against
          Futuocorp's forces, striking from the shadows and inspiring hope in
          the oppressed masses.
        </p>

        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          {" "}
          <Button label="Join Waitlist" iconURL={arrowRight} />
          <Button
            label="Follow us on Twitter"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
