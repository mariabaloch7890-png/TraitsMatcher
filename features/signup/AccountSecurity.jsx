import React from "react";
import Typography from "../../shared/components/Typography";
import { BUTTON_DEFAULT_VARIENT_TEXT, BUTTON_SECONDARY_VARIANT_TEXT, BUTTON_SIZES, SECONDARY_BUTTON_SIZES } from "../../constants/constants";
import { FcGoogle } from "react-icons/fc";
import SecondaryButton from "../../shared/components/SecondaryButton";
import Input from "../../shared/components/Input";
import PrimaryButton from "../../shared/components/PrimaryButton";
import SVG from "../../assets/SVG.png";
import SVG1 from "../../assets/SVG1.png";

const AccountSecurity = ({ prevStep }) => {
  return (
    <div className="bg-gray-50 inline-flex justify-start items-start">

      {/* LEFT SIDE */}

      <div className="w-[45rem] h-[54rem] px-[6rem] py-[5rem] bg-gradient-to-r from-blue-800 via-primary_blue to-primary_blue flex flex-col items-center gap-[5rem]">

       {/* LOGO */}
        <div className="w-[32rem] flex flex-col items-start">
          <Typography
            variant="brand"
            className="!text-primary_white !font-[900]"
          >
            TraitsMatcher
          </Typography>
        </div>

        <div className="min-w-[32rem] max-w-[32rem] flex flex-col items-start gap-10">

          <div className="w-[32rem] flex flex-col items-center">
            <Typography variant='headingXl' className="text-center text-primary_white">
              Your privacy is our top <br /> priority.
            </Typography>
          </div>

          <div className="w-[32rem] flex flex-col items-center">
            <Typography varaint="headingMd" className="text-center text-body_text_color_white">
              Your security is our priority. We use AES-256 encryption,
              regular security audits, and strict data access controls
              to ensure your personality profile remains private and protected.
            </Typography>
          </div>

          {/* FEATURES */}

          <div className="w-[32rem] flex flex-col items-center">

            <div className="flex items-center gap-3">
              <div className="w-6 h-6"><img src={SVG} alt="svg" /></div>
              <Typography variant="bodySm" className="text-body_text_color_white">
                End-to-end encryption for all personal data
              </Typography>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <div className="w-6 h-6"><img src={SVG1} alt="svg" /></div>
              <Typography variant="bodySm" className="text-body_text_color_white">
                Multi-factor authentication ready
              </Typography>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <div className="w-6 h-6"><img src={SVG} alt="svg" /></div>
              <Typography variant="bodySm" className="text-body_text_color_white">
                Fully GDPR & CCPA compliant
              </Typography>
            </div>

          </div>
          {/* GOOGLE BUTTON */}
          <div className="flex flex-col gap-[1.5rem]">
            <div className="flex flex-col items-start self-stretch pt-[2rem]">
              <SecondaryButton
                size={SECONDARY_BUTTON_SIZES.LARGE}
                text="Log in with Google"
                icon={<FcGoogle size={20} />}
                hoverEnabled
                className="!w-[32rem] !text-[1.125rem] !font-[700] !bg-primary_white !h-[3.56rem] text-primary_black"
              />
            </div>
          </div>

        </div>
      </div>


      {/* RIGHT SIDE */}

      <div className="w-[45rem] px-[6rem] py-[9rem] bg-white flex flex-col justify-center items-center">

        <div className="min-w-[32rem] flex flex-col gap-8">

          {/* STEP HEADER */}

          <div className="flex flex-col gap-2">

            <div className="flex justify-between items-center">

              <Typography variant="sectionLabel" className="text-primary_blue uppercase tracking-wide">
                Step 3 of 3
              </Typography>

              <Typography variant="bodySm" className="text-primary_blue">
                Almost there
              </Typography>

            </div>

            <div className="h-[0.375rem] bg-slate-100 rounded-[0.625rem] overflow-hidden">
              <div className="h-full bg-primary_blue w-full"></div>
            </div>

          </div>


          {/* TITLE */}

          <div className="flex flex-col gap-2">

            <Typography variant="headingXl">
              Account Security
            </Typography>

            <Typography variant="bodyMd" className="text-body_text_color_gray">
              Set your password and finalize your account.
            </Typography>

          </div>


          {/* FORM */}

          <div className="flex flex-col gap-6">

            {/* PASSWORD */}

            <div className="flex flex-col gap-1">

              <Typography variant="bodySm" className="!font-bold">
                Password
              </Typography>
               <Input placeholder="••••••••"></Input>

              <Typography variant="caption" className="text-body_text_color_gray">
                Must be at least 8 characters with a number and symbol.
              </Typography>

            </div>


            {/* CONFIRM PASSWORD */}

            <div className="flex flex-col gap-1">

              <Typography variant="bodySm" className="!font-bold">
                Confirm Password
              </Typography>
              <Input placeholder="••••••••"></Input>

            </div>


            {/* TERMS */}

            <div className="flex items-start gap-3">

              <input type="checkbox" className="w-5 h-5" />

              <Typography variant="bodySm" className="text-body_text_color_gray">
                I agree to the
                <span className="text-primary_blue"> Terms of Service </span>
                and
                <span className="text-primary_blue"> Privacy Policy</span>
              </Typography>

            </div>


            {/* BUTTONS */}

            <div className="pt-4 flex justify-between items-center">

              <SecondaryButton
                onClick={prevStep}
                size={BUTTON_SIZES.SMALL} text="Back"
              />
            

              <PrimaryButton variant={BUTTON_DEFAULT_VARIENT_TEXT.FILLED} size={BUTTON_SIZES.MEDIUM} text="Create Account" className="px-8 py-3 !w-[12.75rem] rounded-[0.625rem]">
              
              </PrimaryButton>

            </div>

          </div>


          {/* SUPPORT */}

          <div className="flex justify-center gap-1">

            <Typography variant="bodySm" className="text-body_text_color_gray">
              Having trouble?
            </Typography>

            <Typography variant="bodySm" className="text-primary_blue !font-bold">
              Contact our support team
            </Typography>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AccountSecurity;