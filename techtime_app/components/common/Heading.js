import React from "react";

function Heading({ text, className }) {
  return (
    <h1 className={`text-4xl text-white font-extrabold ${className}`}>{text}</h1>
  );
}

export default Heading;
