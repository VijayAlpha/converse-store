import { artworks } from "../assets/constants";
import { arrowRight } from "../assets/icons";
import { artWork3 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigNFTImg, setBigNFTImg] = useState(artWork3);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-36">
        <p className="text-xl font-montserrat text-primary">
          Our New NFT Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[68px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 xl:pr-10 max-sm::p-0">
            Future of
          </span>
          <br />
          <span className="text-primary inline-block mt-3">Dawn </span>{" "}
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Future of dawn is a free NFT collection of 1111 NFTs On{" "}
          <span className="text-primary">CoinEx Smart Chain</span>
        </p>
        <Button label="Mint Now" iconURL={arrowRight} />
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40  bg-center">
        <img
          src={bigNFTImg}
          alt="NFT collection"
          height={400}
          width={510}
          className="object-contain relative z-10 rounded-2xl mb-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {artworks.map((art, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={art}
                changeBigShoeImage={(art) => setBigNFTImg(art)}
                bigShoeImg={bigNFTImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
