import React from "react";
import first from "../images/1.png";
import second from "../images/10.png";
import fourth from "../images/4.png";
import five from "../images/13.png";
import sixth from "../images/14.png";

import Marquee from "react-fast-marquee";

const Slider = () => {
  return (
    <div className="my-3 container mx-auto ">
      <div className="mx-auto text-center">
        <h3 className="text-white tracking-widest	">FEATURED IN</h3>
      </div>
      <Marquee pauseOnHover="true" gradientWidth={0}>
        <div className="flex flex-row justify-center items-center gap-3 ">
          <img src={first} alt="image" className="h-1/3 w-1/3" />
          <img src={second} alt="image" className="h-1/3 w-1/3" />
          <img src={fourth} alt="image" className="h-1/3 w-1/3" />
          <img src={five} alt="image" className="h-1/3 w-1/3" />
          <img src={sixth} alt="image" className="h-1/3 w-1/3" />
        </div>
      </Marquee>
    </div>
  );
};

export default Slider;
