import { MdCheck } from "react-icons/md";

const BestProgress = () => {
  return (
    <>
      <div className=" flex md:flex-row  flex-col lg:!gap-x-2 gap-x-3 gap-y-2 items-stretch md:justify-center ">
        <div className="md:flex md:flex-col md:justify-center lg:!max-w-md md:!max-w-sm relative xl:left-4 block  ">
          <p className="md:text-xl text-sm  uppercase  ">BEST PROGRESS</p>
          <h1 className="md:text-5xl text-3xl font-medium mt-2 uppercase md:!ml-0 ml-1">
            work process
          </h1>
          <p className="text-justify mt-3  text-[#7A7A7A] md:text-base text-sm  ">
            Aliqm lorem ante, dapibus in, viverra quis, feugiat Phasellus aut ms
            varius laoreet srtrum aenean imperdiet. Etiam ult augue dapibus in,
            viverra quis tiam ult augue.
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
    </>
  );
};

export default BestProgress;
