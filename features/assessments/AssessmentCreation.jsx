import React, { useState } from "react";
import Typography from "../../shared/components/Typography";
import PrimaryButton from "../../shared/components/PrimaryButton";
import { BUTTON_DEFAULT_VARIENT_TEXT, BUTTON_SIZES } from "../../constants/constants";
import Icon40 from "../../assets/Icon40.png";
import Input from "../../shared/components/Input";
import AssessmentLayout from "../../pages/AssessmentLayout";
import AssessmentInstructions from "./AssessmentInstructions";

const AssessmentCreation = () => {
  const [showInstructions, setShowInstructions] = useState(false); // state to toggle view

  if (showInstructions) {
    // jab button click ho jaye, ye render hoga
    return <AssessmentInstructions />;
  }

  return (

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-[2rem] mt-[0.88rem] mx-auto mb-[1.9rem] w-[38rem]">

          <div className="flex flex-col justify-center items-center rounded-[0.625rem] border border-border_color bg-primary_white shadow-[0_0.125rem_0.3125rem_rgba(0,0,0,0.20)] w-[38rem] h-[45.69rem] px-[5rem] pt-[4rem] pb-[2.25rem]">

            <div className="flex flex-col justify-center items-center gap-[2rem] w-[28rem]">

              <div className="flex w-[4rem] h-[4rem] justify-center items-center rounded-full bg-blue-50">
                <img src={Icon40} className="w-full h-full p-3 object-contain" />
              </div>

              <div className="flex flex-col justify-center items-center gap-[0.5rem] w-full">
                <Typography variant="headingXl">
                  Start your Assessment
                </Typography>

                <Typography variant="bodyMd" className="text-body_text_color_gray text-center">
                  This assessment helps the company understand how your traits and working style align with the role.
                </Typography>
              </div>

              <div className="flex flex-col w-full gap-[0.5rem]">
                <Typography variant="bodySm" className="font-bold text-black">
                  Full Name
                </Typography>
                <Input placeholder="Jim Carry" />
              </div>

              <div className="flex flex-col w-full gap-[0.5rem]">
                <Typography variant="bodySm" className="font-bold text-black">
                  Email Address
                </Typography>
                <Input placeholder="name@company.com" />
              </div>

              <PrimaryButton
                variant={BUTTON_DEFAULT_VARIENT_TEXT.FILLED}
                size={BUTTON_SIZES.MEDIUM}
                text="Get Started"
                className="!w-full !h-[3.56rem]"
                onClick={() => setShowInstructions(true)} // 🔑 toggle state on click
              />

            </div>

          </div>

        </div>
      </div>

  );
};

export default AssessmentCreation;