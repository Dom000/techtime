import { useRouter } from "next/router";
import React from "react";
import { FiMenu } from "react-icons/fi";
import Button from "../common/Button";

function Header() {
  const router = useRouter();
  return (
    <div className="w-full bg-techtimeBlue border-none p-6 flex justify-between">
      <div className="w-4/6">
        <img src="techtime.png" className="object-contain md:ml-14 w-16" />
      </div>
      <div className="w-3/5 flex justify-between">
        <a
          href="/"
          className={
            router.pathname == "/"
              ? "text-[#ffffff] hidden md:block text-base"
              : "text-[#AAC4E6] hidden md:block text-base"
          }
        >
          Home
        </a>
        <a href="#" className={"text-[#AAC4E6] hidden md:block text-base"}>
          About us
        </a>
        <a href="#" className={"text-[#AAC4E6] hidden md:block text-base"}>
          Courses
        </a>
        <a href="#" className={"text-[#AAC4E6] hidden md:block text-base"}>
          Testimonial
        </a>
        <a href="#" className={"text-[#AAC4E6] hidden md:block text-base"}>
          Community
        </a>
      </div>
      <div className="w-2/6 flex justify-center">
        <FiMenu className="text-white md:hidden text-xl"/>
        <Button
          text={"Enroll Now"}
          className={"text-techtimeBlue hidden md:block bg-white"}
        />
      </div>
    </div>
  );
}

export default Header;
