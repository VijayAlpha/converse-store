import { socialMedia } from "../assets/constants";
import { copyrightSign } from "../assets/icons";
import { headerLogo } from "../assets/images";

const Footer = () => {
  return (
    <footer className="max-container flex flex-wrap justify-between">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={headerLogo}
              className="-m-4 -mb-6"
              width={120}
              height={46}
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Future of Dawn is a NFT collection of 1111 NFTs On CoinEx Smart
            Chain - Powered By CoinEx.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-5 text-white-400  max-sm:flex-col max-sm:items-center">
        <div className="flex items-center gap-5 justify-end ">
          {socialMedia.map((icon) => (
            <a
              key={icon.src}
              href={icon.link}
              className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
              <img src={icon.src} alt={icon.alt} width={24} height={24} />
            </a>
          ))}
        </div>
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
