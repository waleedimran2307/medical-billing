import React from "react";
import { MdPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const SideContact = () => {
  return (
    <div className="sm:flex flex-col gap-2 text-white fixed right-0 z-40 hidden">
      <div className="flex items-center bg-[#104EB4] rounded-l-full py-2 transition-transform duration-500 ease-in translate-x-32  hover:translate-x-1">
        <div className="flex items-center gap-3 max-w-min px-3">
          <span className="bg-white rounded-full text-black p-2">
            <MdPhone className="text-3xl" />
          </span>
          <a href="#">03437122367</a>
        </div>
      </div>

      <div className="flex items-center bg-[#104EB4] rounded-l-full py-2 transition-transform duration-500 ease-in translate-x-32  hover:translate-x-7">
        <div className="flex items-center gap-3 max-w-min px-3">
          <span className="bg-white rounded-full text-black p-2">
            <MdOutlineEmail className="text-3xl" />
          </span>
          <a href="#" className="pl-3">
            Email
          </a>
        </div>
      </div>

      <div className="flex items-center bg-[#104EB4] rounded-l-full py-2 transition-transform duration-500 ease-in translate-x-32  hover:translate-x-2">
        <div className="flex items-center gap-3 max-w-min px-3">
          <span className="bg-white rounded-full text-black p-2">
            <FaWhatsapp className="text-3xl" />
          </span>
          <a href="#" className="text-lg">
            Whatsapp
          </a>
        </div>
      </div>

      <div className="flex items-center bg-[#104EB4] rounded-l-full py-2 transition-transform duration-500 ease-in translate-x-32  hover:translate-x-2">
        <div className="flex items-center gap-3 max-w-min px-3">
          <span className="bg-white rounded-full text-black p-2">
            <FaWhatsapp className="text-3xl" />
          </span>
          <a href="#" className="text-lg">
            Wechat
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideContact;
