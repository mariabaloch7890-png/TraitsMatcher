import React from "react";
import Input from "../../shared/components/Input";
import Typography from "../../shared/components/Typography";
import PrimaryButton from "../../shared/components/PrimaryButton";
import SecondaryButton from "../../shared/components/SecondaryButton";
import { 
  BUTTON_DEFAULT_VARIENT_TEXT, 
  BUTTON_SIZES, 
  SECONDARY_BUTTON_SIZES 
} from "../../constants/constants";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

/* IMAGE IMPORTS */
import Icon50 from "../../assets/Icon50.png";
import Icon51 from "../../assets/Icon51.png";

const BasicInformation = ({ nextStep }) => {
  return (
    <div className="flex flex-col md:flex-row w-screen h-screen bg-[#F8FAFC]">

      {/* LEFT BLUE PANEL */}
      <div
        className="flex flex-col justify-start items-center w-[45rem] px-[6rem] py-[5rem] gap-[4rem]"
        style={{
          background:
            "linear-gradient(135deg,#1E3A8A 0%,#2563EB 50%,#3B82F6 100%)",
        }}
      >

        {/* LOGO */}
        <div className="w-[32rem] flex flex-col items-start">
          <Typography
            variant="brand"
            className="!text-primary_white !font-[900]"
          >
            TraitsMatcher
          </Typography>
        </div>

        <div className="w-[32rem] flex flex-col gap-[2.5rem]">

          {/* HEADING */}
          <div className="flex flex-col gap-[1.5rem]">
            <Typography
              variant="headingXl"
              className="!text-primary_white !text-center"
            >
              Hire for fit, not just skills.
            </Typography>

            <Typography
              variant="bodyMd"
              className="!text-body_text_color_white !text-center"
            >
              Join 2,000+ companies using AI-powered culture <br />  assessments
              to build high-performing, aligned teams.
            </Typography>
          </div>

          {/* FEATURES */}
          <div className="flex flex-col gap-[1.5rem]">

            {/* FEATURE 1 */}
            <div className="flex gap-[1rem] p-[1.25rem] rounded-[1rem] border border-white/10 bg-white/10">
              <div className="flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-lg bg-white/20">
                <img src={Icon50} alt="feature icon" className="w-[1.25rem] h-[1.25rem]" />
              </div>

              <div className="flex flex-col gap-[0.25rem]">
                <Typography variant="bodyMd" className="!text-primary_white !font-[700]">
                  90% Reduction in Bad Hires
                </Typography>

                <Typography variant="bodySm" className="!text-body_text_color_white">
                  Our psychometric models ensure cultural <br /> alignment from day one.
                </Typography>
              </div>
            </div>

            {/* FEATURE 2 */}
            <div className="flex gap-[1rem] p-[1.25rem] rounded-[1rem] border border-white/10 bg-white/10">
              <div className="flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-lg bg-white/20">
                <img src={Icon51} alt="feature icon" className="w-[1.25rem] h-[1.25rem]" />
              </div>

              <div className="flex flex-col gap-[0.25rem]">
                <Typography variant="bodyMd" className="!text-primary_white !font-[700]">
                  Faster Time-to-Hire
                </Typography>

                <Typography variant="bodySm" className="!text-body_text_color_white">
                  Automate early-stage screening with <br />objective data.
                </Typography>
              </div>
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
                className="w-full !text-[1.125rem] !font-[700] !bg-primary_white !h-[3.125rem] text-primary_black"
              />
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT FORM PANEL */}
     <div className="flex flex-col flex-1 bg-primary_white px-[10rem] py-[9.38rem]">

  <div className="flex flex-col max-w-[28rem] w-full gap-[2rem]">

    {/* STEP HEADER */}
    <div className="flex flex-col gap-[0.5rem]">

      <div className="flex justify-between items-center">

        <Typography
          variant="caption"
          className="!text-primary_blue !font-[700] uppercase tracking-[0.05em]"
        >
          Step 1 of 3
        </Typography>

        <Typography
          variant="bodySm"
          className="!text-body_text_color_gray"
        >
          Basic Information
        </Typography>

      </div>

      {/* PROGRESS BAR */}
      <div className="w-full h-[0.375rem] bg-input_border_light rounded-full overflow-hidden">
        <div className="w-[33.33%] h-full bg-primary_blue rounded-full"></div>
      </div>

    </div>

    {/* TITLE */}
    <div className="flex flex-col gap-[0.5rem]">

      <Typography variant="headingXl" className="!leading-[2rem]">
        Basic Information
      </Typography>

      <Typography
        variant="bodyMd"
        className="!text-body_text_color_gray !leading-[1.5rem]"
      >
        Let's get started with your account details.
      </Typography>

    </div>

    {/* FORM */}
    <div className="flex flex-col gap-[1.5rem]">

      {/* LANGUAGE */}
      <div className="flex flex-col gap-[0.5rem]">

        <Typography variant="bodySm" className="!font-[700]">
          Language
        </Typography>

        <Input
          placeholder="Select your preferred language"
          className="!h-[3.5rem]"
        />

      </div>

      {/* EMAIL */}
      <div className="flex flex-col gap-[0.5rem]">

        <Typography variant="bodySm" className="!font-[700]">
          Work Email
        </Typography>

        <Input
          placeholder="name@company.com"
          className="!h-[3.5rem]"
        />

      </div>

    </div>

    {/* BUTTON */}
    <PrimaryButton
      variant={BUTTON_DEFAULT_VARIENT_TEXT.FILLED}
      text="Continue to step 2"
      size={BUTTON_SIZES.LARGE}
      className="!w-full !h-[3.5rem] !text-[1rem] !font-[700]"
      onClick={nextStep}
    />

    {/* LOGIN */}
    <div className="flex justify-center items-center gap-[0.25rem]">

      <Typography
        variant="bodySm"
        className="!text-body_text_color_gray"
      >
        Already have an account?
      </Typography>

      <Link to="/login">
        <Typography
          variant="bodySm"
          className="!text-primary_blue !font-[700]"
        >
          Login
        </Typography>
      </Link>

    </div>

  </div>
</div>
    </div>
  );
};

export default BasicInformation;