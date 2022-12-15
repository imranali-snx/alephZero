import React from "react";
import "../App.css";
import logo from "../images/logo.jpeg";
import { HiArrowNarrowRight } from "react-icons/hi";
import mainLogo from "../images/logo.svg";

import { BsFillPersonPlusFill } from "react-icons/bs";
import Topheader from "./Topheader";
const Header = () => {
  return (
    <>
      <div className="flex flex-row h-8 ">
        <div className="bg-white w-1/5 flex"></div>

        <div className="w-3/5	 bg-white">
          <div className="flex items-center justify-center  gap-2 my-1  ">
            <div>
              <img src={logo} className="w-10 h-9" />
            </div>
            <p>Mainnet validators are coming to Aleph Zero in December, 2022</p>
            <div className="ml-5 pl-5 border-solid border-l-2 border-[#00ccab] flex items-center justify-center gap-1">
              <p>Learn more </p>
              <HiArrowNarrowRight className="relative top-[2px] ml-1" />
            </div>
          </div>

          <div className="design bg-white"></div>
        </div>

        <div className="bg-white w-1/5 flex"></div>
      </div>

      <div className="w-full flex flex-row justify-center items-center container mx-auto relative h-11 top-5 px-[26px]">
        <div className="w-1/5">
          <img src={mainLogo} className="w-11/12	" />
        </div>

        <div className="w-3/5 flex flex-row justify-center items-center">
          <Topheader />
        </div>

        <div className="w-1/5 ">
          <div className="bg-[#7ff4e3] flex flex-row justify-center items-center gap-2 w-36 h-11 absolute  top-0 right-8 ">
            <BsFillPersonPlusFill />
            <button className=""> STACK AZERO</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
