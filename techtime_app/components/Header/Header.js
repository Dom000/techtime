import { useRouter } from "next/router";
import React from "react";
import Button from "../common/Button";

function Header() {
  const router = useRouter();
  return (
    <div className="bg-techtimeBlue p-6 flex justify-between">
      <div className="w-4/6">
        <img src="techtime.png" className="object-contain ml-14 w-16" />
      </div>
      <div className="w-3/5 flex justify-between">
        <a
          href="/"
          className={
            router.pathname == "/"
              ? "text-[#ffffff] text-lg"
              : "text-[#AAC4E6] text-lg"
          }
        >
          Home
        </a>
        <a href="#" className={"text-[#AAC4E6] text-lg"}>
          About us
        </a>
        <a href="#" className={"text-[#AAC4E6] text-lg"}>
          Courses
        </a>
        <a href="#" className={"text-[#AAC4E6] text-lg"}>
          Testimonial
        </a>
        <a href="#" className={"text-[#AAC4E6] text-lg"}>
          Community
        </a>
      </div>
      <div className="w-2/6 flex justify-center">
        <Button text={"Enroll Now"} className={"text-techtimeBlue bg-white"} />
      </div>
    </div>
  );
}

export default Header;