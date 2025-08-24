import React from "react";

const Banner = () => {
  return (
    <div className="container-fluid relative bg-[url('https://us.medical.canon/resources/img/about/canon-life-banner.jpg')] bg-no-repeat bg-cover bg-center md:!bg-top mt-2 mb-4 xl:min-h-[621px]">
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative lg:w-1/2 h-auto lg:py-[200px] sm:text-justify xl:pl-[170px] pl-[20px] sm:pl-[30px] py-[90px] sm:py-[100px] md:py-[140px] min-h-[250px] sm:min-h-[320px]">
        <h1 className="text-[#00223A] lg:text-3xl sm:text-xl text-md font-bold">
          MANAGED BILLING SERVICES
        </h1>
        <p className="text-white pt-3 lg:text-base sm:text-lg  text-sm">
          Maximize collections, minimize operating cost
        </p>
        <button
          type="button"
          className="bg-[#239ADF] text-white sm:!mt-4 mt-2 px-5 py-2 text-sm sm:text-lg rounded"
        >
          Request Demo
        </button>
      </div>
    </div>
  );
};

export default Banner;
