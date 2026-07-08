import React from "react";
import Typography from "../../shared/components/Typography";
import PrimaryButton from "../../shared/components/PrimaryButton";
import { BUTTON_DEFAULT_VARIENT_TEXT, BUTTON_SIZES } from "../constants/constants";
import Icon10 from "../../assets/Icon10.svg";
import AssessmentLayout from "../../layouts/AssessmentLayout";

const AssessmentComplete = () => {
  return (
    <AssessmentLayout>
      <div className="flex flex-col justify-center items-center">

        <div className="flex w-[38rem] flex-col justify-center items-center gap-[2rem] mt-[0.88rem] mx-auto mb-[1.9rem]">

          {/* Card */}
          <div className="flex justify-center items-center w-[38rem] h-[40.6875rem] rounded-[0.625rem] border border-[#D4D4D4] bg-primary_white shadow-[0_0.125rem_0.3125rem_rgba(0,0,0,0.20)]">
            <div className="flex flex-col items-center w-[24rem] gap-[1.5rem]">

              {/* Icon */}
              <div className="relative w-[6rem] h-[6rem] flex justify-center items-center">
                <div className="absolute w-[6rem] h-[6rem] bg-emerald-100 rounded-full border border-teal-500"></div>
                <img src={Icon10} alt="success icon" className="relative z-10 w-[3rem] h-[3rem]" />
              </div>

              {/* Heading */}
              <Typography variant="headingXl" className="text-center">
                Assessment complete!
              </Typography>

              {/* Description */}
              <Typography variant="bodyMd" className="text-body_text_color_gray text-center whitespace-nowrap">
                Thank you for taking the time to complete this assessment.<br />
                You may now close this window
              </Typography>

              {/* Success message box */}
              <div className="flex w-[25.85rem] px-[1.5rem] py-[1.5rem] bg-emerald-100 rounded-[0.75rem] border border-teal-500 justify-center items-center whitespace-nowrap">
                <Typography variant="bodyMd" className="text-emerald-800 text-center">
                  Your responses have been submitted successfully.
                </Typography>
              </div>

              {/* Button */}
              <PrimaryButton
                variant={BUTTON_DEFAULT_VARIENT_TEXT.FILLED}
                size={BUTTON_SIZES.MEDIUM}
                text="Close"
                className="!w-[24rem] !h-[3.5rem]"
              />

            </div>
          </div>

        </div>
      </div>
    </AssessmentLayout>
  );
};

export default AssessmentComplete;