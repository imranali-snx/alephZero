import React, { useState, useEffect } from "react";
import "../App.css";
import logo from "../images/logo.jpeg";
import { HiArrowNarrowRight } from "react-icons/hi";
import mainLogo from "../images/logo.svg";

import { BsFillPersonPlusFill } from "react-icons/bs";
import Topheader from "./Topheader";
const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState();
  console.log(visible);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    console.log(currentScrollPos);

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else if (currentScrollPos < prevScrollPos) {
      setVisible(true);
    }
    setPrevScrollPos(currentScrollPos);
    console.log(visible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      {/* flex flex-row h-12 */}
      <div className={visible === false ? "hidden":"flex flex-row h-[37px] "}>
        <div className="bg-white w-1/5 flex"></div>

        <div className="w-3/5	 bg-white">
          <div className="flex items-center justify-center  gap-2 mt-[8px]">
            <div>
              <img src={logo} className="w-10 h-9" />
            </div>
            <p className="text-[1rem] text-[#5A6167]">
              <strong className="text-black">Community validators</strong> are
              live on the mainnet!
            </p>
            <div className="ml-5 pl-5 border-solid border-l-2 border-[#00ccab] flex items-center justify-center gap-1 hover:text-[#27e2c9] hover:cursor-pointer ">
              <p>Learn more </p>
              <HiArrowNarrowRight className="relative top-[2px] ml-1 " />
            </div>
          </div>

          <div className="design bg-white"></div>
        </div>

        <div className="bg-white w-1/5 flex"></div>
      </div>

      <div
        className={
          prevScrollPos == 0
            ? "relative top-5 w-full flex flex-row justify-center items-center container mx-auto  h-11  px-[26px]  bg-[#111B24]  "
            : visible===true?" sticky top-0 w-full flex flex-row justify-center items-center container mx-auto  h-14  px-[26px] bg-[#111B24] z-[1]"
            : "hidden"
        }
      >

      {/* <div className="w-full flex flex-row justify-center items-center container mx-auto relative h-11 top-5 px-[26px]"> */}
        <div className="w-1/5">
          <img src={mainLogo} className="w-11/12	" />
        </div>

        <div className="w-3/5 flex flex-row justify-center items-center">
          <Topheader />
        </div>

        <div className="w-1/5 ">
          <div className={visible===true?"bg-[#00EAC7] flex flex-row justify-center items-center gap-2 w-[11rem] h-[45px] absolute  top-0 right-8 rounded-full hover:bg-[#7FF4E3] btn_header mt-1":"bg-[#00EAC7] flex flex-row justify-center items-center gap-2 w-[11rem] h-[45px] absolute  top-0 right-8 rounded-full hover:bg-[#7FF4E3] btn_header"}>
            <BsFillPersonPlusFill />
            <button className=""> STACK AZERO</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
