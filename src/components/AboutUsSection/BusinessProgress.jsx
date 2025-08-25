import React from "react";

const BusinessProgress = () => {
  return (
    <>
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
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth consequences.
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
                  <h1 className="font-bold text-lg md:text-xl">{item.title}</h1>
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
    </>
  );
};

export default BusinessProgress;
