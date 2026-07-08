import React from "react";
import Typography from "../../shared/components/Typography";
import SecondaryButton from "../../shared/components/SecondaryButton";
import PrimaryButton from "../../shared/components/PrimaryButton";
import Input from "../../shared/components/Input";
import { BUTTON_DEFAULT_VARIENT_TEXT, BUTTON_SIZES, SECONDARY_BUTTON_SIZES } from "../../constants/constants";
import { FcGoogle } from "react-icons/fc";
import Ellipse55 from "../../assets/Ellipse 55.png";
import Ellipse56 from "../../assets/Ellipse 56.png";
import Ellipse551 from "../../assets/Ellipse 55 (1).png";
import Vector4 from "../../assets/Vector (4).png";
import SVG2 from "../../assets/SVG (2).png";

const CompanyInformation = ({ nextStep, prevStep }) => {
  return (
    <div className="flex w-[90rem] min-h-[56.25rem] bg-gray-50">

      {/* LEFT BLUE PANEL */}
      <div className="w-[45rem] px-[6.5rem] py-[5rem] bg-gradient-to-r from-blue-800 via-blue-600 to-blue-600 flex flex-col items-center gap-[2.5rem]">

        {/* LOGO */}
        <div className="w-full">
          <Typography variant="brand" className="!text-primary_white !font-[900]">
            TraitsMatcher
          </Typography>
        </div>

        <div className="w-[32rem] flex flex-col gap-[2.5rem]">

          {/* HEADING */}
          <div className="flex flex-col gap-[1.5rem] text-center">
            <Typography variant="headingXl" className="!text-primary_white">
              Build a company profile<br />that attracts top talent.
            </Typography>

            <Typography variant="bodyMd" className="!text-body_text_color_white">
              Showcase your culture, values, and vision. Completing your profile helps us match you with candidates <br></br> who share your DNA.
            </Typography>
          </div>

          {/* FEATURES */}
<div className="flex flex-col gap-[1.5rem]">

  {/* FEATURE 1 */}
  <div className="flex gap-[1rem] items-start">

    <div className="w-[1.5rem] h-[1.5rem] rounded-full bg-blue-600 flex items-center justify-center mt-[0.25rem]">
      {/* yahan tum image use kar sakti ho */}
      <div className="w-[0.625rem] h-[0.375rem] border-b-2 border-l-2 border-white rotate-[-45deg]" />
    </div>

    <div className="flex flex-col gap-[0.25rem]">
      <Typography variant="bodySm" className="!text-primary_white !font-[700]">
        Culture Showcase
      </Typography>

      <Typography variant="bodySm" className="!text-body_text_color_white">
        Present your unique work environment with media and <br/>
        stories.
      </Typography>
    </div>

  </div>


  {/* FEATURE 2 */}
  <div className="flex gap-[1rem] items-start">

    <div className="w-[1.5rem] h-[1.5rem] rounded-full bg-blue-600 flex items-center justify-center mt-[0.25rem]">
      <div className="w-[0.625rem] h-[0.375rem] border-b-2 border-l-2 border-white rotate-[-45deg]" />
    </div>

    <div className="flex flex-col gap-[0.25rem]">
      <Typography variant="bodySm" className="!text-primary_white !font-[700]">
        AI-Driven Matching
      </Typography>

      <Typography variant="bodySm" className="!text-body_text_color_white">
        Our algorithms connect you with candidates based on value <br />
        alignment.
      </Typography>
    </div>

  </div>


  {/* FEATURE 3 */}
  <div className="flex gap-[1rem] items-start">

    <div className="w-[1.5rem] h-[1.5rem] rounded-full bg-blue-600 flex items-center justify-center mt-[0.25rem]">
      <div className="w-[0.625rem] h-[0.375rem] border-b-2 border-l-2 border-white rotate-[-45deg]" />
    </div>

    <div className="flex flex-col gap-[0.25rem]">
      <Typography variant="bodySm" className="!text-primary_white !font-[700]">
        Hiring Insights
      </Typography>

      <Typography variant="bodySm" className="!text-body_text_color_white">
        Get data-driven feedback on how candidates perceive <br /> your brand.
      </Typography>
    </div>

  </div>

</div>

          {/* TESTIMONIAL BOX */}
<div className="self-stretch p-[1.5rem] bg-white/10 rounded-[0.75rem] flex flex-col items-start gap-[0.5rem]">

  {/* TOP SECTION */}
  <div className="self-stretch flex items-center">

    {/* IMAGES */}
    <div className="flex items-start">
      <img
        src={Ellipse55}
        alt="user"
        className="w-[2rem] h-[2rem] rounded-full"
      />
      <img
        src={Ellipse56}
        alt="user"
        className="w-[2rem] h-[2rem] rounded-full -ml-[0.5rem]"
      />
      <img
        src={Ellipse551}
        alt="user"
        className="w-[2rem] h-[2rem] rounded-full -ml-[0.5rem]"
      />
    </div>

    {/* TEXT */}
    <div className="pl-[0.5rem]">
      <Typography
        variant="bodySm"
        className="!text-primary_white !font-[700]"
      >
        Join 500+ innovative companies
      </Typography>
    </div>

  </div>

  {/* DESCRIPTION */}
  <div className="self-stretch">
    <Typography
      variant="bodySm"
      className="!text-body_text_color_white"
    >
      "TraitsMatcher transformed our technical recruiting by focusing on
      cultural fit first." — HR Director, TechFlow
    </Typography>
  </div>

</div>

          {/* GOOGLE BUTTON */}
          <div className="flex flex-col gap-[1.5rem]">
            <div className="flex flex-col items-start self-stretch">
              <SecondaryButton
                size={SECONDARY_BUTTON_SIZES.LARGE}
                text="Log in with Google"
                icon={<FcGoogle size={20} />}
                hoverEnabled
                className="w-full !text-[1.125rem] !font-[700] !bg-primary_white !h-[3.56rem] text-primary_black"
              />
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT FORM PANEL */}
      <div className="flex-1 px-[8rem] py-[6rem] bg-primary_white flex justify-center items-center">

        <div className="w-[32rem] flex flex-col gap-[2rem]">

          {/* STEP HEADER */}
          <div className="flex flex-col gap-[0.5rem]">

            <div className="flex justify-between items-center">
              <Typography variant="caption" className="!text-primary_blue !font-[700] uppercase">
                Step 2 of 3
              </Typography>

              <Typography variant="bodySm" className="!text-body_text_color_gray">
                Company Information
              </Typography>
            </div>

            <div className="w-full h-[0.375rem] bg-body_text_color_white rounded-full">
              <div className="w-[66%] h-full bg-primary_blue rounded-full" />
            </div>

          </div>

          {/* TITLE */}
          <div className="flex flex-col gap-[0.5rem]">
            <Typography variant="headingXl">
              Company Information
            </Typography>

            <Typography variant="bodyMd" className="!text-body_text_color_gray">
              Tell us more about your organization.
            </Typography>
          </div>

          {/* FORM */}
          <div className="flex flex-col gap-[1.5rem]">

            {/* Company Name */}
            <div className="flex flex-col gap-[0.25rem]">
              <Typography variant="bodySm" className="!font-[700]">
                Company Name
              </Typography>
              <Input placeholder="e.g. Acme Corp" />
            </div>

            {/* Employees */}
<div className="flex flex-col gap-[0.25rem]">
  <Typography variant="bodySm" className="!font-[700]">
    Number of Employees
  </Typography>

  <div className="relative">
    <select className="w-full h-[3.5rem] px-[1rem] pr-[2.5rem] rounded-[0.625rem] outline outline-1 outline-gray-300 text-body_text_color_gray appearance-none">
      <option>Select Range</option>
      <option>1 - 10</option>
      <option>11 - 50</option>
      <option>51 - 200</option>
      <option>200+</option>
    </select>

    {/* Custom Arrow */}
    <img
      src={SVG2}
      alt="arrow"
      className="absolute right-[0.75rem] top-1/2 -translate-y-1/2 w-[1.5rem] h-[1.5rem] pointer-events-none"
    />
  </div>
</div>

            {/* Core Values */}
            <div className="flex flex-col gap-[0.25rem]">
              <Typography variant="bodySm" className="!font-[700]">
                Core Values
              </Typography>
              <div className="relative">
              <select className="w-full h-[3.5rem] px-[1rem] pr-[2.5rem] rounded-[0.625rem] outline outline-1 outline-gray-300 text-body_text_color_gray appearance-none">
                <option>Select core values</option>
                <option>Integrity</option>
                <option>Innovation</option>
                <option>Teamwork</option>
                <option>Transparency</option>
              </select>
                  {/* Custom Arrow */}
    <img
      src={SVG2}
      alt="arrow"
      className="absolute right-[0.75rem] top-1/2 -translate-y-1/2 w-[1.5rem] h-[1.5rem] pointer-events-none"
    />
              
            </div>


            {/* Upload */}
            <div className="flex flex-col gap-[0.25rem] pt-[1.5rem]">
              <Typography variant="bodySm" className="!font-[700]">
                Upload Your Logo
              </Typography>

              <div className="px-[1.5rem] py-[1.5rem] rounded-[0.625rem] outline outline-2 outline-gray-300 flex flex-col items-center gap-[0.5rem]">

                <div className="w-[2.5rem] h-[2.5rem] rounded" > 
                    <img src={Vector4} alt="vector" />
                </div>

                <div className="flex gap-[0.25rem]">
                  <Typography variant="bodyMd" className="!text-primary_blue">
                    Upload a file
                  </Typography>
                  <Typography variant="bodyMd" className="!text-body_text_color_gray">
                    or drag and drop
                  </Typography>
                </div>

                <Typography variant="bodySm" className="!text-body_text_color_gray">
                  PNG, JPG, GIF up to 10MB
                </Typography>

              </div>
            </div>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="pt-[1rem] border-t flex justify-between">

            <SecondaryButton
              onClick={prevStep}
              size={BUTTON_SIZES.SMALL}
              text="Back"
              className="px-[2rem] py-[0.75rem]"
            />

            <PrimaryButton
              variant={BUTTON_DEFAULT_VARIENT_TEXT.FILLED}
              size={BUTTON_SIZES.SMALL}
              text="Next"
              onClick={nextStep}
              className="px-[2rem] py-[0.75rem]"
            />

          </div>

        </div>
      </div>

    </div>
  );
};

export default CompanyInformation;