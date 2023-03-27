import React from "react";
import Button from "../common/Button";
import Heading from "../common/Heading";
import { AiFillStar } from "react-icons/ai";
import { MdMenuBook } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

function FourthSection() {
  return (
    <div className="flex flex-col relative  justify-center w-full items-center pb-16">
      <img
        src="Vector_(10).png"
        alt="Vector_(10) "
        className="absolute left-1 md:left-[9%] w-5 md:w-8 bottom-[100%] md:bottom-[70%]"
      />
      <div className="flex w-full md:w-[600px] flex-col space-y-4 justify-center items-center">
        <Heading text={"Browse Our Popular Courses"} />
        <p className="text-sm text-[#A1A1A1] text-center">
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </p>
        <div className="flex space-x-3 md:space-x-10">
          <p className="text-techtimeBlue font-bold text-xs md:text-sm bg-slate-100 rounded-md p-1">
            All Categories
          </p>
          <p className="text-[#838383] text-xs md:text-sm p-1">Design </p>
          <p className="text-[#838383] text-xs md:text-sm p-1">Development </p>
          <p className="text-[#838383] text-xs md:text-sm p-1">Marketing </p>
        </div>
      </div>
      -<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-1 gap-3 md:gap-10 px-1 md:px-16 py-10">
        <div className="bg-slate-100 p-3 rounded-md">
          <div>
            <img src="unsplash_Oalh2MojUuk.png" alt="img" loading="lazy" />
          </div>
          <div className="flex justify-between mt-3">
            <div className="bg-techtimeOffBlue text-techtimeBlue rounded-full px-3 py-0.5  text-xs font-semibold ">
              Design
            </div>

            <div className="flex text-[#A1A1A1] text-xs space-x-1">
              <p>4.7k</p>
              <AiFillStar className="text-orange-400 mt-0.5" />
              <p>(32.7k+)</p>
            </div>
          </div>
          <div className="my-3">
            <p className="font-bold text-xl">
              introduction to user research in ux design
            </p>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex text-[#A1A1A1] text-sm space-x-1">
              <IoMdTime className=" mt-0.5" />
              <p>23hrs 50mins</p>
            </div>

            <div className="flex text-[#A1A1A1] text-sm space-x-1">
              <MdMenuBook className="mt-0.5 " />
              <p>15 Lessons</p>
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <div className="flex text-[#000000] font-bold text-sm space-x-1">
              <img src="Frame_165.png" className="w-6 h-6" />
              <p>Leonard Victor</p>
            </div>

            <div className=" text-techtimeBlue text-base rounded-full   font-semibold ">
              $15.00
            </div>
          </div>
        </div>
        <div className="bg-slate-100 p-3 rounded-md">
          <div>
            <img src="unsplash_U33fHryBYBU.png" alt="img" loading="lazy" />
          </div>
          <div className="flex justify-between mt-3">
            <div className="bg-techtimeOffBlue text-techtimeBlue rounded-full px-3 py-0.5  text-xs font-semibold ">
              Design
            </div>

            <div className="flex text-[#A1A1A1] text-xs space-x-1">
              <p>4.7k</p>
              <AiFillStar className="text-orange-400 mt-0.5" />
              <p>(32.7k+)</p>
            </div>
          </div>
          <div className="my-3">
            <p className="font-bold text-xl">
              introduction to user research in ux design
            </p>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex text-[#A1A1A1] text-sm space-x-1">
              <IoMdTime className=" mt-0.5" />
              <p>23hrs 50mins</p>
            </div>

            <div className="flex text-[#A1A1A1] text-sm space-x-1">
              <MdMenuBook className="mt-0.5 " />
              <p>15 Lessons</p>
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <div className="flex text-[#000000] font-bold text-sm space-x-1">
              <img src="Frame_165.png" className="w-6 h-6" />
              <p>Jeffrey Williams</p>
            </div>

            <div className=" text-techtimeBlue text-base rounded-full   font-semibold ">
              $22.00
            </div>
          </div>
        </div>
        <div className="bg-slate-100 p-3 rounded-md">
          <div>
            <img src="unsplash_Lks7vei-eAg.png" alt="img" loading="lazy" />
          </div>
          <div className="flex justify-between mt-3">
            <div className="bg-techtimeOffBlue text-techtimeBlue rounded-full px-3 py-0.5  text-xs font-semibold ">
              Design
            </div>

            <div className="flex text-[#A1A1A1] text-xs space-x-1">
              <p>4.7k</p>
              <AiFillStar className="text-orange-400 mt-0.5" />
              <p>(32.7k+)</p>
            </div>
          </div>
          <div className="my-3">
            <p className="font-bold text-xl">
              introduction to user research in ux design
            </p>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex text-[#A1A1A1] text-sm space-x-1">
              <IoMdTime className=" mt-0.5" />
              <p>23hrs 50mins</p>
            </div>

            <div className="flex text-[#A1A1A1] text-sm space-x-1">
              <MdMenuBook className="mt-0.5 " />
              <p>15 Lessons</p>
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <div className="flex text-[#000000] font-bold text-sm space-x-1">
              <img src="Frame_165_3).png" className="w-6 h-6" />
              <p>Claretta Mason</p>
            </div>

            <div className=" text-techtimeBlue text-base rounded-full   font-semibold ">
              $25.00
            </div>
          </div>
        </div>
        <div className="bg-slate-100 p-3 rounded-md">
          <div>
            <img src="unsplash_pjAH2Ax4uWk.png" alt="img" loading="lazy" />
          </div>
          <div className="flex justify-between mt-3">
            <div className="bg-techtimeOffBlue text-techtimeBlue rounded-full px-3 py-0.5  text-xs font-semibold ">
              Design
            </div>

            <div className="flex text-[#A1A1A1] text-xs space-x-1">
              <p>4.7k</p>
              <AiFillStar className="text-orange-400 mt-0.5" />
              <p>(32.7k+)</p>
            </div>
          </div>
          <div className="my-3">
            <p className="font-bold text-xl">
              introduction to user research in ux design
            </p>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex text-[#A1A1A1] text-sm space-x-1">
              <IoMdTime className=" mt-0.5" />
              <p>23hrs 50mins</p>
            </div>

            <div className="flex text-[#A1A1A1] text-sm space-x-1">
              <MdMenuBook className="mt-0.5 " />
              <p>15 Lessons</p>
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <div className="flex text-[#000000] font-bold text-sm space-x-1">
              <img src="Frame165_(2).png" className="w-6 h-6" />
              <p>Jessica Duke</p>
            </div>

            <div className=" text-techtimeBlue text-base rounded-full   font-semibold ">
              $33.00
            </div>
          </div>
        </div>
        <div className="bg-slate-100 p-3 rounded-md">
          <div>
            <img src="unsplash_gMsnXqILjp4.png" alt="img" loading="lazy" />
          </div>
          <div className="flex justify-between mt-3">
            <div className="bg-techtimeOffBlue text-techtimeBlue rounded-full px-3 py-0.5  text-xs font-semibold ">
              Design
            </div>

            <div className="flex text-[#A1A1A1] text-xs space-x-1">
              <p>4.7k</p>
              <AiFillStar className="text-orange-400 mt-0.5" />
              <p>(32.7k+)</p>
            </div>
          </div>
          <div className="my-3">
            <p className="font-bold text-xl">
              introduction to user research in ux design
            </p>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex text-[#A1A1A1] text-sm space-x-1">
              <IoMdTime className=" mt-0.5" />
              <p>23hrs 50mins</p>
            </div>

            <div className="flex text-[#A1A1A1] text-sm space-x-1">
              <MdMenuBook className="mt-0.5 " />
              <p>15 Lessons</p>
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <div className="flex text-[#000000] font-bold text-sm space-x-1">
              <img src="Frame_165_(1).png" className="w-6 h-6" />
              <p>Samuel jacobs</p>
            </div>

            <div className=" text-techtimeBlue text-base rounded-full   font-semibold ">
              $35.00
            </div>
          </div>
        </div>

        <div className="bg-slate-100 p-3 rounded-md">
          <div>
            <img src="unsplash_pypeCEaJeZY.png" alt="img" loading="lazy" />
          </div>
          <div className="flex justify-between mt-3">
            <div className="bg-techtimeOffBlue text-techtimeBlue rounded-full px-3 py-0.5  text-xs font-semibold ">
              Design
            </div>

            <div className="flex text-[#A1A1A1] text-xs space-x-1">
              <p>4.7k</p>
              <AiFillStar className="text-orange-400 mt-0.5" />
              <p>(32.7k+)</p>
            </div>
          </div>
          <div className="my-3">
            <p className="font-bold text-xl">
              introduction to user research in ux design
            </p>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex text-[#A1A1A1] text-sm space-x-1">
              <IoMdTime className=" mt-0.5" />
              <p>23hrs 50mins</p>
            </div>

            <div className="flex text-[#A1A1A1] text-sm space-x-1">
              <MdMenuBook className="mt-0.5 " />
              <p>15 Lessons</p>
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <div className="flex text-[#000000] font-bold text-sm space-x-1">
              <img src="Frame_165.png" className="w-6 h-6" />
              <p>Leonard Victor</p>
            </div>

            <div className=" text-techtimeBlue text-base rounded-full   font-semibold ">
              $55.00
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Button
          text={"Explore All Courses"}
          className={"bg-techtimeBlue text-white border-white border"}
        />
      </div>
    </div>
  );
}

export default FourthSection;
