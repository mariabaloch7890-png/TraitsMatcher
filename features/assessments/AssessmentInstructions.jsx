import React from "react";
import Typography from "../../shared/components/Typography";
import PrimaryButton from "../../shared/components/PrimaryButton";
import { BUTTON_DEFAULT_VARIENT_TEXT, BUTTON_SIZES } from "../../constants/constants";
import Icon41 from "../../assets/Icon41.png";
import Icon42 from "../../assets/Icon42.png";
import Icon43 from "../../assets/Icon43.png";
import Icon44 from "../../assets/Icon44.png";
import X from "../../assets/X.png";
import AssessmentLayout from "../../pages/AssessmentLayout";

const AssessmentInstructions = () => {
  return (

      <div className="flex flex-col justify-center items-center">

        <div className="flex w-[38rem] flex-col justify-center items-center gap-[2rem] mt-[0.88rem] mx-auto mb-[1.9rem]">

          {/* Card */}
          <div className="relative flex flex-col items-center rounded-[0.625rem] border border-border_color bg-primary_white shadow-[0_0.125rem_0.3125rem_rgba(0,0,0,0.20)] w-[38rem] px-[5rem] pt-[4rem] pb-[3rem]">

            {/* Close icon */}
            <img src={X} alt="Close" className="absolute left-[92%] top-[2%]" />

            {/* Main content */}
            <div className="flex flex-col items-center gap-[2rem] w-[28rem]">

              {/* Top icon */}
              <div className="flex w-[4rem] h-[4rem] justify-center items-center rounded-full bg-[#EFF6FF]">
                <img src={Icon41} alt="icon" className="w-full h-full p-[0.75rem] object-contain" />
              </div>

              {/* Heading */}
              <div className="flex flex-col items-center gap-[0.75rem] text-center">
                <Typography variant="headingXl">
                  Welcome! Let’s discover your <br />
                  perfect team fit
                </Typography>

                <Typography variant="bodyMd" className="text-body_text_color_gray">
                  You're about to complete our personality and culture assessment at <span className="text-primary_blue">TraitsMatcher</span>.
                  Here's what you need to know to get the most accurate results.
                </Typography>
              </div>

              {/* Info points */}
              <div className="flex flex-col gap-[1.5rem] w-full mt-[1rem]">

                {/* Point 1 */}
                <div className="flex items-start gap-[1rem]">
                  <img src={Icon42} alt="icon" className="w-[1.5rem] h-[1.5rem]" />
                  <div className="flex flex-col gap-[0.25rem]">
                    <Typography variant="bodyMdBold">Time Commitment</Typography>
                    <Typography variant="bodyMd" className="text-body_text_color_gray">
                      Set aside 40-50 minutes in a quiet space. This assessment works best when completed in one sitting.
                    </Typography>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex items-start gap-[1rem]">
                  <img src={Icon43} alt="icon" className="w-[1.5rem] h-[1.5rem]" />
                  <div className="flex flex-col gap-[0.25rem]">
                    <Typography variant="bodyMdBold">Be Authentic</Typography>
                    <Typography variant="bodyMd" className="text-body_text_color_gray">
                      There are no right or wrong answers. Respond honestly based on who you truly are, not who you think you should be.
                    </Typography>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex items-start gap-[1rem]">
                  <img src={Icon44} alt="icon" className="w-[1.5rem] h-[1.5rem]" />
                  <div className="flex flex-col gap-[0.25rem]">
                    <Typography variant="bodyMdBold">Trust Your Instincts</Typography>
                    <Typography variant="bodyMd" className="text-body_text_color_gray">
                      Go with your first reaction. Overthinking can lead to less accurate results. Your gut feeling is usually the right one.
                    </Typography>
                  </div>
                </div>

              </div>

              {/* Button */}
              <PrimaryButton
                variant={BUTTON_DEFAULT_VARIENT_TEXT.FILLED}
                size={BUTTON_SIZES.MEDIUM}
                text="Begin Assessment"
                className="!w-[28rem] !h-[3.5rem] !mt-[1rem]"
              />

            </div>
          </div>

        </div>
      </div>

  );
};

export default AssessmentInstructions;