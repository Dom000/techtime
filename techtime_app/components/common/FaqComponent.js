import React from "react";
import { useState } from "react";
import { BsDash } from "react-icons/bs";
import { MdAdd } from "react-icons/md";
import "animate.css";

const FaqComponent = ({ item: { id, question, answer } }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      onClick={() => setIsActive(true)}
      className={`animate__animated animate__fadeIn  ${
        isActive && "border-b-gray-300 border-b"
      } p-3 md:p-4 `}
    >
      <div className="flex justify-between items-center">
        <p className={isActive ? "text-techtimeBlue font-bold" : "font-bold"}>
          {question}
        </p>
        {isActive ? (
          <BsDash
            onClick={(e) => {
              e.stopPropagation();
              setIsActive(!isActive);
            }}
            className="text-techtimeBlue"
          />
        ) : (
          <MdAdd className="text-lg text-textColor" />
        )}
      </div>

      {isActive && (
        <div className=" animate__animated animate__pulse mt-2 p-1">
          <p className="text-[#A1A1A1]  text-xs">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqComponent;
