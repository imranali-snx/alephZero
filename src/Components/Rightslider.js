import React, { useEffect } from "react";
import Slider from "react-slick";
import icon1 from "../images/IoT.svg";
import Aos from "aos";
import "aos/dist/aos.css";


const Rightslider = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1200,
      });
  }, []);
  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: 200,
    speed: 300,
    className: "center",
    cssEase: "linear",
    vertical: true,
    dots: false,
    infinite: true,
    swipeToSlide: true,
    arrows: false,
    autoplay: true,
  };
  return (
    <div className="flex flex-row w-full h-full  items-center  my-20 px-11 gap-[95px]">
      <div className="flex flex-col justify-center items-start gap-8 w-[40%] my-auto" data-aos="fade-right">
        <div className="w-[90%]">
          <h3 className="text-white text-3xl leading-10 text-[35px]	">
            Driving <span className="font-bold">Web3 Adoption</span>
          </h3>
        </div>
        <div className="border-b-2 border-[#00EAC7] border-solid w-[11%] "></div>
        <div className="w-[93%]">
          <p className="text-[#bccbd6] font-light text-sm text-[16px]">
            Aleph Zero bridges the gap between scalability, security, developer
            friendliness, and cost of use.Moreover, the network will boast a
            native privacy stack to further enable you to build solutions that
            strike the balance between transparency and privacy.
          </p>
        </div>
        <div>
          <button className="bg-[#0f3034] text-[#00ccab] btn_class hover:bg-[#0e4445] btn_header_slider hover:text-[#00ccab]">
            See What's Possible
          </button>
        </div>
      </div>

      <div className=" w-[50%] h-[85vh] gap-10 ml-[55px]" data-aos="fade-left">
        <Slider {...settings}>
          <div className="!flex flex-row justify-center items-center gap-[5px]">
            <div className="h-[115px] w-[10%] border_left"></div>
            <div className="sliderClass">
              <img src={icon1} />
              <h3 className="text-white">IoT</h3>
            </div>
            <div className="h-[115px] w-[10%] border_right"></div>
          </div>
          <div className="!flex flex-row justify-center items-center gap-[5px]">
            <div className="h-[115px] w-[10%] border_left"></div>
            <div className="sliderClass">
              <img src={icon1} />
              <h3 className="text-white">IoT</h3>
            </div>
            <div className="h-[115px] w-[10%] border_right"></div>
          </div>
          <div className="!flex flex-row justify-center items-center gap-[5px]">
            <div className="h-[115px] w-[10%] border_left"></div>
            <div className="sliderClass">
              <img src={icon1} />
              <h3 className="text-white">IoT</h3>
            </div>
            <div className="h-[115px] w-[10%] border_right"></div>
          </div>
          <div className="!flex flex-row justify-center items-center gap-[5px]">
            <div className="h-[115px] w-[10%] border_left"></div>
            <div className="sliderClass">
              <img src={icon1} />
              <h3 className="text-white">IoT</h3>
            </div>
            <div className="h-[115px] w-[10%] border_right"></div>
          </div>
          <div className="!flex flex-row justify-center items-center gap-[5px]">
            <div className="h-[115px] w-[10%] border_left"></div>
            <div className="sliderClass">
              <img src={icon1} />
              <h3 className="text-white">IoT</h3>
            </div>
            <div className="h-[115px] w-[10%] border_right"></div>
          </div>
          <div className="!flex flex-row justify-center items-center gap-[5px]">
            <div className="h-[115px] w-[10%] border_left"></div>
            <div className="sliderClass">
              <img src={icon1} />
              <h3 className="text-white">IoT</h3>
            </div>
            <div className="h-[115px] w-[10%] border_right"></div>
          </div>
          <div className="!flex flex-row justify-center items-center gap-[5px]">
            <div className="h-[115px] w-[10%] border_left"></div>
            <div className="sliderClass">
              <img src={icon1} />
              <h3 className="text-white">IoT</h3>
            </div>
            <div className="h-[115px] w-[10%] border_right"></div>
          </div>
          <div className="!flex flex-row justify-center items-center gap-[5px]">
            <div className="h-[115px] w-[10%] border_left"></div>
            <div className="sliderClass">
              <img src={icon1} />
              <h3 className="text-white">IoT</h3>
            </div>
            <div className="h-[115px] w-[10%] border_right"></div>
          </div>
          <div className="!flex flex-row justify-center items-center gap-[5px]">
            <div className="h-[115px] w-[10%] border_left"></div>
            <div className="sliderClass">
              <img src={icon1} />
              <h3 className="text-white">IoT</h3>
            </div>
            <div className="h-[115px] w-[10%] border_right"></div>
          </div>
          <div className="!flex flex-row justify-center items-center gap-[5px]">
            <div className="h-[115px] w-[10%] border_left"></div>
            <div className="sliderClass">
              <img src={icon1} />
              <h3 className="text-white">IoT</h3>
            </div>
            <div className="h-[115px] w-[10%] border_right"></div>
          </div>
         
        </Slider>
      </div>
    </div>
  );
};

export default Rightslider;
