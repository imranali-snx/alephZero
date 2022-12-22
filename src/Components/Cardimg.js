import React, { useEffect } from "react";
import { Card } from "antd";
import { FaLongArrowAltRight } from "react-icons/fa";
import leftimg from "../images/featured-panel-features.svg";
import Aos from "aos";
import "aos/dist/aos.css";
const Cardimg = ({ items, value, effect }) => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1200,
    });
  }, []);
  const { Meta } = Card;
  return (
    <div
      className={
        value === true
          ? "backimg container mx-auto flex justify-end px-6 backimg my-20 "
          : value === false
          ? "backimg2 container mx-auto flex justify-end px-6 backimg my-20 "
          : "backimg3 container mx-auto flex justify-start px-6 backimg my-20 "
      }
    >
      <Card
        className="div_section"
        data-aos={effect}
        hoverable
        style={{
          display: "flex",
        }}
        cover={
          <div className="h-[32vh] imagezoom">
            <img
              alt="example"
              src={items?.img}
              className="img-hover-zoom--slowmo h-[100%]"
            />
          </div>
        }
      >
        <div className="flex flex-row moveable">
          <Meta title={items?.title} />
        </div>
        <div className="flex flex-row justify-center items-center">
          <Meta description={items?.decript}  />
        </div>
        {/* <div>
          <Meta avatar={<FaLongArrowAltRight className="text-[#00ccab] w-[39px] h-[24px] hover:text-[#00eac7]" />}/>
        </div> */}
      </Card>
    </div>
  );
};
export default Cardimg;
