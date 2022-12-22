import React, { useEffect } from "react";
import cam from "../images/cam.svg";
import flower from "../images/flower.svg";
import hand from "../images/hand.svg";
import Blocklist from "./Blocklist";
import overimg from "../images/overlay.png";
import overimg2 from "../images/overlay2.png";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

const Blocks = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1200,
      });
  }, []);
  const data = [
    {
      img: cam,
      heading2: "Wallet",
      para: "Set up your Aleph Zero wallet to be able to hold, transfer, or stake your AZERO coins.",
    },
    {
      img: flower,
      heading2: "Explorer",
      para: "Familiarize yourself with the Aleph Zero explorer launched in collaboration with Subscab.",
    },
    {
      img: hand,
      heading2: "Utility",
      para: "Learn more about the utility and economics behind AZERO - Aleph Zero's native coin.",
    },
  ];
  return (
    <>
      <MouseParallaxContainer
        globalFactorX={0.3}
        globalFactorY={0}
        resetOnLeave
      >
        <div className="backgroundimage overflow-hidden">
          <MouseParallaxChild factorX={-0.5} factorY={0}>
            <img src={overimg} className="w-[45%] h-[45%] ml-[27%]" />
          </MouseParallaxChild>
        </div>

        <div className="flex flex-row w-full justify-center items-center gap-5" >
          {data.map((items) => {
            return <Blocklist items={items} />;
          })}
        </div>

        <div className="backgroundimagedown mb-20 overflow-hidden">
          <MouseParallaxChild factorX={0.5} factorY={0}>
            <img src={overimg2} className="w-[45%]  rotateimg h-[45%] relative left-[350px]" />
          </MouseParallaxChild>
        </div>
      </MouseParallaxContainer>
    </>
  );
};

export default Blocks;
