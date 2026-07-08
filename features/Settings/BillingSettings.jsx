import React from "react";
import Typography from "../../shared/components/Typography";
import SecondaryButton from "../../shared/components/SecondaryButton";
import { BUTTON_SIZES } from "../../constants/constants";

const BillingSettings = () => {
  return (
    <div className="w-[54.3125rem] h-[28.6875rem] p-6 bg-white rounded-lg outline outline-1 outline-slate-200 flex flex-col gap-6">

      {/* Heading */}
      <div className="flex flex-col gap-2">
        <Typography variant="headingMdBold">Billing & Subscription</Typography>
        <Typography variant="bodySm" className="text-slate-500">
          Manage your subscription and payment methods
        </Typography>
      </div>

      {/* Plan Details */}
      <div className="relative h-[9rem] rounded-lg outline outline-1 outline-slate-200">
        <div className="absolute top-5 left-5 w-[48.4375rem] flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <Typography variant="bodyMdBold">Professional Plan</Typography>
            <Typography variant="bodySm" className="text-slate-500">
              $99/month • Billed monthly
            </Typography>
          </div>
          <div className="w-[3.5rem] h-[1.5rem] bg-emerald-100 rounded-lg flex items-center justify-center">
            <Typography variant="sectionLabel" className="text-emerald-800 text-xs">
              Active
            </Typography>
          </div>
        </div>
        <SecondaryButton size={BUTTON_SIZES.MEDIUM} text="Change Plan" className="absolute top-[5.375rem] left-5 px-7 py-2.5 w-[9rem] h-[2.5rem] whitespace-nowrap" ></SecondaryButton>
      </div>

      {/* Payment Method */}
      <div className="flex flex-col gap-4 p-5 rounded-lg outline outline-1 outline-slate-200">
        <Typography variant="bodyMdBold">Payment Method</Typography>
        <div className="flex justify-between items-center h-16 px-4 bg-slate-50 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-[3rem] h-[2.25rem] bg-white rounded-lg outline outline-1 outline-slate-200 flex justify-center items-center">
              <Typography variant="caption" className="text-slate-500">VISA</Typography>
            </div>
            <div className="flex flex-col gap-0">
              <Typography variant="bodySm" className="font-bold">•••• 4242</Typography>
              <Typography variant="caption" className="text-slate-500">Expires 12/2026</Typography>
            </div>
          </div>
          <SecondaryButton size={BUTTON_SIZES.MEDIUM} text="Update" className=" !whitespace-nowrap !px-7 !py-2.5 !w-[6.875rem] !h-[2.5rem] !text-[0.875rem]" ></SecondaryButton>        
        </div>
      </div>

    </div>
  );
};

export default BillingSettings;
