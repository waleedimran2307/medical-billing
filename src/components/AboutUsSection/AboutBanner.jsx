import React from "react";

const AboutBanner = () => {
  return (
    <div className="container-fluid relative bg-[url('https://us.medical.canon/resources/img/about/canon-life-banner.jpg')] bg-no-repeat bg-cover bg-center md:!bg-top  mt-2 ">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="lg:w-1/2 h-auto lg:py-[200px] text-justify xl:pl-[170px] pl-[30px] pt-[170px] min-w-auto  min-h-[390px]">
        <h1 className="text-[#00223A] lg:text-3xl text-xl font-bold">
          About Us
        </h1>
        <p className=" text-white  pt-3 sm:text-lg text-base ">
          Maximize collections, minimize operating cost
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;
