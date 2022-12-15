import React from "react";
import cam from "../images/cam.svg";
import flower from "../images/flower.svg";
import hand from "../images/hand.svg";
import Blocklist from "./Blocklist";
import overimg from "../images/overlay.png";
import overimg2 from "../images/overlay2.png";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

const Blocks = () => {
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
      <div className="backgroundimage">
        <MouseParallaxContainer
          globalFactorX={0.1}
          globalFactorY={0}
          resetOnLeave
        >
          <MouseParallaxChild factorX={-0.5} factorY={0}>
            <img src={overimg} className="w-[60%] mx-[33%] h-[65%]" />
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>

      <div className="flex flex-row w-full justify-center items-center gap-5">
        {data.map((items) => {
          return <Blocklist items={items} />;
        })}
      </div>
      <div className="backgroundimagedown mb-10 overflow-hidden">
        <MouseParallaxContainer
          globalFactorX={0.1}
          globalFactorY={0}
          resetOnLeave
        >
          <MouseParallaxChild factorX={0.5} factorY={0}>
            <img
              src={overimg2}
              className="w-[60%]  mx-[33%] rotateimg h-[65%]"
            />
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </>
  );
};

export default Blocks;
