import React from "react";

const BetterIdeas = () => {
  return (
    <>
      <div className="w-full ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-6 md:!items-end items-center">
          <div className="flex  gap-x-3 md:col-span-2 flex-row lg:gap-3 w-full">
            <div className="w-full sm:w-1/2 md:h-1/2 md:translate-y-12">
              <img
                src="https://stallionsystem.com/wp-content/uploads/2023/08/about-us-img-2-2.jpg"
                alt="About Us 1"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="w-full sm:w-1/2 h-full">
              <img
                src="https://stallionsystem.com/wp-content/uploads/2023/08/about-us-img-21-22.jpg"
                alt="About Us 2"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="text-black  w-full text-center  md:!text-left">
            <p className="uppercase tracking-wide text-sm md:text-base ">
              WHAT WE DO
            </p>
            <h1 className="font-bold md:!mt-2 mt-1 text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-snug">
              Better ideas for future
            </h1>
            <p className="text-[#7A7A7A] md:!mt-3 mt-1 text-sm md:text-base leading-relaxed  text-center  md:!text-left">
              Aliqm lorem ante, dapibus in, viverra quis, feugiat Phasellus aut
              ms varius laoreet strtrum aenean imperdiet. Etiam ult augue
              dapibus in, viverra quis tiam ult augue.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BetterIdeas;
