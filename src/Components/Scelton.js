import React, { useState } from "react";
import "./Scelton.css";

import { Skeleton, Space, Switch } from "antd";
import one from "../images/scrollimg1.svg";


function Scelton() {
  const [active, setActive] = useState(false);
  const [block, setBlock] = useState(false);
  const [size, setSize] = useState("default");
  const [buttonShape, setButtonShape] = useState("default");
  const [avatarShape, setAvatarShape] = useState("circle");
  setTimeout(() => {
    setLoading(!loading);
  }, 2000);

  const [loading, setLoading] = useState(false);
  

  return (
    <>
      <div className="scelton-main">
        <div className="scelton-left">
          {!loading ? (
            <div className="vertical-slider">
              <div className="down">
                <div className="half-item">
                <Space>
                      <div className="skelton-top">
                        <Skeleton
                          className="scelton"
                          
                          paragraph={{
                            rows: 0,
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
                <div className="down-item">
                  <div className="slider-card">
                    <div className="slider-card1">
                      <div>
                        <img src={one} alt="image1" />
                      </div>
                      <div>
                        <p>Interlock</p>
                      </div>
                    </div>
                    <div className="slider-card2">
                      <p className="slider-card2-para">
                        Flidy Technologies is an African crypto, blockchain, Web
                        3.0, and meta verse incubator for startups of the future
                      </p>
                    </div>
                    <div className="slider-card3">
                      <p>wallet</p>
                    </div>
                  </div>
                </div>
                <div className="down-item">
                  <div className="slider-card">
                    <div className="slider-card1">
                      <div>
                        <img src={one} alt="image1" />
                      </div>
                      <div>
                        <p>Interlock</p>
                      </div>
                    </div>
                    <div className="slider-card2">
                      <p className="slider-card2-para">
                        Flidy Technologies is an African crypto, blockchain, Web
                        3.0, and meta verse incubator for startups of the future
                      </p>
                    </div>
                    <div className="slider-card3">
                      <p>wallet</p>
                    </div>
                  </div>
                </div>
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
                </div>
                
              </div>
              <div className="up">
              <div className="up-item">
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
                </div>

                <div className="up-item">
                  <div className="slider-card">
                    <div className="slider-card1">
                      <div>
                        <img src={one} alt="image1" />
                      </div>
                      <div>
                        <p>Interlock</p>
                      </div>
                    </div>
                    <div className="slider-card2">
                      <p className="slider-card2-para">
                        Flidy Technologies is an African crypto, blockchain, Web
                        3.0, and meta verse incubator for startups of the future
                      </p>
                    </div>
                    <div className="slider-card3">
                      <p>wallet</p>
                    </div>
                  </div>
                </div>

                <div className="up-item">
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
                </div>
                
              </div>
            </div>
          ) : (
          <div className="scelton-top-bottom">
            <div className="slider-scelton-main">
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
                </div>
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
                </div>
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
                </div>
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
                </div>
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
                </div>
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
                </div>
            </div>
            <div className="slider-scelton-main2">
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
                </div>
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
                </div>
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
                </div>
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
                </div>
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
                </div>
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
                </div>
            </div>
          </div>
          )}
        </div>

        <div className="scelton-right" data-aos="fade-left">
          <div>
            <p className="scelton-right-title">
              Applications
              <span className="left-title2"> Under Development </span>
            </p>
          </div>
          <div className="scelton-right-divider"></div>
          <div>
            <p className="scelton-right-para">
              With the mainnet launch, Aleph Zero has seen a notable initial
              adoption within the developer community. Our flexible environment
              will be familiar for builders who are already accustomed with Rust
              and the Substrate stack.
            </p>
          </div>
          <div>
            <button className="scelton-right-btn">Explore the Ecosystem</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Scelton;
