import React from "react";
import { BUTTON_DEFAULT_VARIENT_TEXT, BUTTON_SIZES } from "../../constants/constants";

const PrimaryButton = ({
  text,
  onClick,
  variant = BUTTON_DEFAULT_VARIENT_TEXT.FILLED,
  size = BUTTON_SIZES.MEDIUM,
  disabled = false,
  className = ""   // <-- add this
}) => {
  const baseClasses =
    "inline-flex w-fit items-center justify-center rounded-[0.75rem] font-medium transition-all duration-200 ease-in-out";

  const variantClasses = disabled
    ? ""
    : variant === BUTTON_DEFAULT_VARIENT_TEXT.FILLED
    ? "bg-primary_blue text-primary_white hover:bg-primary_white hover:text-primary_blue"
    : "bg-primary_white text-primary_blue hover:bg-primary_blue hover:text-primary_white";

  const disabledClasses = disabled
    ? "bg-light_gray text-body_text_color_gray cursor-not-allowed"
    : "";

  return (
    <button
    onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${size}
        ${variantClasses}
        ${disabledClasses}
        ${className}   /* <-- merge your extra classes here */
      `}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;

// PrimaryButton
// PrimaryInput.jsx
// Footer.jsx
// Navbar.jsx
// ReusableVariables
// camelcase - folder names, simple js methods , api calls
// TraitsMatcher
