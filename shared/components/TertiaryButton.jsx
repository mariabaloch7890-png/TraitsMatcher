import React from "react";

const TertiaryButton = ({ text, onClick, disabled = false, hoverEnabled = false, className = ""}) => {
  return (
    <button
      disabled={disabled}
       onClick={onClick}
      className={`
        inline-flex w-fit items-center justify-center

        text-primary_white
        text-[1rem]
        font-normal
        leading-[1.4rem]

        transition-all duration-200 ease-in-out

        ${hoverEnabled && !disabled ? "hover:text-primary_blue active:text-primary_blue active:opacity-80" : ""}

        disabled:text-body_text_color_gray
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default TertiaryButton;
