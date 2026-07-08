import React from "react";
import Typography from "../../shared/components/Typography";
import Input from "../../shared/components/Input";
import SecondaryButton from "../../shared/components/SecondaryButton";
import { SECONDARY_BUTTON_SIZES } from "../../constants/constants";


const AccountSettings = () => {
  return (
    <div className="w-[54.5rem] h-[38.75rem] px-[1.5rem] pt-[1.5rem] pb-[0.0625rem] bg-primary_white rounded-[0.625rem] outline outline-[0.0625rem] outline-slate-200 flex flex-col">

      <div className="flex flex-col gap-[1.5rem] w-full">

        {/* Heading */}
        <div className="flex flex-col gap-[0.5rem]">
          <Typography variant="headingMdBold">
            Account Settings
          </Typography>
          <Typography variant="bodySm" className="text-body_text_color_gray">
            Manage your personal account information
          </Typography>
        </div>

        {/* Avatar + Change Button */}
        <div className="flex items-center gap-[1rem] h-20">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex justify-center items-center">
            <Typography variant="brand" className="text-primary_blue !font-bold">
              JD
            </Typography>
          </div>
          <div className="px-7 py-2.5 rounded-[0.625rem] outline-body_text_color_gray flex justify-center items-center">
            <SecondaryButton size={SECONDARY_BUTTON_SIZES.MEDIUM} text='Change Avatar' className="w-[9.93rem] h-[2.5rem] whitespace-nowrap text-[0.875rem]"></SecondaryButton>
          </div>
        </div>

        {/* First & Last Name */}
        <div className="flex gap-[1.5rem]">
          <div className="flex flex-col gap-2 w-96">
            <Typography variant="bodySm" className="!font-bold">
              First Name
            </Typography>
            <Input placeholder="John" className="h-14 px-4 py-3.5 rounded-[0.625rem] outline outline-1 outline-zinc-300" />
          </div>
          <div className="flex flex-col gap-2 w-96">
            <Typography variant="bodySm" className="!font-bold">
              Last Name
            </Typography>
            <Input placeholder="Doe" className="h-14 px-4 py-3.5 rounded-[0.625rem] outline outline-1 outline-zinc-300" />
          </div>
        </div>

        {/* Email Address */}
        <div className="flex flex-col gap-2 w-96">
          <Typography variant="bodySm" className="!font-bold">
            Email Address
          </Typography>
          <Input placeholder="john@acmecorp.com" className="h-14 px-4 py-3.5 rounded-[0.625rem] outline outline-1 outline-zinc-300" />
        </div>

        {/* Job Title */}
        <div className="flex flex-col gap-2 w-96">
          <Typography variant="bodySm" className="!font-bold">
            Job Title
          </Typography>
          <Input placeholder="HR Manager" className="h-14 w-[51.355rem] px-4" />
        </div>

        {/* Save Changes Button */}
        <div className="pt-4 border-t border-slate-200 flex justify-end">
          <button className="px-7 py-3.5 bg-blue-600 rounded-[0.625rem] shadow-md flex items-center gap-1">
            <Typography variant="bodyMdBold" className="text-white">
              Save Changes
            </Typography>
          </button>
        </div>

      </div>
    </div>
  );
};

export default AccountSettings;
