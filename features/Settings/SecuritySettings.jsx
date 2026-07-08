import React from "react";
import Typography from "../../shared/components/Typography";
import Input from "../../shared/components/Input";

const SecuritySettings = () => {
  return (
    <div className="w-[53.125rem] h-[43.11rem] p-6 bg-primary_white rounded-lg outline outline-1 outline-slate-200 flex flex-col gap-6">

      {/* Heading */}
      <div className="flex flex-col gap-2">
        <Typography variant="headingMdBold">Security Settings</Typography>
        <Typography variant="bodySm" className="text-body_text_color_gray">
          Manage password and account security
        </Typography>
      </div>

      {/* Change Password */}
      <div className="flex flex-col gap-4 p-5 rounded-lg outline outline-1 outline-slate-200">
        <Typography variant="bodyMdBold">Change Password</Typography>

        <div className="flex flex-col gap-4 relative">
          {/* Current Password */}
          <div className="flex flex-col gap-2">
            <Typography variant="bodySm" className="!font-bold">Current Password</Typography>
                        <Input placeholder="Enter current password" className="w-full h-12"></Input>
          </div>

          {/* New Password */}
          <div className="flex flex-col gap-2">
            <Typography variant="bodySm" className="!font-bold">New Password</Typography>
                        <Input placeholder="Enter new password" className="w-full h-12"></Input>
          </div>

          {/* Confirm New Password */}
          <div className="flex flex-col gap-2">
            <Typography variant="bodySm" className="!font-bold">Confirm New Password</Typography>
            <Input placeholder="Confirm new password" className="w-full h-12"></Input>
          </div>

          {/* Update Button */}
          <button className="mt-4 px-7 py-3.5 bg-primary_blue rounded-lg shadow-md text-primary_white font-bold text-base">
            Update Password
          </button>
        </div>
      </div>

      {/* Two-Factor Authentication */}
      <div className="flex flex-col gap-3 p-5 rounded-lg outline outline-1 outline-slate-200">
        <Typography variant="bodyMdBold">Two-Factor Authentication</Typography>
        <Typography variant="bodySm" className="text-body_text_color_gray">
          Add an extra layer of security to your account
        </Typography>

        {/* Circular Checkbox */}
        <label className="flex items-center gap-3 cursor-pointer mt-2">
          <input type="checkbox" className="hidden peer" />
          <div className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center peer-checked:bg-primary_blue peer-checked:border-blue-600">
            <svg
              className="w-3 h-3 text-primary_white opacity-0 peer-checked:opacity-100"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <Typography variant="bodySm" className=" text-primary_black">
            Enable two-factor authentication
          </Typography>
        </label>
      </div>

    </div>
  );
};

export default SecuritySettings;