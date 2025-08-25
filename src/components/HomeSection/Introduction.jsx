import React from "react";

const Introduction = () => {
  return (
    <section className="md:grid md:grid-cols-2  gap-2    lg:!px-36 px-3 pt-6 lg:pt-28 items-center">
      <div className=" w-full md:mx-6 lg:mx-0 shadow-2xl rounded-2xl overflow-hidden">
        <img
          src="https://stallionsystem.com/wp-content/uploads/2023/08/homepage-image-1024x683-1.jpg"
          alt="Medical Billing"
          className="w-full h-full object-cover"
        />
      </div>

      <div className=" xl:pl-10 md:pl-8 lg:px-0 mt-10 lg:mt-0 flex flex-col md:items-start items-center ">
        <span className="bg-[#239ADF] rounded-full text-white py-1 px-4 italic text-lg  ">
          Introduction
        </span>
        <h1 className="my-3 text-[#00223A] font-extrabold font-['Roboto',sans-serif] text-2xl lg:text-4xl text-center md:!text-left">
          Medical Billing Services
        </h1>
        <p className="text-black text-base md:text-md leading-relaxed text-center md:!text-left ">
          Our end-to-end medical billing services provide maximum reimbursement
          for our clients while reducing overall costs. We don’t just monitor
          your account — we actively manage it.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
