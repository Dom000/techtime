import React from "react";
import Button from "../common/Button";
import Heading from "../common/Heading";

function ThirdSection() {
  return (
    <div className="lg:flex py-10">
      <div className=" w-full lg:w-1/2 relative flex flex-col justify-center px-3 md:p-5  md:pl-20">
        <div className="w-full lg:max-w-2xl lg:w-[420px] space-y-4">
          <Heading
            text={"This is why We Are Best From Others"}
            className={"text-left text-black"}
          />
          <p className="text-sm text-[#A1A1A1]">
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
          <div className="flex md:space-x-10">
            <img
              loading="eager"
              src="unsplash_6MePtA9EVDA.png"
              alt="unsplash_6MePtA9EVDA"
            />
          </div>
        </div>
        <img
          loading="eager"
          src="Vector_(9).png"
          alt="hero"
          className="object-contain absolute right-[95%] w-4 bottom-20 "
        />
      </div>
      <div className="w-full lg:w-2/5 pt-10 px-3 md:px-5 relative block">
        <div className="grid grid-cols-2 gap-2 md:gap-10">
          <div className="space-y-3 bg-slate-50 rounded-md p-3">
            <img loading="eager" src="Frame_131.png" className="w-7" />
            <p className=" text-xs font-bold">Experienced Mentors</p>
            <p className="text-xs leading-5 text-[#A1A1A1]">
              high-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>
          </div>
          <div className="space-y-3 bg-slate-50 rounded-md p-3">
            <img loading="eager" src="Frame_131_(1).png" className="w-7" />
            <p className=" text-xs font-bold">One-on-One Meetings</p>
            <p className="text-xs leading-5 text-[#A1A1A1]">
              high-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>
          </div>
          <div className="space-y-3 bg-slate-50 rounded-md p-3">
            <img loading="eager" src="Frame_131_(3).png" className="w-7" />
            <p className=" text-xs font-bold">One-on-One Meetings</p>
            <p className="text-xs leading-5 text-[#A1A1A1]">
              high-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>
          </div>
          <div className="space-y-3 bg-slate-50 rounded-md p-3">
            <img loading="eager" src="Frame 131_(2).png" className="w-7" />
            <p className=" text-xs font-bold">Affordable Prices</p>
            <p className="text-xs leading-5 text-[#A1A1A1]">
              high-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>
          </div>
        </div>
        <img
          loading="eager"
          src="Vectorpurple.png"
          alt="hero"
          className="object-contain absolute right-0 w-3 bottom-0 "
        />
        <img
          loading="eager"
          src="Vector(6).png"
          alt="hero"
          className="object-contain absolute right-[50%] w-9 bottom-full "
        />
      </div>
    </div>
  );
}

export default ThirdSection;
