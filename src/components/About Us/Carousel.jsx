import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="text-[#7A7A7A] p-4  mt-12 italic">
        <p className="text-center  mb-10 md:!text-xl  font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <div className="flex items-center justify-center pt-2">
          <img
            src="https://stallionsystem.com/wp-content/plugins/elementor/assets/images/placeholder.png"
            alt="John Doe"
            className="w-[50px] h-[50px] rounded-full"
          />
          <div className="flex flex-col items-center text-sm">
            <p className="ml-5 font-bold text-lg text-[#7A7A7A]">John Doe</p>
            <span>CEO</span>
          </div>
        </div>
      </div>
      <div className="text-[#7A7A7A] p-4  mt-12 italic">
        <p className="text-center mb-10 md:!text-xl  font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <div className="flex items-center justify-center pt-2">
          <img
            src="https://stallionsystem.com/wp-content/plugins/elementor/assets/images/placeholder.png"
            alt="John Doe"
            className="w-[50px] h-[50px] rounded-full"
          />
          <div className="flex flex-col items-center text-sm">
            <p className="ml-5 font-bold text-lg text-[#7A7A7A]">John Doe</p>
            <span>CEO</span>
          </div>
        </div>
      </div>
      <div className="text-[#7A7A7A] p-4  mt-12 italic">
        <p className="text-center mb-10 md:!text-xl  font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <div className="flex items-center justify-center pt-2">
          <img
            src="https://stallionsystem.com/wp-content/plugins/elementor/assets/images/placeholder.png"
            alt="John Doe"
            className="w-[50px] h-[50px] rounded-full"
          />
          <div className="flex flex-col items-center text-sm">
            <p className="ml-5 font-bold text-lg text-[#7A7A7A]">John Doe</p>
            <span>CEO</span>
          </div>
        </div>
      </div>
    </Slider>
  );
};
export default Carousel;
