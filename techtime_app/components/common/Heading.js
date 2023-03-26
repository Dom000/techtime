import React from "react";

function Heading({ text, className }) {
  return (
    <h1 className={`md:text-4xl  font-extrabold ${className}`}>{text}</h1>
  );
}

export default Heading;
