import React from "react";

const Feature = () => {
  const data = [
    {
      heading: "0.9 sec",
      para: "Time to Finality",
    },
    {
      heading: "0.0003 AZERO",
      para: "Averge Cost Per Transaction",
    },
    {
      heading: "~318,5 M",
      para: "Total Insurrence",
    },
    {
      heading: "~34 M",
      para: "Finalize Blocks",
    },
    {
      heading: "64.3 %",
      para: "Supply Stack",
    },
  ];
  return (
    <div className="flex flex-row justify-evenly items-center my-32 text-center ">
      {data.map((items) => {
        return (
          <div className="flex flex-col justify-center items-center gap-7 text-center">
            <div className="flex text-center">
              <h4 className="text-white font-[700] text-2xl text-center">
                {items?.heading}
              </h4>
            </div>
            <div className=" border-b-2 border-[#00eac7] border-solid w-[55px] "></div>
            <div className="text-center flex">
              <p className="text-[#bccbd6] text-center ">{items?.para}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feature;
