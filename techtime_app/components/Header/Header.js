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
              ? "text-[#ffffff] text-base"
              : "text-[#AAC4E6] text-base"
          }
        >
          Home
        </a>
        <a href="#" className={"text-[#AAC4E6] text-base"}>
          About us
        </a>
        <a href="#" className={"text-[#AAC4E6] text-base"}>
          Courses
        </a>
        <a href="#" className={"text-[#AAC4E6] text-base"}>
          Testimonial
        </a>
        <a href="#" className={"text-[#AAC4E6] text-base"}>
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
