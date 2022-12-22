import React, { useEffect, useState } from "react";
import { Skeleton, Space, Switch } from "antd";
import interlock from "../images/interlock.png";
const LeftSlider = () => {
  const [active, setActive] = useState(false);
  const [block, setBlock] = useState(false);
  const [size, setSize] = useState("default");
  const [buttonShape, setButtonShape] = useState("default");
  const [avatarShape, setAvatarShape] = useState("circle");
  return (
    <>
      <div className="down-item">
        <div className="slider-scelton">
          <Space>
            <div className="skelton-top">
              <Skeleton
                className="scelton"
                avatar
                paragraph={{
                  rows: 4,
                }}
              />
            </div>

            <div className="skelton-btn">
              <Skeleton.Button
                active={active}
                size={size}
                shape={buttonShape}
                block={block}
              />
              <Skeleton.Button
                active={active}
                size={size}
                shape={buttonShape}
                block={block}
              />
              <Skeleton.Button
                active={active}
                size={size}
                shape={buttonShape}
                block={block}
              />
            </div>
            <div className="skelton-btn">
              <Skeleton.Button
                active={active}
                size={size}
                shape={buttonShape}
                block={block}
              />
              <Skeleton.Button
                active={active}
                size={size}
                shape={buttonShape}
                block={block}
              />
              <Skeleton.Button
                active={active}
                size={size}
                shape={buttonShape}
                block={block}
              />
            </div>
          </Space>
        </div>
        <div className=" slider_shape">
        <div className="flex flex-row gap-5 items-center justify-start">
          <img src={interlock} width="50" height="50" />
          <h3 className="text-white">interlock</h3>
        </div>
        <div className="mt-5">
          <p className="text-white">
            Interlock is a decentralized security platform that delivers
            Web3-centered solutions to combat cybercrime.
          </p>
        </div>
        <div className="mt-16 bg-[#16232e] borders_class">
          <p className="text-[#bccbd6]">Defi and Security</p>
        </div>
      </div>
      </div>
   
    </>
  );
};

export default LeftSlider;
