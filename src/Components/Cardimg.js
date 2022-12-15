import React from "react";
import { Card } from "antd";
import leftimg from "../images/featured-panel-features.svg";

const Cardimg = ({ items, value }) => {
  const { Meta } = Card;
  return (
    <div
      className={
        value === true
          ? "backimg container mx-auto flex justify-end px-6 backimg my-20"
          : value === false
          ? "backimg2 container mx-auto flex justify-end px-6 backimg my-20"
          : "backimg3 container mx-auto flex justify-start px-6 backimg my-20"
      }
    >
      <Card
        hoverable
        style={{
          display: "flex",
        }}
        cover={
          <div className="h-[31.3vh] imagezoom">
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
        <div>
          <Meta description={items?.decript} />
        </div>
      </Card>
    </div>
  );
};
export default Cardimg;
