import React from "react";
import AboutBanner from "./AboutBanner";
import { MdCheck } from "react-icons/md";
import Carousel from "./Carousel";

const AboutUs = () => {
  return (
    <>
      <AboutBanner />
      <div className="lg:!px-40 px-8 mb-12 flex flex-col   gap-y-28">
        <div className="flex flex-col gap-y-8 ">
          <div className="lg:flex lg:flex-row pt-12 block gap-6">
            <div className="lg:w-1/2 w-full">
              <p className="text-sm md:text-base">BUSINESS PROGRESS</p>
              <h1 className="font-bold text-2xl md:text-3xl lg:pl-2 leading-snug">
                CREATIVE STRATEGY FOR GET SUCCESS
              </h1>
            </div>
            <div className="lg:w-1/2 w-full lg:px-3 pt-3 text-sm md:text-base lg:mt-2">
              <p>
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account of the system, and expound the actual teachings
                of the great explorer of the truth consequences.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-stretch">
            <div className="flex-1 md:space-y-12 space-y-8">
              {[
                { num: "01", title: "BUSINESS SOLUTIONS" },
                { num: "02", title: "MARKET STRATEGY" },
                { num: "03", title: "CREATIVE DESIGN" },
              ].map((item, idx) => (
                <div key={idx} className="relative flex items-start">
                  <span className="text-[#F5F5F5] text-8xl font-medium leading-none">
                    {item.num}
                  </span>
                  <div className="-ml-7 mt-11 ">
                    <h1 className="font-bold text-lg md:text-xl">
                      {item.title}
                    </h1>
                    <p className="mt-2 text-sm md:text-base font-normal leading-relaxed">
                      Aliqm lorem ante, dapibus in, viverra quis, feugiat.
                      Phasellus aut ms varius laoreet strtrum aenean imperdiet.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 flex md:mt-16">
              <img
                decoding="async"
                src="https://stallionsystem.com/wp-content/uploads/2023/08/about-us-success-img-2.jpg"
                alt="Business Success"
                className="w-full object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>

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
                Aliqm lorem ante, dapibus in, viverra quis, feugiat Phasellus
                aut ms varius laoreet strtrum aenean imperdiet. Etiam ult augue
                dapibus in, viverra quis tiam ult augue.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[url('https://stallionsystem.com/wp-content/uploads/2023/08/section-bg-img21.png')] bg-no-repeat bg-cover  bg-[#318BBE] py-14  px-2 text-white text-xl flex justify-center  font-bold">
          <h1 className=" text-sm sm:text-lg leading-snug max-w-5xl mx-auto">
            A Digital Agency That Helps TO Succeed IN YOUR BUSINESS
          </h1>
        </div>

        <div className=" flex md:flex-row  flex-col lg:!gap-x-2 gap-x-3 gap-y-2 items-stretch md:justify-center ">
          <div className="md:flex md:flex-col md:justify-center lg:!max-w-md md:!max-w-sm relative xl:left-4 block  ">
            <p className="md:text-xl text-sm  uppercase  ">BEST PROGRESS</p>
            <h1 className="md:text-5xl text-3xl font-medium mt-2 uppercase md:!ml-0 ml-1">
              work process
            </h1>
            <p className="text-justify mt-3  text-[#7A7A7A] md:text-base text-sm  ">
              Aliqm lorem ante, dapibus in, viverra quis, feugiat Phasellus aut
              ms varius laoreet srtrum aenean imperdiet. Etiam ult augue dapibus
              in, viverra quis tiam ult augue.
            </p>
            <ul className="mt-3 ml-1   text-sm">
              <li className="flex items-center">
                <MdCheck className="text-3xl text-[#0693e3] mr-1" />
                <p>Lorem ipsum dolor sit amet</p>
              </li>
              <li className="flex items-center mt-1">
                <MdCheck className="text-3xl text-[#0693e3] mr-1" />
                <p>Lorem ipsum dolor sit amet</p>
              </li>
              <li className="flex items-center mt-1">
                <MdCheck className="text-3xl text-[#0693e3] mr-1" />
                <p>Lorem ipsum dolor sit amet</p>
              </li>
            </ul>
          </div>

          <div className="flex items-stretch  md:!max-w-2xl  ">
            <img
              src="https://stallionsystem.com/wp-content/uploads/2023/08/Laptop-11.png"
              className="attachment-full size-full  h-full w-full  object-cover  items-stretch"
              alt="No image"
            />
          </div>
        </div>

        <div className=" bg-[#F7F8F9] h-full p-5">
          <h1 className="text-center font-bold text-[#262626] md:!text-4xl text-lg ">
            Our Clients
          </h1>
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
