import React from "react";
import Carousel from "./Carousel";

const OurClients = () => {
  return (
    <>
      <div className=" bg-[#F7F8F9] h-full p-5">
        <h1 className="text-center font-bold text-[#262626] md:!text-4xl text-lg ">
          Our Clients
        </h1>
        <Carousel />
      </div>
    </>
  );
};

export default OurClients;
