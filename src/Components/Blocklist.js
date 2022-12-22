import React, { useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import skeletonimg from "../images/backsvg.svg";
import Aos from "aos";
import "aos/dist/aos.css";
const Blocklist = ({ items }) => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1200,
      });
  }, []);
  return (
    <div className="flex flex-col justify-start items-start bg-[#14202a] w-[26%] border-solid border-[#1b2b38] border-2 my-20 container  pt-5 pl-[25px] pb-5 h-1/2 overflow-hidden border_class" data-aos="zoom-in">
      <div className="back_img">
        <img src={items.img} />
      </div>
      <div className="flex flex-col justify-start items-start">
        <h3 className="text-white headingLine">
          AZERO <span>{items.heading2}</span>
        </h3>
        <div className="w-64">
          <p className="text-white">{items.para}</p>
        </div>
      </div>
      <div className="w-[40%] mt-3 mx-auto">
        <button className="bg-[#0f3034] text-[#00ccab] btn_classBlock flex flex-row justify-center items-center gap-4 relative btn_move hover:bg-[#0e4445]  hover:text-[#00ccab]">
         <FaExternalLinkAlt/> Go To
        </button>
      </div>
    </div>
  );
};

export default Blocklist;
