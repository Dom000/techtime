import React from "react";
import Button from "../common/Button";

function Footer() {
  return (
    <div className="bg-[#000F24] grid-cols-1 p-5 md:p-16 gap-12 grid md:grid-cols-3 lg:grid-cols-4">
      <div className="flex flex-col justify-start items-start space-y-4">
        <div className="">
          <img src="techtime.png" className="object-contain  w-16" />
        </div>
        <p className="text-white text-xs tracking-wider">
          reach out to us on any of our social media networks
        </p>
        <div className="">
          <img src="Frame__112.png" className="object-contain  w-40" />
        </div>
      </div>
      <div className="text-white space-y-3">
        <p className="text-lg pb-3 font-bold tracking-wider text-white">
          Useful Links
        </p>

        <p className="text-sm">Home</p>
        <p className="text-sm">About Us</p>
        <p className="text-sm">Our Courses</p>
        <p className="text-sm">Testimonials</p>
        <p className="text-sm">Our Community</p>
      </div>
      <div className="text-white space-y-3">
        <p className="text-lg pb-3 font-bold tracking-wider text-white">
          Community
        </p>
        <p className="text-sm">Help Centers</p>
        <p className="text-sm">Partners</p>
        <p className="text-sm">Suggestion</p>
        <p className="text-sm">Blog</p>
        <p className="text-sm">Newsletter</p>
      </div>
      <div className="text-white space-y-3">
        <p className="text-lg pb-3 font-bold tracking-wider text-white">
          Subscribe Us
        </p>

        <div className="flex border-techtimeBlue justify-between bg-[#2A2A2B] border">
          <input
            placeholder="nft123@gmail.com"
            className="border-0 placeholder:text-xs placeholder:text-[#424141] w-36 px-1 outline-none focus:bg-none  bg-[#2A2A2B]"
          />
          <Button
            text={"Send Message"}
            className={
              "bg-techtimeBlue px-2 font-normal text-xs text-white  border-0"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
