import React, { useEffect } from "react";
import fourth from "../images/4.png";
import five from "../images/13.png";
import sixth from "../images/4.png";
import Slider from "react-slick";
import Aos from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";

const Sliders = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1200,
      });
  }, []);
  // const settings = {
  //   infinite: true,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2500,
  //   autoplaySpeed: 2500,
  //   cssEase: "linear",
  //   dots: false,
  //   swipeToSlide: true,
  //   arrows:false,
  //   pauseOnHover: true

  // };
  return (
    <div className="my-3 container mx-auto w-[90%] overflow-hidden" data-aos="fade-up">
      <div className="mx-auto text-center mb-5">
        <h3 className="text-white tracking-widest	">FEATURED IN</h3>
      </div>
      {/* <Marquee pauseOnHover="true" gradientWidth={0} className="flex items-start gap-3 scroll_mar" behavior="scroll" direction="left" scrollamount="12">  */}
      {/* <div className="flex flex-row justify-center items-center gap-4"> */}
        {/* <Slider {...settings} className="mt-8">
          <div>
            <img src={fourth} alt="image" className="h-1/3 w-[60%]" />
          </div>
          <div>
            <img src={five} alt="image" className="h-1/3  w-[60%] " />
          </div>
          <div>
            <img src={sixth} alt="image" className="h-1/3 w-[60%] " />
          </div>

          <div>
            <img src={sixth} alt="image" className="h-1/3 w-[60%] " />
          </div>
          <div>
            <img src={fourth} alt="image" className="h-1/3 w-[60%] " />
          </div>
          <div>
            <img src={fourth} alt="image" className="h-1/3 w-[60%] " />
          </div>

          <div>
            <img src={sixth} alt="image" className="h-1/3 w-[60%] " />
          </div>
          <div>
            <img src={fourth} alt="image" className="h-1/3 w-[60%] " />
          </div>
          <div>
            <img src={fourth} alt="image" className="h-1/3 w-[60%] " />
          </div>
          
        </Slider> */}
      {/* </div> */}
      {/* </Marquee> */}
      <div class="marquee-content" >
        <div class="marquee-item">
          <img className="opac h-full w-full" src={fourth} alt="" />
        </div>
        <div class="marquee-item">
          <img className="opac h-full w-full" src={five} alt="" />
        </div>
        <div class="marquee-item">
          <img className="opac h-full w-full" src={fourth} alt="" />
        </div>
        <div class="marquee-item">
          <img className="opac h-full w-full" src={sixth} alt="" />
        </div>
        <div class="marquee-item">
          <img className="opac h-full w-full" src={fourth} alt="" />
        </div>
        <div class="marquee-item">
          <img className="opac h-full w-full" src={five} alt="" />
        </div>
        <div class="marquee-item">
          <img className="opac h-full w-full" src={sixth} alt="" />
        </div>
        <div class="marquee-item">
          <img className="opac h-full w-full" src={sixth} alt="" />
        </div>
        <div class="marquee-item">
          <img className="opac h-full w-full" src={fourth} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sliders;
