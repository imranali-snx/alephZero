import React, { useState } from "react";
import imgleftcard from "../images/leftimg.jpg";
import Cardimg from "./Cardimg";

const Cardfirst = () => {
  const [condition, setCondition] = useState(true);
  const [first, setFirst]=useState("fade-left");
  const data = [
    {
      title: "We're Building a new take on Blockchain Infrastructure",
      decript: "WHY ALPHERZERO",
      img: imgleftcard,
    },
  ];
  return (
    <>
      {data.map((items, keys) => {
        return <Cardimg items={items} value={condition} effect={first} />;
      })}
    </>
  );
};

export default Cardfirst;
