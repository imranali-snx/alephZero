import React, { useState } from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import images from "../images/moveimg.png";
const Movesec = () => {
  return (
    <div className="flex flex-row w-full h-full justify-center items-center container mx-auto my-20">
      <div className="w-[90%] flex justify-center items-center">
        <MouseParallaxContainer
         
          globalFactorX={0.3}
          globalFactorY={0.3}
          resetOnLeave
        >
          <MouseParallaxChild factorX={-0.8} factorY={-0.8}>
            <img src={images} className="w-full" />
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
      <div className="flex flex-col justify-start items-start gap-8">
        <div className="w-[90%]">
          <h3 className="text-white text-3xl leading-10	">
            <span className="font-bold">Community</span> of over 100,000 People
          </h3>
        </div>
        <div className="border-b-2 border-[#00EAC7] border-solid w-[11%] " >

          </div>
        <div className="w-[70%]">
          <p className="text-[#bccbd6] font-light text-sm">
            Join us and get involved in a number of ongoing educational
            activities run not only by the core team but also by the community
            directly.
          </p>
        </div>
        <div>
          <button className="bg-[#0f3034] text-[#00ccab] btn_class hover:bg-[#1b2b38]">
            Get involved
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movesec;
