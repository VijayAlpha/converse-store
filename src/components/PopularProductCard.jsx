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
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
    </div>
  );
};

export default PopularProductCard;
