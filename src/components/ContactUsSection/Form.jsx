/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { MdPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { MdCheck } from "react-icons/md";

const Form = () => {
  const [displayMessage, setDisplayMessage] = useState(false);
  const [isError, setIsError] = useState({
    name: false,
    email: false,
    phoneNumber: false,
    subject: false,
  });

  const name = useRef();
  const email = useRef();
  const phoneNumber = useRef();
  const subject = useRef();
  const message = useRef();

  // form validation
  const formValidation = (e) => {
    e.preventDefault();

    if (name.current.value === "") {
      setIsError((prevState) => ({
        ...prevState,
        name: true,
      }));
      return false;
    } else if (
      email.current.value === "" ||
      !email.current.value.includes(".com")
    ) {
      setIsError((prevState) => ({
        ...prevState,
        email: true,
      }));
      return false;
    } else if (phoneNumber.current.value == "") {
      setIsError((prevState) => ({
        ...prevState,
        phoneNumber: true,
      }));
      return false;
    } else if (subject.current.value === "") {
      setIsError((prevState) => ({
        ...prevState,
        subject: true,
      }));
      return false;
    }

    setDisplayMessage(true);
    setIsError({
      name: false,
      email: false,
      phoneNumber: false,
      subject: false,
    });

    name.current.value = "";
    email.current.value = "";
    phoneNumber.current.value = "";
    subject.current.value = "";
    message.current.value = "";

    return true;
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-end xl:px-40 px-6 mb-10 gap-x-4 gap-y-16">
      <div className="w-full md:w-1/2 pt-10 px-6 shadow-2xl bg-white drop-shadow-xl -mt-24 mx-auto pb-6">
        <p className="text-xs text-[#7A7A7A]">GET CONNECTED WITH US</p>
        <h1 className="text-2xl font-bold mt-2">
          We’re happy to discuss your project and answer
        </h1>
        <p className="text-[#7A7A7A] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <form className="mt-10">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${
              isError ? "gap-y-5" : "gap-y-3"
            }`}
          >
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Name"
                className={`p-2 outline-none border ${
                  isError.name ? "border-red-700" : "border-[#DDDDDD]"
                }`}
                ref={name}
              />
              {isError.name && (
                <p className="text-red-700 text-sm">This field is required</p>
              )}
            </div>

            <div className="flex flex-col">
              <input
                type="email"
                placeholder="Email"
                className={`p-2 outline-none border ${
                  isError.email ? "border-red-700" : "border-[#DDDDDD]"
                }`}
                ref={email}
              />
              {isError.email && (
                <p className="text-red-700 text-sm">This field is required</p>
              )}
            </div>

            <div className="flex flex-col">
              <input
                type="number"
                placeholder="Phone"
                className={`p-2 outline-none border ${
                  isError.phoneNumber ? "border-red-700" : "border-[#DDDDDD]"
                }`}
                ref={phoneNumber}
              />
              {isError.phoneNumber && (
                <p className="text-red-700 text-sm">This field is required</p>
              )}
            </div>

            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Subject"
                className={`p-2 outline-none border ${
                  isError.subject ? "border-red-700" : "border-[#DDDDDD]"
                }`}
                ref={subject}
              />
              {isError.subject && (
                <p className="text-red-700 text-sm">This field is required</p>
              )}
            </div>

            <textarea
              name="Message"
              className="col-span-1 sm:col-span-2 p-2 outline-none border border-[#DDDDDD] text-[#7A7A7A]"
              rows="5"
              placeholder="Message"
              ref={message}
            ></textarea>

            <button
              type="submit"
              onClick={formValidation}
              className="bg-[#239ADF]  py-2  text-white sm:!w-1/2 sm:!flex justify-center block"
            >
              Submit
            </button>
          </div>

          {displayMessage && (
            <div className="flex items-center mt-4 text-green-600">
              <MdCheck className="mr-2" />
              <p>Your submission was successful!</p>
            </div>
          )}
        </form>
      </div>

      <div className="w-full md:w-1/2 flex flex-col lg:pr-20  mx-auto gap-y-4">
        <ul className="space-y-4 bg-white drop-shadow-xl py-4 pl-3 rounded-md">
          <li className="flex items-center">
            <MdPhone className="mr-3 text-2xl text-[#239ADF]" />
            <a href="#">04078453042</a>
          </li>

          <li className="flex items-center">
            <FaWhatsapp className="mr-3 text-2xl text-[#239ADF]" />
            <a href="#">04078453042</a>
          </li>

          <li className="flex items-center">
            <FaDotCircle className="mr-3 text-2xl text-[#239ADF]" />
            <a href="#">Gbsdbfbjd@gmail.com</a>
          </li>
        </ul>

        <div className="bg-[#239ADF]  px-6 py-10 text-white shadow-xl rounded-md">
          <p className="text-xl text-[#DAD3D3]">Still have a</p>
          <h1 className="text-3xl font-bold">Questions?</h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
