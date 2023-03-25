import React from "react";
import Button from "../common/Button";
import Heading from "../common/Heading";
import { FiArrowUpRight } from "react-icons/fi";

function FirstSection() {
  return (
    <>
      <div className="bg-techtimeBlue flex">
        <div className="w-3/5 relative flex flex-col justify-center pl-20">
          <img
            src="Vector(3).png"
            alt="hero"
            className="object-contain w-20  absolute bottom-20 left-[80%]"
          />
          <img
            src="Vecto.png"
            alt="hero"
            className="object-contain w-10  absolute bottom-60 right-[94%]"
          />
          <img
            src="Vector_(1).png"
            alt="hero"
            className="object-contain w-4  absolute bottom-[85%] right-[80%]"
          />
          <img
            src="Vector(2).png"
            alt="hero"
            className="object-contain w-1.5  absolute bottom-[80%] right-[24%]"
          />
          <div className="max-w-2xl w-96 space-y-4">
            <Heading
              text={"Grow your skills to advance your career path "}
              className={"text-left"}
            />
            <p className="text-sm text-[#AAC4E6] ">
              build your future with our quality education. the best and largest
              all-in-one online tutoring platform in the world
            </p>
            <div className="flex space-x-10">
              <Button
                icon={<FiArrowUpRight className="mt-1 text-sm ml-2" />}
                text={"Get Started Now"}
                className={"bg-techtimeBlue text-white border-white border"}
              />
              <Button
                text={"Enroll Now"}
                className={"text-techtimeBlue bg-white"}
              />
            </div>{" "}
            <div>
              <img
                src="Frame101.png"
                className="w-64 object-contain"
                alt="Frame101"
              />
            </div>
          </div>
        </div>
        <div className="w-2/5 pt-10 relative block">
          <img
            src="HERO_IMAGEE.png"
            alt="hero"
            className="object-contain w-96"
          />
          <img
            src="Frame_88.png"
            alt="hero"
            className="object-contain w-16  absolute bottom-40 right-full"
          />
          <img
            src="Vector(2).png"
            alt="hero"
            className="object-contain  absolute bottom-8 right-full"
          />
          <img
            src="Frame89.png"
            alt="hero"
            className="object-contain w-14  absolute bottom-10 right-[15%]"
          />
          <img
            src="Vector_(1).png"
            alt="hero"
            className="object-contain absolute w-4 bottom-72"
          />
          <img
            src="Vector.png"
            alt="hero"
            className="object-contain absolute right-[25%] w-4 bottom-64"
          />
          <img
            src="Induction-Hub-Artwork_Admin-and-IT 1.png"
            alt="hero"
            className="object-contain absolute right-[85%] w-40 bottom-80"
          />
          <img
            src="Visual_Studiojpeg.png"
            alt="hero"
            className="object-contain absolute right-[25%] w-12 bottom-96"
          />
        </div>
      </div>
      <div className="p-7 bg-techtimeOffBlue flex justify-center items-center space-x-10">
        <img src="Vector(4).png" className="w-20" alt="logo" />
        <img src="Group.png" className="w-20" alt="logo" />
        <img src="monday.comvg.png" className="w-20" alt="logo" />
        <img src="Group(1).png" className="w-20" alt="logo" />
        <img src="Dropboxsvg.png" className="w-20" alt="logo" />
      </div>
    </>
  );
}

export default FirstSection;
