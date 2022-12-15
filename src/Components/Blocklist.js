import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
const Blocklist = ({ items }) => {
  return (
    <div className="flex flex-col justify-start items-start bg-[#14202a] w-[26%] border-solid border-[#1b2b38] border-2 my-20 container  pt-5 pl-[25px] pb-5 h-1/2 overflow-hidden border_class">
      <div>
        <img src={items.img} />
      </div>
      <div className="flex flex-col justify-start items-start">
        <h3 className="text-white">
          AZERO <span>{items.heading2}</span>
        </h3>
        <div className="w-64">
          <p className="text-white">{items.para}</p>
        </div>
      </div>
      <div className="w-[40%] mt-3 mx-auto">
        <button className="bg-[#0f3034] text-[#00ccab] btn_class flex flex-row justify-center items-center gap-4 relative btn_move">
         <FaExternalLinkAlt/> Go To
        </button>
      </div>
    </div>
  );
};

export default Blocklist;
