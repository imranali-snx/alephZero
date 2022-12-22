import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { SiApple } from "react-icons/si";
import { SiCloudera } from "react-icons/si";
import { SiGoogle } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiLogmein } from "react-icons/si";
import { SiSnapchat } from "react-icons/si";
import { SiTeradata } from "react-icons/si";
import { Checkbox } from "antd";
import leftimg from "../images/leftimgfooter.svg";
import rightimg from "../images/rightimgfooter.svg";

const Footer = () => {
  const data = [
    {
      heading: "Learn",
      link: [
        "Why aleph zero",
        "application",
        "Utility and Economics",
        "Carbon Footprint",
        "Faq",
        "White Papers",
        "Blog",
      ],
    },
    {
      heading: "Use",
      link: [
        "Why aleph zero",
        "application",
        "Utility and Economics",
        "Carbon Footprint",
      ],
    },
    {
      heading: "Explore",
      link: [
        "Why aleph zero",
        "application",
        "Utility and Economics",
        "Carbon Footprint",
        "Faq",
      ],
    },
    {
      heading: "Meet US",
      link: ["Why aleph zero", "application", "Utility and Economics"],
    },
  ];
  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  const onSearch = (value: string) => console.log(value);

  return (
    <>
      <div className="grid grid-cols-6 gap-40  container mx-auto px-11 mt-60">
        <div className="col-span-2 footer_left">
          <h3 className="text-white pl-4 text-3xl border-solid border-l-2 border-[#00EAC7]	">
            Be <span className="font-bold">Future Ready</span>
          </h3>

          <p className="text-white	">
            Get the latest from the Aleph Zero ecosystem and engineering
            updates, straight to your inbox.
          </p>
          <div>
            <Space direction="vertical">
              <Search
                placeholder="Your Email"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
              />
            </Space>
          </div>
          <p className="text-white">
            <Checkbox defaultChecked={false} className="mr-5" />I consent to
            receive commercial information in the form of a newsletter sent to
            the e-mail address provided by the Aleph Zero Foundation with
            registered seat in Bergliweg 15, 6300 Zug. Providing consent is
            voluntary. Consent may be revoked at any time.
          </p>
        </div>

        <div className="flex flex-row col-span-4 gap-10">
          {data.map((items, keys) => {
            return (
              <div className="flex flex-col ">
                <h3 className="text-white mb-5">{items?.heading}</h3>

                {items.link.map((item) => {
                  return (
                    <ul>
                      <li className="text-white leading-10 hover:text-[#00EAC7] cursor-pointer	">
                        {item}
                      </li>
                    </ul>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="flex flex-row justify-start pl-11
    items-center gap-5 w-full my-5"
      >
        <SiApple className="icon_color" />
        <SiCloudera className="icon_color" />
        <SiGoogle className="icon_color" />
        <SiInstagram className="icon_color" />
        <SiLinkedin className="icon_color" />
        <SiLogmein className="icon_color" />
        <SiSnapchat className="icon_color" />
        <SiTeradata className="icon_color" />
      </div>
      <div className=" px-10 container grid grid-cols-2 gap-4 my-10">
        <div className=" border-color flex flex-col   h-[35vh]   border-solid border-[#242A30]">
          <div className="flex flex-row justify-center items-center">
            <div className="w-[85%] flex justify-center items-center">
              <img src={leftimg} />
            </div>
            <div className="flex flex-col justify-start items-start gap-1 mt-1">
              <h3 className="text-[#9CABB5]">Aleph Zero Foundation</h3>
              <p className="text-[#9CABB5]">
                The Aleph Zero Foundation is responsible for overseeing the
                development of Aleph Zero protocol. The Foundation is also the
                issuer of the AZERO coin.
              </p>
            </div>
          </div>
          <div className="border-color border-solid border-[#242A30] mx-auto my-5 w-[90%]"></div>
          <div className="flex justify-between mx-8">
            <p className="text-[#9CABB5]">
              Bergliweg 15, 6300 Zug, Switzerland
            </p>
            <a className="text-[#9CABB5]">hello@alephzero.org</a>
          </div>
        </div>
        <div className=" border-color flex flex-col  h-[35vh]  border-solid border-[#242A30]">
          <div className="flex flex-row justify-center items-center">
            <div className="w-[85%] flex justify-center items-center">
              <img src={rightimg} />
            </div>
            <div className="flex flex-col justify-start items-start gap-1 mt-1">
              <h3 className="text-[#9CABB5]"> Aleph Zero Foundation</h3>
              <p className="text-[#9CABB5]">
                The Aleph Zero Foundation is responsible for overseeing the
                development of Aleph Zero protocol. The Foundation is also the
                issuer of the AZERO coin.
              </p>
            </div>
          </div>
          <div className="border-color border-solid border-[#242A30] mx-auto my-5 w-[90%]"></div>
          <div className="flex justify-between mx-8">
            <p className="text-[#9CABB5]">
              Bergliweg 15, 6300 Zug, Switzerland
            </p>
            <div className="flex flex-col">
              <a className="text-[#9CABB5]">hello@alephzero.org</a>
              <a className="text-[#9CABB5]">hello@alephzero.org</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-auto border-solid border-t-2 border-[#242A30] w-[94%]">
        <div className="my-7">
          <p className="text-[#BCCBD6] font-bold">
            Aleph Zero Foundation © 2018-2022
          </p>
        </div>
        <div className="flex gap-4 my-7 ">
          <a className="text-[#BCCBD6] font-bold">Privacy Policy</a>
          <a className="text-[#BCCBD6] font-bold">Cookies</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
