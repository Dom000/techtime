import React from "react";
import Button from "../common/Button";
import Heading from "../common/Heading";

function SixthSection() {
  return (
    <div className="bg-techtimeBlue p-7 flex flex-col justify-center items-center">
      <div className="flex w-full md:w-[800px] flex-col space-y-4 justify-center items-center">
        <p className="text-xs tracking-wider text-[#ffffff] capitalize text-center">
          JOIN OUR COMMUNITY{" "}
        </p>
        <Heading
          text={
            "Are you  ready to connect with the future talent of the tech world"
          }
          className={"text-white text-center"}
        />
        <p className=" text-xs md:text-sm text-[#ffffff] text-center">
          Meet Up With Other Techstars And Grow Together
        </p>
      </div>
      <div className="flex justify-center items-center">
        {" "}
        <img
          src="Frame_209.png"
          alt="pic"
          className="object-contain w-[700px]"
        />
      </div>
      <Button
        text={"Join Our Community"}
        className={"text-techtimeBlue text-xs my-4 bg-white"}
      />
    </div>
  );
}

export default SixthSection;
