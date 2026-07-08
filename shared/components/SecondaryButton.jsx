import React from "react";
import { SECONDARY_BUTTON_SIZES } from "../../constants/constants";

const SecondaryButton = ({ text, icon, onClick, size = SECONDARY_BUTTON_SIZES.MEDIUM, disabled = false, hoverEnabled = false, className = "" }) => {
  return (
    <button
      disabled={disabled}
       onClick={onClick}
      className={`
        inline-flex w-fit items-center justify-center gap-3
        ${size}

        bg-transparent
        border border-body_text_color_gray
        text-body_text_color_gray

        rounded-[0.625rem]
        font-medium
        transition-all duration-200 ease-in-out

        ${hoverEnabled && !disabled ? "hover:border-primary_blue hover:text-primary_blue active:border-primary_blue active:text-primary_blue" : ""}

        disabled:border-light_gray
        disabled:text-body_text_color_gray
        disabled:cursor-not-allowed

        ${className}
      `}
    >
      {icon && icon}
      {text}
     
    </button>
  );
};

export default SecondaryButton;
