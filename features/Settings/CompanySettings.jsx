import React from "react";
import Typography from "../../shared/components/Typography";
import Input from "../../shared/components/Input";
import PrimaryButton from "../../shared/components/PrimaryButton";
import { BUTTON_DEFAULT_VARIENT_TEXT, BUTTON_SIZES } from "../../constants/constants";

const CompanySettings = () => {
  return (
    <div className="w-[54.5rem] h-[32.125rem] px-[1.5rem] pt-[1.5rem] pb-[0.0625rem] bg-primary_white rounded-[0.625rem] outline outline-[0.0625rem] outline-slate-200 flex flex-col">

      <div className="flex flex-col gap-[1.5rem] w-full">

        {/* Heading */}
        <div className="flex flex-col gap-[0.5rem]">

          <Typography variant="headingMdBold">
            Company Settings
          </Typography>

          <Typography variant="bodySm" className="text-body_text_color_gray">
            Update your company profile and branding
          </Typography>

        </div>

        {/* Company Name */}
        <div className="flex flex-col gap-[0.5rem]">

          <Typography variant="bodySm" className="!font-bold">
            Company Name
          </Typography>

         <Input className="W-[51.375rem] h-[3.375rem]" placeholder="Acme Corporation"></Input>

        </div>

        {/* Industry + Company Size */}
        <div className="flex gap-[1.5rem]">

          <div className="flex flex-col gap-[0.5rem] w-[24rem]">

            <Typography variant="bodySm" className="!font-bold">
              Industry
            </Typography>

            <Input placeholder="e.g. Technology, Healthcare, Finance" className="h-[3.5rem]"></Input>

          </div>

          <div className="flex flex-col gap-[0.5rem] w-[24rem]">

            <Typography variant="bodySm" className="!font-bold">
              Company Size
            </Typography>
            <Input placeholder="Enter Company Size" className="h-[3.5rem]"></Input>

          </div>

        </div>

        {/* Website */}
        <div className="flex flex-col gap-[0.5rem]">

          <Typography variant="bodySm" className="!font-bold">
            Website
          </Typography>

         <Input placeholder="https://acmecorp.com"></Input>

        </div>

        {/* Button */}
        <div className="pt-[1rem] border-t border-slate-200 flex justify-end">


         <PrimaryButton variant={BUTTON_DEFAULT_VARIENT_TEXT.FILLED} size={BUTTON_SIZES.LARGE} text="Save Changes" className="shadow-md h-[3.125rem] w-[11.8rem]"></PrimaryButton>

        </div>

      </div>

    </div>
  );
};

export default CompanySettings;