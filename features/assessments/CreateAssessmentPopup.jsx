import React from "react";
import Typography from "../../shared/components/Typography";
import Input from "../../shared/components/Input";
import PrimaryButton from "../../shared/components/PrimaryButton";
import {
  BUTTON_DEFAULT_VARIENT_TEXT,
  BUTTON_SIZES,
} from "../../constants/constants";
import SecondaryButton from "../../shared/components/SecondaryButton";

const CreateAssessmentPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-primary_black/60 flex justify-center items-center z-50">

      <div className="w-[54.5rem] bg-primary_white rounded-[0.625rem] outline outline-[0.0625rem] outline-slate-200 flex flex-col">

        {/* Header */}
        <div className="px-[2rem] pt-[1.5rem] pb-[1rem] flex flex-col gap-[0.5rem] border-b border-slate-200">

          <div className="flex justify-between items-center">

            <Typography variant="headingXl">
              Create New Assessment
            </Typography>

            <button onClick={onClose} className="text-body_text_color_gray text-lg">
              ✕
            </button>

          </div>

          <Typography
            variant="bodySm"
            className="text-body_text_color_gray"
          >
            Build a custom assessment to evaluate candidate culture fit and traits
          </Typography>

        </div>

        {/* Body */}
        <div className="px-[2rem] py-[2rem] flex flex-col gap-[1.5rem]">

          <div className="flex flex-col gap-[0.5rem]">
            <Typography variant="headingMdBold">
              Assessment Information
            </Typography>

            <Typography
              variant="bodySm"
              className="text-body_text_color_gray"
            >
              Provide basic details about this assessment
            </Typography>
          </div>

          {/* Assessment Name */}
          <div className="flex flex-col gap-[0.5rem]">

            <Typography variant="bodySm" className="!font-bold">
              Assessment Name *
            </Typography>

            <Input
              placeholder="Test"
              className="h-[3.5rem]"
            />

          </div>

          {/* Role + Core Values */}
          <div className="flex gap-[1.5rem]">

            <div className="flex flex-col gap-[0.5rem] w-[24rem]">

              <Typography variant="bodySm" className="!font-bold">
                Role / Position *
              </Typography>

              <Input
                placeholder="Frontend developer"
                className="h-[3.5rem]"
              />

            </div>

            <div className="flex flex-col gap-[0.5rem] w-[24rem]">

              <Typography variant="bodySm" className="!font-bold">
                Core Values
              </Typography>

              <Input
                placeholder="e.g., Engineering"
                className="h-[3.5rem]"
              />

            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="px-[2rem] py-[1rem] border-t border-slate-200 flex justify-between">

          <SecondaryButton
            variant={BUTTON_DEFAULT_VARIENT_TEXT.OUTLINE}
            size={BUTTON_SIZES.LARGE}
            text="Back"
            onClick={onClose}
            className="h-[3.125rem] w-[8rem]"
          />

          <PrimaryButton
            variant={BUTTON_DEFAULT_VARIENT_TEXT.FILLED}
            size={BUTTON_SIZES.LARGE}
            text="Continue"
            className="h-[3.125rem] w-[10rem] shadow-md"
          />

        </div>

      </div>

    </div>
  );
};

export default CreateAssessmentPopup;