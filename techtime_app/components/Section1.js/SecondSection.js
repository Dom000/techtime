import React from "react";
import Button from "../common/Button";
import Heading from "../common/Heading";

function SecondSection() {
  return (
    <div className="md:flex py-10">
      <div className="w-full md:w-3/5 relative flex flex-col justify-center p-5 md:pl-20">
        <img
          loading="eager"
          src="Vector(5).png"
          alt="hero"
          className="object-contain w-8  absolute bottom-[93%] md:bottom-[97%] right-[89%] md:right-[88%]"
        />

        <div className="max-w-2xl md:w-[420px] space-y-4">
          <Heading
            text={"High quality video, audio & live classes"}
            className={"text-center md:text-left text-black"}
          />
          <p className="text-sm text-[#A1A1A1] text-center md:text-left">
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
          <div className="flex justify-center md:justify-start md:space-x-10">
            <Button
              text={"View Courses"}
              className={"bg-techtimeBlue text-white border-white border"}
            />
          </div>
          <div className="pl-5 grid pt-7 grid-cols-2 gap-5">
            <div className="flex bg-slate-50 rounded-md p-2 space-x-2 items-center">
              <img loading="eager" src="Frame_110.png" className="w-7" />
              <p className=" text-xs font-bold">Audio Classes</p>
            </div>
            <div className="flex bg-slate-50 rounded-md p-2 space-x-2 items-center">
              <img loading="eager" src="Frame_110(1).png" className="w-7" />
              <p className=" text-xs font-bold">Live Classes</p>
            </div>
            <div className="flex bg-slate-50 rounded-md p-2 space-x-2 items-center">
              <img loading="eager" src="Frame_110_(2).png" className="w-7" />
              <p className=" text-xs font-bold">Recorded Classes</p>
            </div>
            <div className="flex bg-slate-50 rounded-md p-2 space-x-2 items-center">
              <img loading="eager" src="Frame_110_(3).png" className="w-7" />
              <p className=" text-xs font-bold">50+ Notes</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col justify-center items-center md:justify-start md:items-start md:w-2/5 pt-10 relative ">
        <img
          loading="eager"
          src="Frame122.png"
          alt="hero"
          className="object-contain w-60 md:w-96"
        />
        <img
          loading="eager"
          src="Frame113.png"
          alt="hero"
          className="object-contain absolute left-12 md:left-auto bottom-28 md:bottom-60 w-24 md:w-36"
        />

        <img
          loading="eager"
          src="Vectmmor.png"
          alt="hero"
          className="object-contain absolute md:right-0 w-6 bottom-80"
        />
        <img
          loading="eager"
          src="Vector(7).png"
          alt="hero"
          className="object-contain absolute md:right-28 w-20 bottom-20 -z-10"
        />
        <img
          loading="eager"
          src="Vecto_(8).png"
          alt="hero"
          className="object-contain absolute right-0 md:right-0 w-6 bottom-32 md:bottom-10 "
        />
        <img
          loading="eager"
          src="Vectorpurple.png"
          alt="hero"
          className="object-contain absolute md:right-60 w-2 bottom-0 "
        />
      </div>
    </div>
  );
}

export default SecondSection;
