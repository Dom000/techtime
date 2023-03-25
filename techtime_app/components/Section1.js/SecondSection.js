import React from "react";
import Button from "../common/Button";
import Heading from "../common/Heading";

function SecondSection() {
  return (
    <div className="flex py-10">
      <div className="w-3/5 relative flex flex-col justify-center pl-20">
        <img
          src="Vector(5).png"
          alt="hero"
          className="object-contain w-8  absolute bottom-[95%] right-[88%]"
        />

        <div className="max-w-2xl w-[420px] space-y-4">
          <Heading
            text={"high quality video, audio & live classes"}
            className={"text-left text-black"}
          />
          <p className="text-sm text-[#A1A1A1]">
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
          <div className="flex space-x-10">
            <Button
              text={"View Courses"}
              className={"bg-techtimeBlue text-white border-white border"}
            />
          </div>
          <div className="pl-5 grid pt-7 grid-cols-2 gap-5">
            <div className="flex space-x-2 items-center">
              <img src="Frame_110.png" className="w-7" />
              <p className=" text-xs font-bold">Audio Classes</p>
            </div>
            <div className="flex space-x-2 items-center">
              <img src="Frame_110(1).png" className="w-7" />
              <p className=" text-xs font-bold">Live Classes</p>
            </div>
            <div className="flex space-x-2 items-center">
              <img src="Frame_110_(2).png" className="w-7" />
              <p className=" text-xs font-bold">Recorded Classes</p>
            </div>
            <div className="flex space-x-2 items-center">
              <img src="Frame_110_(3).png" className="w-7" />
              <p className=" text-xs font-bold">50+ Notes</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/5 pt-10 relative block">
        <img src="Frame122.png" alt="hero" className="object-contain w-96" />
        <img
          src="Frame113.png"
          alt="hero"
          className="object-contain absolute bottom-48 w-36"
        />

        <img
          src="Vectmmor.png"
          alt="hero"
          className="object-contain absolute right-0 w-6 bottom-80"
        />
        <img
          src="Vector(7).png"
          alt="hero"
          className="object-contain absolute right-20 w-20 bottom-10 -z-10"
        />
        <img
          src="Vecto_(8).png"
          alt="hero"
          className="object-contain absolute right-0 w-6 bottom-10 "
        />
        <img
          src="Vectorpurple.png"
          alt="hero"
          className="object-contain absolute right-60 w-2 bottom-0 "
        />
      </div>
    </div>
  );
}

export default SecondSection;
