import React from "react";
import Button from "../common/Button";
import Heading from "../common/Heading";
import { FiArrowUpRight } from "react-icons/fi";

function FirstSection() {
  return (
    <div>
      <div className="bg-techtimeBlue border-none md:flex w-full">
        <div className=" w-full md:w-3/5 relative flex flex-col justify-center md:pl-20">
          <img
            loading="eager"
            src="Vector(3).png"
            alt="hero"
            className="object-contain w-14 md:w-20 bottom-[-30%]  absolute md:bottom-20 md:rotate-0 rotate-45 right-[8%] md:right-0 md:left-[80%]"
          />
          <img
            loading="eager"
            src="Vecto.png"
            alt="hero"
            className="object-contain w-10  absolute bottom-5 md:bottom-60 right-[94%]"
          />
          <img
            loading="eager"
            src="Vector_(1).png"
            alt="hero"
            className="object-contain hidden md:block w-4  absolute bottom-[85%] right-[80%]"
          />
          <img
            loading="eager"
            src="Vector(2).png"
            alt="hero"
            className="object-contain w-1.5 md:block hidden  absolute bottom-[80%] right-[24%]"
          />
          <div className=" w-full md:max-w-2xl md:w-96 space-y-4">
            <Heading
              text={"Grow your skills to advance your career path "}
              className={" text-center text-3xl  md:text-left text-white"}
            />
            <p className="md:text-sm text-xs text-center md:text-left text-[#AAC4E6] ">
              build your future with our quality education. the best and largest
              all-in-one online tutoring platform in the world
            </p>
            <div className="flex justify-center items-center space-x-3 md:space-x-10">
              <Button
                icon={<FiArrowUpRight className="mt-1 text-sm ml-2" />}
                text={"Get Started Now"}
                className={
                  "bg-techtimeBlue text-xs  text-white border-white border"
                }
              />
              <Button
                text={"Enroll Now"}
                className={"text-techtimeBlue text-xs bg-white"}
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                loading="eager"
                src="Frame101.png"
                className="w-52 md:w-64 object-contain"
                alt="Frame101"
              />
            </div>
          </div>
        </div>
        <div className=" w-full md:w-2/5 pt-10 relative block">
          <img
            loading="eager"
            src="HERO_IMAGEE.png"
            alt="hero"
            className="object-contain w-96"
          />
          <img
            loading="eager"
            src="Frame_88.png"
            alt="hero"
            className="object-contain w-12 md:w-16  absolute left-[5%] md:left-auto bottom-32 md:bottom-40 md:right-full"
          />
          <img
            loading="eager"
            src="Vector(2).png"
            alt="hero"
            className="object-contain left-14 w-1.5 md:w-2  absolute bottom-8 md:right-full"
          />
          <img
            loading="eager"
            src="Frame89.png"
            alt="hero"
            className="object-contain w-11 md:w-14  absolute bottom-3 md:bottom-10 right-[8%] md:right-[15%]"
          />
          <img
            loading="eager"
            src="Vector_(1).png"
            alt="hero"
            className="object-contain left-[10%] md:left-0 absolute w-4 bottom-72"
          />
          <img
            loading="eager"
            src="Vector.png"
            alt="hero"
            className="object-contain absolute right-[10%] md:right-[25%] w-4 bottom-64"
          />
          <img
            loading="eager"
            src="Induction-Hub-Artwork_Admin-and-IT 1.png"
            alt="hero"
            className="object-contain absolute right-[72%] md:right-[85%] w-28 md:w-40 bottom-80"
          />
          <img
            loading="eager"
            src="Visual_Studiojpeg.png"
            alt="hero"
            className="object-contain absolute right-[9%] md:right-[25%] w-12 bottom-80 md:bottom-96"
          />
        </div>
      </div>
      <div className="p-7 overflow-x-auto pl-16 md:pl-0 w-full bg-techtimeOffBlue flex justify-center items-center space-x-16">
        <img loading="eager" src="Vector(4).png" className="w-20" alt="logo" />
        <img loading="eager" src="Group.png" className="w-20" alt="logo" />
        <img
          loading="eager"
          src="monday.comvg.png"
          className="w-20"
          alt="logo"
        />
        <img loading="eager" src="Group(1).png" className="w-20" alt="logo" />
        <img loading="eager" src="Dropboxsvg.png" className="w-20" alt="logo" />
      </div>
    </div>
  );
}

export default FirstSection;
