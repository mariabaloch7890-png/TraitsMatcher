import React from "react";
import Typography from "../shared/components/Typography";
import Input from "../shared/components/Input";
import PrimaryButton from "../shared/components/PrimaryButton";
import TertiaryButton from "../shared/components/TertiaryButton";
import { BUTTON_DEFAULT_VARIENT_TEXT, BUTTON_SIZES } from "../constants/constants";
import Icon24 from "../assets/Icon24.png";
import Icon from "../assets/Icon.svg"
import FooterPages from "../shared/components/FooterPages";

const ResetPassword = () => {
  return (
    <div className="min-h-screen bg-primary_white flex flex-col">
      
      {/* Brand */}
      <Typography
        variant="brand"
        className="text-primary_blue !px-[7rem] !pt-[2.5rem]"
      >
        TraitsMatcher
      </Typography>

      {/* Center Container */}
      <div className="flex flex-col justify-center items-center flex-1">
        <div className="w-[38rem] flex flex-col items-center gap-[2rem] mt-[0.88rem] mb-[1.9rem]">

          {/* Card */}
          <div className="w-[38rem] rounded-[0.625rem] border border-border_color bg-primary_white shadow-[0_2px_5px_rgba(0,0,0,0.20)] px-[5rem] pt-[4rem] pb-[2.5rem] flex flex-col gap-[2rem]">

            {/* Heading Section */}
            <div className="flex flex-col gap-[0.75rem]">
              <Typography variant="headingXl">
                Reset Password
              </Typography>
              <Typography
                variant="bodyMd"
                className="text-body_text_color_gray"
              >
                Please enter your new password to secure your account.
              </Typography>
            </div>

            {/* Form Section */}
            <div className="flex flex-col gap-[2rem]">

{/* New Password */}
<div className="flex flex-col gap-[0.625rem]">
  <Typography variant="bodySm" className="!font-[700]">
    New Password
  </Typography>

  {/* Input Wrapper */}
  <div className="relative w-full">
    <Input
      type="password"
      placeholder="Min. 8 characters"
      className="!pr-10"
    />

    {/* Static Eye Icon */}
    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-body_text_color_gray">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12s3.75-7.5 9.75-7.5S21.75 12 21.75 12 18 19.5 12 19.5 2.25 12 2.25 12z"
        />
        <circle cx="12" cy="12" r="3" />
      </svg>
    </div>
  </div>

  {/* Strength Bars */}
  <div className="flex gap-1 h-1">
    <div className="flex-1 bg-primary_blue rounded-full"></div>
    <div className="flex-1 bg-primary_blue rounded-full"></div>
    <div className="flex-1 bg-primary_blue rounded-full"></div>
    <div className="flex-1 bg-gray-200 rounded-full"></div>
  </div>

  {/* Strength Text + Tick */}
  <div className="flex items-center gap-2">
    {/* Tick */}
    <div className="w-4 h-4 border border-primary_blue rounded-full flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-2.5 h-2.5 text-primary_blue"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="3"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>

    <Typography variant="bodyXs">
      <span className="text-body_text_color_gray">
        Password strength:{" "}
      </span>
      <span className="text-primary_blue font-semibold">
        Strong
      </span>
    </Typography>
  </div>
</div>

              {/* Confirm Password */}
              <div className="flex flex-col gap-[0.625rem]">
                <Typography variant="bodySm" className="!font-[700]">
                  Confirm New Password
                </Typography>
                <Input
                  placeholder="Repeat your password"
                  type="password"
                />
              </div>

              {/* Button */}
              <PrimaryButton
                variant={BUTTON_DEFAULT_VARIENT_TEXT.FILLED}
                size={BUTTON_SIZES.MEDIUM}
                text="Reset Password"
                className="!w-full !h-[3.5rem]"
              />
            </div>

            {/* Info Box */}
            <div className="flex gap-3 bg-[#EFF6FF80] rounded-[0.625rem] p-4">
              <img src={Icon24} alt="info-icon" className="w-4 h-4 mt-1" />
              <Typography
                variant="bodyMd"
                className="text-body_text_color_gray"
              >
                Secure your account by using a unique password that you
                don't use elsewhere. We recommend a mix of letters,
                numbers, and symbols.
              </Typography>
            </div>

            {/* Back to Login */}
            <div className="flex justify-center pt-4">
              <div className="flex items-center gap-2">
                <img src={Icon} alt="back-icon" />
                <TertiaryButton
                  text="Back to log in"
                  className="!text-body_text_color_gray !font-[700]"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto flex justify-center pb-6">
        <FooterPages />
      </div>
    </div>
  );
};

export default ResetPassword;