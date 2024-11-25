import React from "react";
import Slider from "react-slick";
// import Stars from "./Stars";
import Logos from "./Logos";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
        <div
        className=""
        style={{ width: "1100px", margin: "auto", padding: "" }}
        >

        <Slider {...settings}>
            <div className="flex ">
                <Logos/>
            </div>
            <div className="flex">
                <Logos/>
            </div>
        </Slider>
        </div>
    </div>
  );
};

export default Carousel;
