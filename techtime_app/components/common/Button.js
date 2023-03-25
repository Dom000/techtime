import React from "react";

function Button({ text, icon, className }) {
  return (
    <div>
      <button
        className={`${className}  text-sm flex font-semibold rounded-sm px-6 py-2`}
      >
        {text} {icon}
      </button>
    </div>
  );
}

export default Button;
