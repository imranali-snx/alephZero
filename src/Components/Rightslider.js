import React, { Component } from "react";
import Slider from "react-slick";
import icon1 from "../images/IoT.svg";

// const Rightslider = () => {
export default class Rightslider extends Component {

  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      class:'center',
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      vertical: true,
      centerMode: true,
      infinite: true,
      // verticalSwiping: true,
      swipeToSlide: true,
      autoplay: 200,
      speed: 5000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      arrows:false,
      beforeChange: function (currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function (currentSlide) {
        console.log("after change", currentSlide);
      },
    };

  return (
    <div className="flex flex-row w-full h-full  items-center  my-20 px-11 gap-[95px]">
        <div className="flex flex-col justify-start items-start gap-8 w-[40%]">
          <div className="w-[90%]">
            <h3 className="text-white text-3xl leading-10 text-[35px]	">
              Driving <span className="font-bold">Web3 Adoption</span>
            </h3>
          </div>
          <div className="border-b-2 border-[#00EAC7] border-solid w-[11%] " >

          </div>
          <div className="w-[93%]">
            <p className="text-[#bccbd6] font-light text-sm text-[16px]">
            Aleph Zero bridges the gap between scalability, security, developer friendliness, and cost of use.Moreover, the network will boast a native privacy stack to further enable you to build solutions that strike the balance between transparency and privacy.
            </p>
          </div>
          <div>
            <button className="bg-[#0f3034] text-[#00ccab] btn_class hover:bg-[#1b2b38]">
              See What's Possible
            </button>
          </div>
        </div>
        <div className=" w-[50%] h-[85vh] gap-10">
          <Slider {...settings}  >
            <div className="sliderClass">
              <img src={icon1} />
              <h3 className="text-white">IoT</h3>
            </div>
            <div className="sliderClass">
              <img src={icon1} />
              <h3 className="text-white">IoT</h3>
            </div>
            <div className="sliderClass">
              <img src={icon1} />
              <h3 className="text-white">IoT</h3>
            </div>
            <div className="sliderClass">
              <img src={icon1} />
              <h3 className="text-white">IoT</h3>
            </div>
            <div className="sliderClass">
              <img src={icon1} />
              <h3 className="text-white">IoT</h3>
            </div>
            <div className="sliderClass">
              <img src={icon1} />
              <h3 className="text-white">IoT</h3>
            </div>
            <div className="sliderClass">
              <img src={icon1} />
              <h3 className="text-white">IoT</h3>
            </div>
            <div className="sliderClass">
              <img src={icon1} />
              <h3 className="text-white">IoT</h3>
            </div>
            <div className="sliderClass">
              <img src={icon1} />
              <h3 className="text-white">IoT</h3>
            </div>
            <div className="sliderClass">
              <img src={icon1} />
              <h3 className="text-white">IoT</h3>
            </div>
          
            
          </Slider>
        </div>     
    </div>
  );
};
};
// export default Rightslider;
