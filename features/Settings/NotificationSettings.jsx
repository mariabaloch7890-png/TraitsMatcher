import React from "react";
import Typography from "../../shared/components/Typography";
import PrimaryButton from "../../shared/components/PrimaryButton";
import { BUTTON_DEFAULT_VARIENT_TEXT, BUTTON_SIZES } from "../../constants/constants";

const NotificationSettings = () => {
  return (
    <div className="w-[54.5rem] h-[39rem] p-6 bg-white rounded-lg outline outline-1 outline-slate-200 flex flex-col">

      <div className="flex flex-col gap-6 h-[35.85rem]">

        {/* Heading */}
        <div className="flex flex-col gap-2">
          <Typography variant="headingMdBold">Notification Preferences</Typography>
          <Typography variant="bodySm" className="text-body_text_color_gray">
            Choose how you want to be notified
          </Typography>
        </div>

        {/* Email Notifications */}
        <div className="flex flex-col gap-4 h-[14rem] p-4 rounded-lg outline outline-1 outline-slate-200">
          <Typography variant="bodyMdBold">Email Notifications</Typography>
          <div className="flex flex-col gap-3">
            {[
              "Assessment completions",
              "New candidate invitations",
              "Weekly summary reports",
              "Team member activities",
              "Product updates",
            ].map((item, index) => (
              <label key={index} className="flex items-center gap-3 h-5">
                <input
                  type="checkbox"
                  className="w-[1.5rem] h-[1.5rem] !rounded-full border border-slate-200"
                />
                <Typography variant="bodySm" className="text-body_text_color_gray">
                  {item}
                </Typography>
              </label>
            ))}
          </div>
        </div>

        {/* In-App Notifications */}
        <div className="flex flex-col gap-4 h-[10rem] p-4 rounded-lg outline outline-1 outline-slate-200">
          <Typography variant="bodyMdBold">In-App Notifications</Typography>
          <div className="flex flex-col gap-3">
            {["New submissions", "Status changes", "Mentions and comments"].map(
              (item, index) => (
                <label key={index} className="flex items-center gap-3 h-5">
                  <input
                    type="checkbox"
                    className="w-[1.25rem] h-[1.25rem] rounded-full border border-slate-200"
                  />
                  <Typography variant="bodySm" className="text-body_text_color_gray">
                    {item}
                  </Typography>
                </label>
              )
            )}
          </div>
        </div>

        {/* Save Preferences Button */}
        <div className="flex justify-end pt-3 border-t border-slate-200 h-16">
        <PrimaryButton variant={BUTTON_DEFAULT_VARIENT_TEXT.FILLED} size={BUTTON_SIZES.LARGE} text="Save Preferences" className="shadow-md h-[3.125rem] w-[11.8rem] whitespace-nowrap text-[1rem] !font-bold"></PrimaryButton>

        </div>

      </div>
    </div>
  );
};

export default NotificationSettings;