import { useState, useEffect } from "react";
import { products } from "../assets/constants";
import { artWork1, artWork2, artWork3, artWork4,artWork5 } from "../assets/images";

const PopularProductCard = ({ imgURL, name, isLast }) => {
  const carrousel = [artWork1, artWork2, artWork3, artWork4, artWork5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isLast) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isLast]);

  const displayedImage = isLast ? carrousel[currentIndex] : imgURL;

  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={displayedImage}
        alt={name}
        className="w-[280px] h-[280px] rounded-xl"
      />
      {/* <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div> */}
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
    </div>
  );
};

export default PopularProductCard;
