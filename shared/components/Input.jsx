import React from "react";

const Input = ({ placeholder = "", disabled = false, className = "" }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      disabled={disabled}
      className={`
        flex
        w-full
        self-stretch

        px-[1rem]
        pt-[0.8125rem]
        pb-[0.875rem]

        bg-primary_white
        border
        border-input_border_light
        rounded-[0.75rem]

        text-input_selection_gray
        placeholder:text-input_selection_gray

        focus:outline-none
        focus:border-primary_blue

        disabled:bg-input_light_gray
        disabled:cursor-not-allowed

        ${className} 
      `}
    />
  );
};

export default Input;
